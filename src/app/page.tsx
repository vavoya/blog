'use client'


import {useSelector} from "react-redux";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import {selectThemeColors} from "@/redux/themeSlice";
import styled from "styled-components";
import TopBar from "@/components/TopBar";

import {ApolloClient, gql, InMemoryCache, useQuery} from "@apollo/client";

const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
});

export default function Home() {
  const theme = useSelector(selectThemeColors);

    const client = new ApolloClient({
        uri: 'http://localhost:3000/graphql', // Apollo Server의 URL을 입력하세요.
        cache: new InMemoryCache()
    });

    client
        .query({
            query: gql`
      query {
        test
      }
    `,
        })
        .then((result) => console.log(result))
        .catch((error) => console.log('Error:', error));

  return (
      <ParallaxProvider>
          <TopBar></TopBar>
          <Page backgroundColor={theme.backgroundColor1}>
              <PageTitleSection>
                      <PageTitleBox>
                          <PageTitleText1>
                              허동영
                          </PageTitleText1>
                          <PageTitleText2>
                              Email: vavoya6324@gmail.com
                          </PageTitleText2>
                      </PageTitleBox>
              </PageTitleSection>
              <PageMain>
                  <section>
                      <SectionHeader>
                          <SectionHeaderText color={theme.color2}>
                              최신 글
                          </SectionHeaderText>
                      </SectionHeader>
                      <SectionArticle backgroundColor={theme.backgroundColor2}  color={theme.color2}>
                          <ArticleImage />
                          <ArticleBody>
                              <ArticlePathText>
                                  FrontEnd/React
                              </ArticlePathText>
                              <ArticleHeader>
                                  <ArticleHeaderText>
                                      React 개념
                                  </ArticleHeaderText>
                              </ArticleHeader>
                              <ArticleDateText>
                                  2023. 08. 25
                              </ArticleDateText>
                              <ArticleTagSection>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          React
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                              </ArticleTagSection>
                          </ArticleBody>
                      </SectionArticle>
                      <SectionArticle backgroundColor={theme.backgroundColor2}  color={theme.color2}>
                          <ArticleBody>
                              <ArticlePathText>
                                  FrontEnd/React
                              </ArticlePathText>
                              <ArticleHeader>
                                  <ArticleHeaderText>
                                      React 개념
                                  </ArticleHeaderText>
                              </ArticleHeader>
                              <ArticleDateText>
                                  2023. 08. 25
                              </ArticleDateText>
                              <ArticleTagSection>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          React
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                              </ArticleTagSection>
                          </ArticleBody>
                      </SectionArticle>
                      <SectionArticle backgroundColor={theme.backgroundColor2}  color={theme.color2}>
                          <ArticleImage />
                          <ArticleBody>
                              <ArticlePathText>
                                  FrontEnd/React
                              </ArticlePathText>
                              <ArticleHeader>
                                  <ArticleHeaderText>
                                      React 개념
                                  </ArticleHeaderText>
                              </ArticleHeader>
                              <ArticleDateText>
                                  2023. 08. 25
                              </ArticleDateText>
                              <ArticleTagSection>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          React
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                                  <ArticleTagBox>
                                      <ArticleTagText>
                                          뭘봐
                                      </ArticleTagText>
                                  </ArticleTagBox>
                              </ArticleTagSection>
                          </ArticleBody>
                      </SectionArticle>
                  </section>
              </PageMain>
          </Page>
      </ParallaxProvider>

  )
}

type Props = {
    backgroundColor?: string;
    color?: string;
};

const Page = styled.div<Props>`
  width: 100%;
  min-height: 100vh;
  background: ${({backgroundColor}) => backgroundColor};
`

const PageTitleSection = styled.div`
  width: 100%;
  background: #B9B9B9;
  border-radius: 0 0 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 19px;
  width: 1160px;
  margin: 120px 30px 90px;
  flex-shrink: 1;
  @media (min-width: 992px) {
    margin: 160px 30px 120px;
  }
`

const PageTitleText1 = styled.p`
  color: #000;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  @media (min-width: 992px) {
    font-size: 64px;
  }
`

const PageTitleText2 = styled.p`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 992px) {
    font-size: 32px;
  }
`

const PageMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const SectionHeader = styled.header`
  margin: 55px 0;
  display: flex;
  justify-content: center;
`

const SectionHeaderText = styled.span<Props>`
  color: ${({color}) => color};
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 992px) {
    font-size: 48px;
  }
`

const SectionArticle = styled.article<Props>`
  box-sizing: border-box;
  max-width: 1000px;
  width: calc(100% - 60px);
  background: ${({backgroundColor}) => backgroundColor};
  color: ${({color}) => color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  margin: 0 30px 90px;
  transition: transform 0.3s ease; /* 부드러운 변환 효과 */
  
  &:hover {
    transform: scale(1.03); /* 크기를 1.2배로 확대 */
  }
`

const ArticleImage = styled.image`
  width: 100%;
  aspect-ratio: 3 / 1;
  background: #E1FFFF;
  border-radius: 30px 30px 0 0;
`

const ArticleBody = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3% 5% 3%;

  @media (min-width: 1060px) {
    padding: 30px 50px 30px;
  }
`

const ArticleHeader = styled.header`
  margin-bottom: 7px;
  display: flex;
  justify-content: left;
`

const ArticleHeaderText = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 992px) {
    font-size: 32px;
  }
`

const ArticlePathText = styled.span`
  width: 100%;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: right;
  
  @media (min-width: 992px) {
    font-size: 20px;
  }
`

const ArticleDateText = styled.span`
  width: 100%;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  @media (min-width: 992px) {
    font-size: 16px;
  }
`

const ArticleTagSection = styled.div`
  width: 100%;
  margin-top: 16px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ArticleTagBox = styled.div`
  padding: 0 20px;
  height: 30px;
  border-radius: 15px;
  background: #4F4F4F;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ArticleTagText = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 992px) {
    font-size: 16px;
  }
`

