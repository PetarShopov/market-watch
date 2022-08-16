import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import styled from 'styled-components';
import News from '../../components/News';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    min-width: 140px;
    background-color: #2a3542;
    @media (max-width: 768px) {
        flex-direction: row;
        overflow-x: auto;
        width: 100%;
        height: 40px;
        align-items: center;
    }
`

interface IStyledAProps {
    isSelected: boolean;
}

const StyledA = styled.a<IStyledAProps>`
    color: ${props => props.isSelected ? '#5cc7b2' : '#aeb2b7'};
    margin: 20px 0px 0px 20px;
    @media (max-width: 768px) {
        min-width: fit-content;
        margin: 0px 0px 0px 20px;
    }
`

const StyledLink = ({ href, name, isSelected }) => (
    <Link href={href} passHref>
        <StyledA isSelected={isSelected}>{name}</StyledA>
    </Link>
)

interface IProps {
    news: any;
    tab: string;
}

const NewsPage: NextPage = ({ news, tab }: IProps) => {

    return (
        <>
            <Head>
                <title>Market Watch</title>
            </Head>
            <StyledContainer>
                <StyledSidebar>
                    <StyledLink href="/news/technology" name="Technology" isSelected={tab === 'technology'} />
                    <StyledLink href="/news/blockchain" name="Blockchain" isSelected={tab === 'blockchain'} />
                    <StyledLink href="/news/earnings" name="Earnings" isSelected={tab === 'earnings'} />
                    <StyledLink href="/news/ipo" name="IPO" isSelected={tab === 'ipo'} />
                    <StyledLink href="/news/mergers_and_acquisitions" name="Mergers & Acquisitions" isSelected={tab === 'mergers_and_acquisitions'} />
                    <StyledLink href="/news/financial_markets" name="Financial Markets" isSelected={tab === 'financial_markets'} />
                    <StyledLink href="/news/economy_fiscal" name="Economy - Fiscal Policy" isSelected={tab === 'economy_fiscal'} />
                    <StyledLink href="/news/economy_monetary" name="Economy - Monetary Policy" isSelected={tab === 'economy_monetary'} />
                    <StyledLink href="/news/economy_macro" name="Economy - Macro/Overall" isSelected={tab === 'economy_macro'} />
                    <StyledLink href="/news/energy_transportation" name="Energy & Transportation" isSelected={tab === 'energy_transportation'} />
                    <StyledLink href="/news/finance" name="Finance" isSelected={tab === 'finance'} />
                    <StyledLink href="/news/life_sciences" name="Life Sciences" isSelected={tab === 'life_sciences'} />
                    <StyledLink href="/news/manufacturing" name="Manufacturing" isSelected={tab === 'manufacturing'} />
                    <StyledLink href="/news/real_estate" name="Real Estate & Construction" isSelected={tab === 'real_estate'} />
                    <StyledLink href="/news/retail_wholesale" name="Retail & Wholesale" isSelected={tab === 'retail_wholesale'} />
                </StyledSidebar>
                <News news={news || []} />
            </StyledContainer>
        </>
    )
}

export default NewsPage

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=${params.id}&apikey=${process.env.API_KEY}`);
    const data = await res.json();

    return { props: { news: data.feed, tab: params.id } }
}
