import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
  background: lightgray;
`;
const InfoContainer = styled.div`
  margin: 25px;
  cursor: pointer;

  :hover {
    background-color: #ddd;
    color: black;
  }
`;

export const Toolbar = () => {
  const router = useRouter();
  return (
    <Container>
      <InfoContainer onClick={() => router.push("/")}>HOME</InfoContainer>
      <InfoContainer onClick={() => router.push("/feed/1")}>FEED</InfoContainer>

      <InfoContainer onClick={() => router.push("/eom")}>EOM</InfoContainer>

      <InfoContainer
        onClick={() =>
          (window.location.href = "https://twitter.com/Abenezerasefa2")
        }
      >
        Twitter
      </InfoContainer>
    </Container>
  );
};
