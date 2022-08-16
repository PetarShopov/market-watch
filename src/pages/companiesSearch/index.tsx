import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import CustomSearch from '../../components/shared/CustomSearch'
import { debounce } from 'lodash';
import styled from 'styled-components';
import Link from 'next/link';

const StyledContainer = styled.div`
    padding: 1rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    background-color: #e5f6f2;
`

const StyledA = styled.a`
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    padding: 20px;
    position: relative;
    background-color: white;
`

const StyledLink = ({ href, children }) => (
  <Link href={href} passHref>
    <StyledA>{children}</StyledA>
  </Link>
)

const StyledCard = styled.div`
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    padding: 20px;
    position: relative;
    background-color: white;
`

const StyledCardRow = styled.div`
    min-height: 21px;
`

const DEBOUNCE_TIME = 1000;

const CompaniesSearch: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (value: string) => {
    setSearchTerm(value);
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${process.env.API_KEY}`)
      .then((response) => response.json())
      .then((data: any) => {
        setResults(data?.bestMatches || []);
      }).catch((error) => {
        console.log(error);
      })
  }

  const debouncedHandleChange = debounce(handleChange, DEBOUNCE_TIME);

  return (
    <div>
      <Head>
        <title>Search for companies</title>
      </Head>
      <CustomSearch
        onChange={debouncedHandleChange}
      />
      <StyledContainer>
        {
          results.map((result: any, index) => {
            return (
              <StyledLink key={result['1. symbol']} href={`/company/${result['1. symbol']}`}>
                <StyledCardRow><b>Symbol:</b> {result['1. symbol']}</StyledCardRow>
                <StyledCardRow><b>Name:</b> {result['2. name']}</StyledCardRow>
                <StyledCardRow><b>Type:</b> {result['3. type']}</StyledCardRow>
                <StyledCardRow><b>Region:</b> {result['4. region']}</StyledCardRow>
                <StyledCardRow><b>Market Open:</b> {result['5. marketOpen']}</StyledCardRow>
                <StyledCardRow><b>Market Close:</b> {result['6. marketClose']}</StyledCardRow>
                <StyledCardRow><b>Timezone:</b> {result['7. timezone']}</StyledCardRow>
                <StyledCardRow><b>Currency:</b> {result['8. currency']}</StyledCardRow>
              </StyledLink>
            )
          })
        }
      </StyledContainer>
    </div>
  )
}

export default CompaniesSearch
