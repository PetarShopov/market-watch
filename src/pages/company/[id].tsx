import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    max-width: 80%;
    margin: auto;
    width: 800px;
`

const StyledHeader = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
`

const StyledSubHeader = styled.div`
    display: flex;
    font-size: 18px;
    margin-bottom: 20px;
`

interface IProps {
    company: any;
}

const NewsPage: NextPage = ({ company }: IProps) => {

    return (
        <>
            <Head>
                <title>Company overview</title>
            </Head>
            <StyledContainer>
                <StyledHeader>{company.Name}</StyledHeader>
                <StyledSubHeader>{company.Symbol}</StyledSubHeader>
                <div>{company.Description}</div>
            </StyledContainer>
        </>
    )
}

export default NewsPage

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${params.id}&apikey=${process.env.API_KEY}`);
    const data = await res.json();

    return { props: { company: data } }
}
