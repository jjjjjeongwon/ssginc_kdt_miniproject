import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { SelectProductState } from '../../state/Atom';

const DetailPage = () => {
  const selectProduct = useRecoilValue(SelectProductState);
  console.log(selectProduct);
  return (
    <Container>
      <Menu>
        <ImageWrap>
          <img src={selectProduct.thumbnail} alt="" />
        </ImageWrap>
        <ContentWrap>
          <CompanyName>{selectProduct.brand} </CompanyName>
          <MenuName>{selectProduct.category}</MenuName>

          <ProductName>{selectProduct.name}</ProductName>
          <Score>{selectProduct.rating}</Score>

          <Price>{selectProduct.price}원</Price>
          <MenuName>{selectProduct.description}</MenuName>
          <AddBtn>장바구니 담기</AddBtn>
        </ContentWrap>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
`;

const ContentWrap = styled.div`
  padding: 0px 15px;
  /* height: 450px; */
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const CompanyName = styled.div`
  font-size: 16px;
  color: grey;
  /* margin-bottom: 5px; */
`;

const Menu = styled.div`
  background-color: white;
  height: 730px;
  padding-bottom: 20px;
  margin: auto 5px;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.08));
`;

const ImageWrap = styled.div`
  margin: 5px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-top: 5px;
    height: auto;
    width: 90%;
  }
`;

const ProductName = styled.div`
  font-size: 22px;
  margin-bottom: 5px;
`;

const Score = styled.div`
  color: gray;
  font-weight: bold;
  font-size: 21px;
  margin-bottom: 5px;
`;

const MenuName = styled.div`
  font-size: 16px;
  color: #444;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Price = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  font-size: 22px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 18px;
`;

const AddBtn = styled.div`
  font-size: 16px;
  width: 140px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid rgb(249, 187, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  margin: 150px auto auto;
`;

export default DetailPage;
