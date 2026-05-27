import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { loginUser } from '../api';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const res = await loginUser({ email, password });
            localStorage.setItem('user', JSON.stringify(res.data));
            onLogin(res.data);
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f0f2f5">
            <Paper elevation={3} sx={{ padding: 4, width: 400 }}>
                <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3} color="primary">
                    🏥 Hospital Management System
                </Typography>
                <TextField
                    fullWidth label="Email" margin="normal"
                    value={email} onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    fullWidth label="Password" type="password" margin="normal"
                    value={password} onChange={e => setPassword(e.target.value)}
                />
                {error && <Typography color="error" mt={1}>{error}</Typography>}
                <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>
                    Login
                </Button>
            </Paper>
        </Box>
    );
}

export default Login;