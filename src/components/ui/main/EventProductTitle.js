import React from 'react';
import styled from 'styled-components';

const EventProductTitle = () => {
  return (
    <ProductList>
      <ProductTitle>행사상품</ProductTitle>

      <ExplainText>이마트 24가 준비한 이달의 행사상품을 만나보세요</ExplainText>
    </ProductList>
  );
};

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f4f4f2;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 3px;
  overflow: hidden;
`;

const ProductTitle = styled.div`
  display: block;
  float: left;
  line-height: 18px;
  font-size: 20px;
  font-weight: bold;
  color: #222;
  margin: 10px 5px 10px 0;
`;

const ExplainText = styled.div`
  color: #999999;
  font-size: 16px;
  margin-top: 15px;
`;

export default EventProductTitle;
