import { useState } from 'react';
import { Input, Button, Box, Center, useToast, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
    console.log("inside login")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://vast-pink-monkey-wear.cyclic.app/users/login', {
                email,
                password,
            });

            const token = response.data.token;
            // You can handle the token as needed upon successful login (store it in local storage, etc.)
            console.log('Login Successful! Token:', token);

            // Show success toast
            toast({
                title: 'Login Successful',
                description: 'You have successfully logged in!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            // Show error toast
            toast({
                title: 'Login Failed',
                description: 'Please check your credentials and try again.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (


        <Center h="100vh" bg={'url("https://zoomcar-assets.zoomcar.com/297389/HostCarImage/cover0c11ddf5-5adc-4ac5-9e8c-012e5d2ec6b7.jpg")'}>
            <Box p={8} maxW="md" borderWidth={1} borderRadius={8} boxShadow="lg">
                <Text fontWeight={"600"} fontSize={"25px"}>Welcome Back to BUYC Corp</Text>
                <br />
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
                <Button colorScheme="blue" onClick={handleLogin}>
                    Login
                </Button>

                <br />
                <br />
                <Text bg={"blue.100"}>Don't have an account? <span style={{ color: "blue" }}><Link to="/signup">Signup</Link></span></Text>

            </Box>
        </Center>

    );
};

export default Login;
