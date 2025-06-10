import { Button, Container, TextField, Typography, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const fakeUser = { name: 'User' };
    dispatch(loginSuccess(fakeUser));
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
