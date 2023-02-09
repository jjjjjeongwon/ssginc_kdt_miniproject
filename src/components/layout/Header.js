import React from 'react';
import styled from 'styled-components';
import { BsCartPlusFill } from 'react-icons/bs';

const Header = () => {
  return (
    <Wrap>
      <HeaderLogoWrap>
        <LogoImage href="/">
          <img src={'/images/logo.png'} alt="" />
        </LogoImage>
      </HeaderLogoWrap>
      <CartImage>
        <BsCartPlusFill size={24} color="#f9bb00" />
      </CartImage>
    </Wrap>
  );
};

const Wrap = styled.div`
  /* max-width: 704px;
  margin: 0 auto 0;
  width: 100%; */
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  border-bottom: 1px solid #f4f4f4;
  display: flex;
`;

const HeaderLogoWrap = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 14px 19px 14px;
  box-sizing: border-box;
`;

const LogoImage = styled.div`
  max-width: 98px;
  max-height: 18px;
  width: 98px;
  height: 18px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const CartImage = styled.div`
  margin-top: 38px;
  width: 24px;
  height: 24px;
`;

export default Header;
