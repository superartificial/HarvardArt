// ArtListPage.tsx
import { Flex } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import axios from 'axios';
import ListTable from './ListTable';
import Pagination from '../components/Pagination';

// interface ArtQuery {
//     title: string,
//     // orderBy: keyof Issue,
//     // page: string
// }

interface Props {
    searchParams: { title: string, page: string },
}

const ArtListPage = async ({ searchParams }: Props) => {
    // const { search } = router.;

    const searchText = searchParams.title;
    const page = parseInt(searchParams.page) || 1;
    const pageSize = 10;
    const apiURL = process.env.HARVARD_API_URL;
    const apiKey = process.env.HARVARD_API_KEY;

    let requestURL = `${apiURL}/object?apikey=${apiKey}&page=${page}&size=${pageSize}`;

    if (searchText) {
        requestURL += `&title="${encodeURIComponent(searchText)}"`;
    }

    try {
        const artData: any = await axios.get(requestURL).then(res => res.data);
        const artRecords = artData.records;

        if (!artRecords) return <p>No records found</p>

        console.log('totalrecords: ' + artData.info.totalrecords);


        return (
            <Flex direction="column" gap="2">
                {artData.info.totalrecords && <Pagination itemCount={artData.info.totalrecords} pageSize={pageSize} currentPage={page} />}
                <ListTable artRecords={artRecords} />
                {artData.info.totalrecords && <Pagination itemCount={artData.info.totalrecords} pageSize={pageSize} currentPage={page} />}
            </Flex>
        );
    } catch (error) {
        console.error('Error fetching art data:', error);
        // Handle the error gracefully, display an error message, or take appropriate action
        return null;
    }
};

export default ArtListPage;