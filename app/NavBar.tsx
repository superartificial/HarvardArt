import Link from 'next/link'
import { Avatar, Box, Container, DropdownMenu, Flex, Text } from '@radix-ui/themes';

import { GiAbstract007 } from "react-icons/gi";

const NavBar = () => {
    return (
        <nav className='border-b mb-5 px-5 py-3'>
            <Container>
                <Flex justify="between">
                    <Flex align="center" gap="3">
                        <Link href="/" ><GiAbstract007 size={"2rem"} /></Link>
                    </Flex>

                    <Flex align="center" gap="3">
                        <Link href="/art/" >List Art</Link>
                        <Link href="/user" >User Profile</Link>
                    </Flex>
                </Flex>
            </Container>
        </nav>
    )
}

export default NavBar