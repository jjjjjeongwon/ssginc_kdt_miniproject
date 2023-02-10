import Main from './components/pages/Main';
import './App.css';
import Header from './components/layout/Header';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './components/pages/DetailPage';
import Cart from './components/pages/Cart';
import styled from 'styled-components';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import CartButton from './components/layout/CartButton';

function App() {
  return (
    <Container>
      <Header />
      <CartButton />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f4f4;
`;

export default App;
