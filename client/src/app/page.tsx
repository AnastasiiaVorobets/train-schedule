"use client";
import { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
} from '@mui/material';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (email === 'kevych@gmail.com' && password === 'kevych') {
      window.location.href = '/trains';
    }
    else {
      setLoginError(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '8px', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5" style={{ color: 'black' }}>
          Login
        </Typography>
        <form style={{ width: '100%', marginTop: '8px' }} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ backgroundColor: 'white' }}
            InputProps={{ style: { color: 'black' } }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ backgroundColor: 'white' }}
            InputProps={{ style: { color: 'black' } }}
          />
          {loginError && (
            <Typography color="error" variant="caption" align="center">
              Incorrect username or password. Please try again.
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: '24px 0 16px', backgroundColor: 'black', color: 'white' }}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Home;
