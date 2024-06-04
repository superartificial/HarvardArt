'use client';

// Navbar.tsx
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Badge, Box, Container, Flex, TextField } from '@radix-ui/themes';
import { GiAbstract007 } from "react-icons/gi";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useState, useEffect, useRef } from 'react';

const NavBar = () => {
    const router = useRouter();
    const [searchText, setSearchText] = useState('');
    const [showBadge, setShowBadge] = useState(false);
    const badgeRef = useRef<HTMLDivElement>(null);

    const handleSearch = (e?: React.FormEvent) => {
        if (e) {
            e.preventDefault();
        }
        if (searchText.trim().length >= 3) {
            router.push(`/art?title=${encodeURIComponent(searchText)}`);
        } else {
            setShowBadge(true);
        }
    };

    useEffect(() => {
        if (showBadge) {
            const badge = badgeRef.current;
            badge?.classList.remove('fade-out');

            const timeout = setTimeout(() => {
                badge?.classList.add('fade-out');
                setTimeout(() => {
                    setShowBadge(false);
                }, 500);
            }, 2500);

            return () => clearTimeout(timeout);
        }
    }, [showBadge]);

    return (
        <nav className='border-b mb-5 px-5 py-3'>
            <Container>
                <Flex justify="between">
                    <Flex align="center" gap="3">
                        <Link href="/"><GiAbstract007 size={"2rem"} /></Link>
                    </Flex>

                    <Flex align="center" gap="3">
                        <form onSubmit={handleSearch}>
                            <Flex align="center" gap="2" position="relative">
                                <Box width="250px">
                                    <TextField.Root
                                        type="text"
                                        placeholder="Search (three or more characters.)"
                                        value={searchText}
                                        onChange={(e: any) => setSearchText(e.target.value)}
                                        className='w-full'
                                    >
                                        <TextField.Slot onClick={() => handleSearch()}>
                                            <MagnifyingGlassIcon height="16" width="16" className='cursor-pointer' />
                                        </TextField.Slot>
                                    </TextField.Root>
                                </Box>
                                {showBadge && (
                                    <Badge ref={badgeRef} className="badge" color="crimson" variant="soft">
                                        Please enter at least 3 characters
                                    </Badge>
                                )}
                            </Flex>
                        </form>
                        <Link href="/art">List Art</Link>
                        <Link href="/user">User Profile</Link>
                    </Flex>
                </Flex>
            </Container>
        </nav>
    );
};

export default NavBar;