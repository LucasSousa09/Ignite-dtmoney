import styled from "styled-components"
import { darken, transparentize } from "polished"

export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        height: 4rem;

        padding: 0 1.5rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        width: 100%;
        height: 4rem;

        padding: 0 1.5rem;

        background: var(--green);
        color: #FFF;

        border: 0;
        border-radius: 0.25rem;

        margin-top: 1.5rem;

        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`

export const TransactionTypeContainer = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    margin-top: 1rem;
    margin-bottom: 1rem;
`

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'red' | 'green';
}

const colors = {
    green: '#33CC95',
    red: '#E52E40'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive
        ? transparentize(0.9, colors[props.activeColor])
        : 'transparent'};

    transition: border-color 0.2s;

    &:hover{
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    img{
        height: 20px;
        width: 20px;
        margin-right: 0.5rem;
    }

    span{
        display: inline-block;
    
        font-size: 1rem;
        color: var(--text-title);
    }
`