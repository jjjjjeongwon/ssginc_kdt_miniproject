import React from 'react';
import styled from 'styled-components';
import { BsCartPlusFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const CartButton = () => {
  const navigate = useNavigate();
  return (
    <Wrap onClick={() => navigate('/cart')}>
      <BsCartPlusFill size={24} color="white" />
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: grey;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
`;

export default CartButton;
