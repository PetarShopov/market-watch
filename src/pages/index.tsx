import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components';
import CustomChart from '../components/shared/CustomChart';

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

const StyledChartsContainer = styled.div`
    display: grid;
    gap: 2vw;
    margin-left: 2vw;
    grid-template-columns: repeat(auto-fit, minmax(47vw, 47vw));
    background-color: #e5f6f2;
    overflow-x: auto;
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    }
`

interface IProps {
  inflation: any;
  interestRates: any;
}

const IndexPage: NextPage = ({ inflation, interestRates }: IProps) => {

  return (
    <>
      <Head>
        <title>Market Watch</title>
        <meta name="description" content="Discovery latest information and news for companies on the market" />
      </Head>
      <StyledContainer>Market Watch</StyledContainer>
      <StyledDescription>Discovery latest information and news for companies on the market</StyledDescription>
      <StyledChartsContainer>
        <CustomChart
          data={inflation}
          id={'first-chart'}
          label={'US Consumer Prices'}
          title={'Inflation'}
        />
        <CustomChart
          data={interestRates}
          id={'second-chart'}
          label={'Federal Funds Rate'}
          title={'Interest Rate'}
        />
      </StyledChartsContainer>
    </>
  )
}

export default IndexPage

export async function getStaticProps() {
  let inflationData = await fetch(`https://www.alphavantage.co/query?function=INFLATION&apikey=demo`);
  let interestRatesData = await fetch('https://www.alphavantage.co/query?function=FEDERAL_FUNDS_RATE&interval=monthly&apikey=demo');
  let inflation = await inflationData.json();
  let interestRates = await interestRatesData.json();
  inflation = inflation.data.slice(0, 20).reverse();
  interestRates = interestRates.data.slice(0, 20).reverse();
  inflation = {
    labels: inflation.map((item: any) => {
      return item.date
    }),
    values: inflation.map((item: any) => {
      return item.value
    })
  }
  interestRates = {
    labels: interestRates.map((item: any) => {
      return item.date
    }),
    values: interestRates.map((item: any) => {
      return item.value
    })
  }
  return { props: { inflation, interestRates } }
}