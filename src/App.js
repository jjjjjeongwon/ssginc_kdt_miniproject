import Main from './components/pages/Main';
import './App.css';
import Header from './components/layout/Header';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './components/pages/DetailPage';
import Cart from './components/pages/Cart';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
