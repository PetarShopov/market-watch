import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
    display: flex;
    background-color: #5cc7b2;
    height: 60px;
    align-items: center;
    padding: 0px 50px;
    box-sizing: border-box;
    @media (max-width: 768px) {
      padding: 0px 20px;
  }
`

const StyledA = styled.a`
  margin-right: 20px;
`

const StyledLink = ({ href, name }) => (
  <Link href={href} passHref>
    <StyledA>{name}</StyledA>
  </Link>
)

export default function Header() {
  return (
    <Container>
      <StyledLink href="/" name="Home" />
      <StyledLink href="/news/technology" name="News" />
      <StyledLink href="/companiesSearch" name="Companies" />
    </Container>
  )
}