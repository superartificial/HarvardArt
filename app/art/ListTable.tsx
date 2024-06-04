'use client'

import { Flex, Table, Text } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { useRouter } from 'next/navigation';

const ListTable = ({ artRecords }: { artRecords: any }) => {
    const router = useRouter();
    return (

        <Table.Root>
            <Table.Body>
                {artRecords.map((record: any) => (
                    <Table.Row key={record.objectnumber} onClick={() => router.push(`/art/${record.objectid}`)} className='hover:bg-slate-100 cursor-pointer'>
                        <Table.Cell width="50%"><Text size="3" weight="medium">{record.title}</Text></Table.Cell>
                        <Table.Cell>{record.technique}</Table.Cell>
                        <Table.Cell>{record.dated}</Table.Cell>
                        <Table.Cell>
                            <div className='w-32 h-32 bg-slate-300'>
                                {record.primaryimageurl && <img src={record.primaryimageurl + '?height=200&width=200'} className='w-32 h-32 object-cover' />}
                            </div>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}

export default ListTable