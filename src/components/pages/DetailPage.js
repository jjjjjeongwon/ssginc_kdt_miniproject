import React from 'react';
import styled from 'styled-components';

const DetailPage = () => {
  return (
    <Container>
      <Menu>
        <ImageWrap>
          <img
            src="https://sitem.ssgcdn.com/59/56/18/item/1000530185659_i1_1100.jpg"
            alt=""
          />
        </ImageWrap>

        <MenuName>킷캣</MenuName>
        <MenuName>초콜릿</MenuName>
        <MenuName>4.9</MenuName>
        <MenuName>
          킷캣 오리지널 18입, 네슬레코리아 (제조국 : 아랍에미리트)
        </MenuName>

        <MenuName>네슬레코리아 (제조국 : 아랍에미리트)</MenuName>
        <Price>2000원</Price>
        <AddBtn>담기</AddBtn>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
`;

const Menu = styled.div`
  background-color: white;
  /* border-radius: 24px; */
  /* height: 100vh; */
  padding-bottom: 20px;
  /* border: 1px; */
  /* width: 98%; */
  margin: auto 5px;
  /* height: 270px; */
  /* float: left; */
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.08));
`;

const ImageWrap = styled.div`
  margin: 5px auto;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: auto;
    width: 80%;
  }
`;

const MenuNameWrap = styled.div`
  display: table;
  width: 100%;
  height: 40px;
  margin: 15px auto 5px;
  box-sizing: border-box;
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

const AddBtn = styled.div`
  font-size: 14px;
  width: 90px;
  height: 25px;
  border-radius: 10px;
  background-color: rgb(249, 187, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px auto auto;
`;

export default DetailPage;
