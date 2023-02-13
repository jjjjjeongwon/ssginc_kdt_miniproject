import React from 'react';
import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <IconImage onClick={() => navigate(-1)}>
        <BiArrowBack size={25} color="#f9bb00" />
      </IconImage>
      <HeaderLogoWrap>
        <LogoImage onClick={() => navigate('/')}>
          <img src={'/images/logo.png'} alt="" />
        </LogoImage>
      </HeaderLogoWrap>

      <IconImage onClick={() => navigate('/login')}>
        <FaUserAlt size={22} color="#f9bb00" />
      </IconImage>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  background-color: white;
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
  max-height: 20px;
  width: 98px;
  height: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const IconImage = styled.div`
  margin-top: 38px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default Header;
