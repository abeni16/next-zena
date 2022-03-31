import styled from "styled-components";
import { Toolbar } from "../components/toolbar";

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 50px;
`;
const InfoContainer = styled.div`
  text-align: center;
`;
const Header = styled.h1``;
const Name = styled.h3``;
const Position = styled.h6``;
const Image = styled.img`
  width: 250px;
  border-radius: 100%;
  object-fit: cover;
`;
const Desc = styled.p``;
export const EOM = ({ employee }) => {
  console.log(employee);
  return (
    <>
      <Toolbar />
      <Container>
        <Header>Employee Of The Month</Header>
        <InfoContainer>
          <Name>{employee.name}</Name>
          <Position>{employee.position}</Position>
          <Image src={employee.image} />
          <Desc>{employee.description}</Desc>
        </InfoContainer>
      </Container>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiRespnonse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );
  const employee = await apiRespnonse.json();
  return {
    props: {
      employee: employee,
    },
  };
};

export default EOM;
