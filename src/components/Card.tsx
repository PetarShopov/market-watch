import styled from 'styled-components';

interface IProps {
    key: number;
    title: string,
    url: string,
    summary: string,
    banner_image: string,
    time_published: string,
}

const StyledContainer = styled.div`
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    height: 440px;
    position: relative;
    background-color: white;
`

const StyledDate = styled.div`
    color: lightgrey;
    padding: 20px 20px 0px;
    font-size: 14px;
`

const StyledTitle = styled.div`
    display: flex;
    font-weight: bold;
    padding: 20px 20px 10px;
`

const StyledDescription = styled.div`
    display: flex;
    font-size: 14px;
    padding: 0px 20px 50px;
`

const StyledImage = styled.img`
    width: 100%;
    height: 150px;
    object-fit: fill;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

const StyledA = styled.a`
    color: #5cc7b2;
    font-size: 18px;
    position: absolute;
    bottom: 20px;
    left: 20px;
`

export default function Card({ key, title, url, summary, banner_image, time_published }: IProps) {
    const generateDate = (date: string) => {
        const convertedDate = `
        ${time_published.slice(6,8)}/${time_published.slice(4,6)}/${time_published.slice(0,4)} 
        ${time_published.slice(9,11)}:${time_published.slice(11,13)} 
        `
        return convertedDate;
    }

    return (
        <StyledContainer key={key}>
            <StyledImage
                src={banner_image}
                alt="Banner image"
            />
            <StyledDate>{generateDate(time_published)}</StyledDate>
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{summary}</StyledDescription>
            <StyledA href={url} target="_blank">
                Find out more
            </StyledA>
        </StyledContainer>
    )
}
