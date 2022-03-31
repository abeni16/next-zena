import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { Toolbar } from "../components/toolbar";

const Container = styled.div`
  flex: 1;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const InfoContainer = styled.div``;
const Header = styled.h1`
  margin-top: -50px;
`;
const Titel = styled.h3``;
const Position = styled.h6``;

const Desc = styled.p``;
export default function Home() {
  return (
    <>
      <Toolbar />
      <Container>
        <InfoContainer>
          <Header>Next.js News App</Header>
          <Titel>Your stop shop for the latest nes articles</Titel>
        </InfoContainer>
      </Container>
    </>
  );
}
