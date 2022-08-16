import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    font-size: 26px;
    font-weight: bold;
    padding: 20px;
    justify-content: center;
`

const StyledDescription = styled.div`
    display: flex;
    font-size: 18px;
    width: 60%;
    justify-content: center;
    margin: auto;
`

interface IProps {
  news: any;
}

const IndexPage: NextPage = (props: IProps) => {

  return (
    <>
      <Head>
        <title>Market Watch</title>
        <meta name="description" content="Discovery latest information and news for companies on the market" />
      </Head>
      <StyledContainer>Market Watch</StyledContainer>
      <StyledDescription>Discovery latest information and news for companies on the market</StyledDescription>
    </>
  )
}

export default IndexPage