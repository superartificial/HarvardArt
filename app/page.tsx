import { Button, Flex, Text } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Home() {

  const arts = useQuery({
    queryKey: ['arts'],
    queryFn: () => axios.get('').then(res => res.data)
  })

  return (
    <Flex direction="column" gap="2">
      <Text>Welcome to art.</Text>

    </Flex>
  );
}
