import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import style from './ProductMenu.module.css';
import styled from 'styled-components';
import productAPI from '../../apis/productAPI';

const ProductMenu = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState('');

  const getProducts = async () => {
    await productAPI
      .get('http://localhost:3002/products')
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((err) => {
        console.log('오류', err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      {productList &&
        productList.map((list, index) => (
          <Menu onClick={() => navigate('/detail')}>
            <ImageWrap>
              <img src={list.thumbnail} alt="" />
            </ImageWrap>
            <MenuNameWrap>
              <MenuName>{list.name}</MenuName>
            </MenuNameWrap>
            <Price>{list.price}원</Price>
            <AddBtn>담기</AddBtn>
          </Menu>
        ))}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 40px;
`;

const Menu = styled.div`
  background-color: white;
  border-radius: 24px;
  /* border: 1px; */
  width: 46%;
  height: 270px;
  margin: 2%;
  float: left;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.08));
`;

const ImageWrap = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: auto;
    width: 60%;
  }
`;

const MenuNameWrap = styled.div`
  display: table;
  width: 100%;
  height: 40px;
  margin: 15px auto 5px;
  padding: 0 3px;
  box-sizing: border-box;
`;

const MenuName = styled.div`
  border-top: 1px solid #f4f4f4;
  font-size: 15px;
  color: #444;
  display: table-cell;
  text-align: center;
  justify-content: center;
  word-break: keep-all;
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

export default ProductMenu;
