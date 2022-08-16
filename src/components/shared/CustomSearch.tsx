import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

interface IProps {
    onChange: Function;
    valueProperty?: string;
    placeholder?: string;
    autosearch?: boolean;
}

export default function CustomSearch({ onChange, valueProperty, placeholder, autosearch }: IProps) {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (valueProperty?.length) {
            setValue(valueProperty);
        }
    }, [valueProperty]);

    const handleValueChange = (e: any) => {
        setValue(e.target.value);
        autosearch && onChange && onChange(e.target.value);
    }

    const handleKeyDown = (e: any) => {
        if (e.keyCode === 13) {
            onChange && onChange(e.target.value);
        }
    }

    const handleClear = (e: any) => {
        setValue('');
        onChange && onChange('');
    }

    return (
        <StyledContainer>
            <input
                type="text"
                onChange={handleValueChange}
                onKeyDown={handleKeyDown}
                value={value}
                placeholder={placeholder || 'Search'}
                autoComplete="off"
            />
        </StyledContainer>
    )
}