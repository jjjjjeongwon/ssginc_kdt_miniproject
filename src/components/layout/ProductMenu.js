import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import style from './ProductMenu.module.css';
import styled from 'styled-components';
import productAPI from '../../apis/productAPI';
import ProductCard from '../ui/main/ProductCard';

const ProductMenu = () => {
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
        productList.map((list) => (
          <ProductCard
            key={list.id}
            list={list}
            thumbnail={list.thumbnail}
            name={list.name}
            price={list.price}
          />
        ))}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 40px;
`;

export default ProductMenu;
