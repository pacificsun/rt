import { Button, Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Container>
      <Typography variant="h3">Welcome Home</Typography>
      <Button onClick={handleLogout} variant="outlined" color="secondary">
        Logout
      </Button>
    </Container>
  );
};

export default Home;
