import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import userAPI from '../../apis/userAPI';

const Signup = () => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordCheckRef = useRef();

  const handleSignupData = () => {
    const SignupData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (passwordRef.current.value !== passwordCheckRef.current.value) {
      return window.alert('비밀번호가 일치하지 않습니다!');
    }

    console.log(SignupData);
    submitSignupData(SignupData);
  };

  const submitSignupData = async (SignupData) => {
    await userAPI
      .post('http://localhost:3002/users', SignupData)
      .then((res) => {
        console.log(res.data);
        window.alert('회원가입 성공!');
        navigate('/login');
      })
      .catch((err) => {
        console.log('오류', err);
      });
  };

  return (
    <Wrap>
      <Title>회원가입</Title>

      <LoginWrap>
        <InputBox>
          <Text>이름</Text>
          <Id type="text" ref={nameRef} />
        </InputBox>
        <InputBox>
          <Text>이메일</Text>
          <Id type="text" ref={emailRef} />
        </InputBox>
        <InputBox>
          <Text>비밀번호</Text>
          <Id type="password" ref={passwordRef} />
        </InputBox>
        <InputBox>
          <Text>비밀번호 확인</Text>
          <Id type="password" ref={passwordCheckRef} /> <br />
          <br />
        </InputBox>

        <ButtonContainer>
          <Button
            onClick={
              handleSignupData
              // window.alert(
              //   '회원가입에 성공하였습니다!\n로그인 페이지로 이동합니다'
              // );
              // navigate('/login');
            }
          >
            회원가입하기
          </Button>
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
  margin-bottom: 10px;
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

export default Signup;
