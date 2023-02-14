import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import userAPI from '../../apis/userAPI';

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLoginData = () => {
    const LoginData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(LoginData);
  };

  const handleLogin = async () => {
    await userAPI
      .get('http://localhost:3002/users')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log('오류', err);
      });
  };
  return (
    <Wrap>
      <Title>로그인</Title>

      <LoginWrap>
        <InputBox>
          <Text>아이디(이메일)</Text>
          <Id type="text" ref={emailRef} />
        </InputBox>
        <InputBox>
          <Text>비밀번호</Text>
          <Id type="password" ref={passwordRef} /> <br />
          <br />
        </InputBox>
        <ButtonContainer>
          <Button onClick={handleLogin}>로그인하기</Button>
          <SignupButton onClick={() => navigate('/signup')}>
            아직 회원이 아니신가요?
          </SignupButton>
        </ButtonContainer>
      </LoginWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f4f4f2;
  margin-top: 50px;
  margin-bottom: 20px;
  border-radius: 3px;
  overflow: hidden;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 18px;
  font-size: 25px;
  font-weight: bold;
  color: #222;
  margin: 25px 5px 10px 0;
`;

const LoginWrap = styled.div`
  margin: 20px auto auto;
  width: 70%;
`;

const InputBox = styled.div`
  width: 98%;
`;

const Text = styled.div`
  font-size: 13px;
  font-weight: bold;
`;

const Id = styled.input`
  width: 97%;
  height: 25px;
  margin-bottom: 15px;
  padding: 5px 5px;
  border-radius: 3px;
  border-bottom: 2px solid rgb(219, 232, 216);
  border: 1px solid lightslategray;
  font-size: 12px;
  font-weight: 500;
  background-color: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  height: 35px;
  margin-bottom: 10px;
  font-size: 15px;
  border: none;
  cursor: pointer;
  background-color: rgb(249, 187, 0);
  color: white;
  font-weight: bolder;
  border-radius: 3px;
`;

const SignupButton = styled.div`
  font-size: 13px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export default Login;
