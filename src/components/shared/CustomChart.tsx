import Chart from 'chart.js/auto';
import { useEffect } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    height: 400px;
`

interface IProps {
    data: any;
    id: string;
    label: string;
    title: string;
}

export default function CustomChart({ data, id, label, title }: IProps) {

    useEffect(() => {
        //@ts-ignore
        const ctx = document.getElementById(id).getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label,
                        data: data.values,
                        borderColor: '#5cc7b2',
                        backgroundColor: '#e5f6f2',
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: title
                    }
                }
            },
        });
    }, []);

    return (
        <StyledContainer>
            <canvas id={id}></canvas>
        </StyledContainer>
    )
}