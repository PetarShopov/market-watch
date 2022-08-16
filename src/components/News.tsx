import styled from "styled-components"
import Card from "./Card"

interface IProps {
    news: any[],
}

const StyledContainer = styled.div`
    padding: 1rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    background-color: #e5f6f2;
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
`

export default function News(props: IProps) {
    return (
        <StyledContainer>
            {props.news.map((item: any, index) => {
                return (
                    <Card
                        key={index}
                        title={item.title}
                        url={item.url}
                        summary={item.summary}
                        banner_image={item.banner_image}
                        time_published={item.time_published}
                    />
                )
            })}
        </StyledContainer>
    )
}
