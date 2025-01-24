import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #1B4F72;
  color: white;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  margin-right: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  font-family: 'PingFang TC', sans-serif;
  margin: 0;
`;

const Description = styled.div`
  margin-left: auto;
  font-size: 14px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Title>台北醫學大學圖書館無人櫃台</Title>
      <Description>無人櫃台</Description>
    </HeaderContainer>
  );
}

export default Header; 