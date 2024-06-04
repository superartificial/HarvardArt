import ColorPie from "@/app/components/ColorPie";
import { Box, Flex, Text, Heading } from "@radix-ui/themes";
import axios from "axios";
import { cache } from "react";

interface Props {
    params: { id: string }
}

const displayFields: { name: string; label?: string; }[] = [
    { name: "title" },
    { name: "medium" },
    { name: "technique" },
    { name: "period" },
    { name: "century" },
    { name: "department" },
    { name: "division" },
    { name: "verificationleveldescription", label: "Verification Level Description" },
];

function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const ArtDetailsPage = async ({ params }: Props) => {

    const apiURL = process.env.HARVARD_API_URL;
    const apiKey = process.env.HARVARD_API_KEY;

    const artDetails: any = await axios.get(`${apiURL}/object/${params.id}?apikey=${apiKey}`).then(res => res.data);

    const artColors: HarvardColorInfo[] = artDetails.colors;

    return (
        <>
            <Flex gap="5" >
                <Flex direction="column" gap="4" width="50%">

                    {displayFields.map(displayField => (artDetails[displayField.name] &&
                        <>
                            <Heading size="2">{displayField.label || capitalizeFirstLetter(displayField.name)}</Heading>
                            <Text>{artDetails[displayField.name]}</Text>
                        </>
                    )
                    )}

                    <ColorPie colors={artColors} />

                </Flex>
                <Box width="50%">
                    {artDetails.primaryimageurl && <img src={artDetails.primaryimageurl} className='object-scale-down' />}
                </Box>
            </Flex>
        </>
    )
}

export default ArtDetailsPage