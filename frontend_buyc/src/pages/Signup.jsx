import { useState } from 'react';
import { Input, Button, Text, Box, Center, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toast = useToast();
    const navigate = useNavigate();


    const handleSignup = async () => {
        try {
            await axios.post('https://vast-pink-monkey-wear.cyclic.app/users/register', {
                username,
                email,
                password,
            });

            navigate('/login');


            // Show success toast
            toast({
                title: 'Registration Successful',
                description: 'You have successfully registered!',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        } catch (error) {
            // Show error toast
            toast({
                title: 'Registration Failed',
                description: "Kindly try again with a different Email",
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return (
        <Center h="100vh" bg={'url("https://zoomcar-assets.zoomcar.com/26034/HostCarImage/host_car_image_26034f1b61d84-0f24-4f98-83d8-d6f7e980116c.jpg20230628-53-1ayksqz")'}>

            <Box p={8} maxW="md" borderWidth={1} borderRadius={8} boxShadow="lg" bgColor={"white"}>
                <Text fontWeight={"600"} fontSize={"25px"}> Sign up to enjoy BUYC Corp</Text>
                <br />
                <Input
                    placeholder="Username"
                    mb={3}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    placeholder="Email"
                    mb={3}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    mb={3}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button colorScheme="blue" onClick={handleSignup}>
                    Sign Up
                </Button>

                <br />
                <br />
                <Text>Already have an account? <span style={{ color: "blue" }}><Link to="/login">Login</Link></span></Text>
            </Box>

        </Center>
    );
};

export default Signup;
