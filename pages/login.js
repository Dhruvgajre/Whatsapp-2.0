import Head from "next/Head";
import styled from "syled-components";

function login() {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo />
      </LoginContainer>
    </Container>
  );
}

export default login;

const Container = styled.div``;

const LoginContainer = styled.div``;
const Logo = styled.img``;
