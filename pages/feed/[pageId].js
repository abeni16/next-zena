import styled from "styled-components";
import { Toolbar } from "../../components/toolbar";
import { useRouter } from "next/router";
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;
const InfoContainer = styled.div`
  width: 500px;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid black;
`;
const Header = styled.h1`
  font-size: 16px;
  cursor: pointer;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
const Paggin = styled.div`
  margin: 25px;
  cursor: pointer;
`;
const PagginPerv = styled.div`
  margin: 25px;
  cursor: pointer;
`;
const ContainerPaggin = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Desc = styled.p``;

export const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();
  return (
    <>
      <Toolbar />
      <Container>
        {articles.map((article, index) => (
          <InfoContainer key={index}>
            <Header
              onClick={() => {
                window.location.href = article.url;
              }}
            >
              {article.title}
            </Header>
            <Desc>{article.discription}</Desc>
            {!!article.urlToImage && <Image src={article.urlToImage} />}
          </InfoContainer>
        ))}
      </Container>
      <ContainerPaggin>
        <PagginPerv
          onClick={() => {
            if (pageNumber > 1) {
              router.push(`/feed/${pageNumber - 1}`);
            }
          }}
          props={pageNumber}
        >
          pervious
        </PagginPerv>
        <Paggin>#{pageNumber}</Paggin>
        <Paggin
          onClick={() => {
            if (pageNumber < 5) {
              router.push(`/feed/${pageNumber + 1}`);
            }
          }}
          props={pageNumber}
        >
          next page
        </Paggin>
      </ContainerPaggin>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.pageId;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Beare ${process.env.PUBLIC_KEY}`,
      },
    }
  );
  const apiJson = await apiResponse.json();
  const { articles } = apiJson;
  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
