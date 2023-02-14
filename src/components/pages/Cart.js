import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

const Cart = () => {
  const [cartArr, setCartArr] = useState();

  useEffect(() => {
    setCartArr(JSON.parse(sessionStorage.getItem('cart')));
  }, []);

  // const removeItem = (id) => {
  //   sessionStorage.getItem('cart')
  // };

  let total = 0;

  cartArr &&
    cartArr.map((cart) => {
      total += cart.price;
    });

  return (
    <Container>
      {cartArr &&
        cartArr.map((cart, idx) => (
          <CardWrap>
            <Menu>
              <ImageWrap>
                <img src={cart.image} alt="" />
              </ImageWrap>
              <Wrap>
                <Delete>X</Delete>
                <CompanyName>{cart.brand}</CompanyName>
                <ProductName>{cart.name}</ProductName>
                <CountWrap></CountWrap>
              </Wrap>
            </Menu>
            <PriceWrap>
              <PriceTitle>상품금액</PriceTitle>
              <Price>{cart.price}원</Price>
            </PriceWrap>
          </CardWrap>
        ))}

      <PaymentWrap>
        <PriceTitle>결제 예상 금액</PriceTitle>
        <FinalPrice>{total}원</FinalPrice>
      </PaymentWrap>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
`;

const CardWrap = styled.div`
  height: 180px;
  background-color: white;
  padding-bottom: 30px 5px 20px;
  margin: 5px 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const Menu = styled.div`
  display: flex;
`;

const CountWrap = styled.div`
  background-color: aliceblue;
  width: 80px;
  height: 24px;
  margin-left: 190px;
`;

const PriceWrap = styled.div`
  height: 40px;
  margin: 5px 10px;
  background-color: #f4f4f4;
  display: flex;
  justify-content: space-between;
  padding: 9px 10px;
  box-sizing: border-box;
`;

const PriceTitle = styled.div`
  color: gray;
  width: 120px;
  height: 25px;
`;

const Price = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

const ImageWrap = styled.div`
  margin: 5px auto;
  align-items: center;
  justify-content: center;
  img {
    height: auto;
    width: 100px;
  }
`;

const Wrap = styled.div`
  /* padding: px; */
  width: 1400px;
`;

const Delete = styled.div`
  margin-top: 15px;
  margin-left: 260px;
  width: 15px;
  height: 15px;
`;

const CompanyName = styled.div`
  font-size: 13px;
  color: gray;
  /* margin-top: 17px; */
  margin-bottom: 3px;
  justify-content: center;
`;

const ProductName = styled.div`
  display: flex;
  margin-bottom: 18px;
`;

const PaymentWrap = styled.div`
  background-color: #f4f4f4;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const FinalPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export default Cart;
