import React from 'react';
import styled from 'styled-components';

const Cart = () => {
  return (
    <Container>
      <Menu>
        <ImageWrap>
          <img
            src="https://sitem.ssgcdn.com/59/56/18/item/1000530185659_i1_1100.jpg"
            alt=""
          />
        </ImageWrap>
        <Wrap>
          <MenuName>킷캣</MenuName>
          <Price>2000원</Price>
        </Wrap>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
`;

const Menu = styled.div`
  display: flex;
  background-color: white;
  padding-bottom: 20px;
  margin: auto 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const ImageWrap = styled.div`
  margin: 5px auto;

  /* display: flex; */
  align-items: center;
  justify-content: center;
  img {
    height: auto;
    width: 100px;
  }
`;

const Wrap = styled.div`
  width: 1400px;
`;

const MenuName = styled.div`
  font-size: 15px;
  color: #444;
  /* display: table-cell; */
  text-align: center;
  justify-content: center;
  /* word-break: keep-all; */
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
`;

export default Cart;
