import styled from "styled-components";

export const Typography = styled.span`
    color: ${props => props.color||"var(--base-font-color)"};
    font-size: ${props => {
        switch (props.size) {
            case "title":
                return "var(--title-font-size)";
            case "subtitle":
                return "var(--subtitle-font-size)";
            case "text":
                return "var(--text-font-size)";
            case "subdata":
                return "var(--subdata-font-size)";
            default:
                return "1 rem";
    }}};
    font-weight: ${props => props.size?.includes('title')||props.bold?"bold":"normal"};
`