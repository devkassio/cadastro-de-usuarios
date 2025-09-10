import styled from "styled-components";

export const Button = styled.button`
    border: ${props =>
    (props.theme === "primary"
        ? "none"
        : "1px solid #f2f2f2")};
    border-radius: 20px;
    padding: 12px 24px;
    background: ${props =>
        props.theme === "primary"
            ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
            : "transparent"};
    font-size: 14px;
    color: ${props => (props.theme === "primary" ? "#ffffff" : "white")};
    width: fit-content;
    cursor: pointer;

    &:hover {
        ${props =>
        props.theme === "primary"
            ? "opacity: 0.8"
            : `
                background: #2323ff;
                color: ;
                border: 2px solid #00d7ff;
                `};
    }

    &:active {
        ${props =>
        props.theme === "primary"
            ? "opacity: 0.5"
            : ` 
            opacity: 0.8;
            `}
    }
`