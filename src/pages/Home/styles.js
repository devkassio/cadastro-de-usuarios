import styled from "styled-components";

export const Container = styled.div`
    background-color: #181f36;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;


`



export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
`
export const Title = styled.h2`
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    font-style: italic;
    font-weight: 500;
`

export const ContainerInputs = styled.div`
    display: flex;
    gap: 20px;
`

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid #d2dae2;
    background-color: #ffffff;
    padding: 12px 24px;
    outline: none;
    width: 100%;
`

export const InputLabel = styled.label`
    color: #ffffff;
    font-size: 10px;
    font-weight: 500;

    span {
        color: #ef4f45;
    }
`