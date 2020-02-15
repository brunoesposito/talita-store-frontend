import styled from "styled-components";

export const BoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    img {
        width: 100px;

        @media(min-width: 600px){
            width: 150px;
        }
    }
    span {
        font-size: 14px;

        button {
            padding: 0;
            margin: 0;
            border: 0;
            font-size: 14px;
            color: #FC6963;  
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }  
        }
    }
`;