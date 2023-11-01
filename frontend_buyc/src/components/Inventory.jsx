import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, SimpleGrid, Image, Text, Center, ChakraProvider } from '@chakra-ui/react';

const Inventory = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://vast-pink-monkey-wear.cyclic.app/car/inventory');
                console.log(response)
                setData(response.data); // Assuming the response is an array of objects
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Center>

            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="40px">
                {data?.map((item) => (
                    <Box key={item._id} borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
                        <Image src={item.pictures} alt={item.title} />
                        <Text mt="2" fontWeight="bold">
                            {item.title}
                        </Text>
                        <Text> KMs Driven : {item.kms}</Text>
                        <Text>Scratches: {item.majorScratches}</Text>
                        <Text>Original Paint: {item.orginalPaint}</Text>
                        <Text>Accidents: {item.accidents}</Text>
                        <Text>Previous Buyers: {item.prevBuyers}</Text>
                        <Text>Registration Place: {item.registrationPlace}</Text>
                        <Text>Price: Rs.{item.price}</Text>
                    </Box>
                ))}
            </SimpleGrid>

        </Center>
    );
};

export default Inventory;
