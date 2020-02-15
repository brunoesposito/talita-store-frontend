import styled from 'styled-components';

export const BoxComment = styled.div`
    position: relative;
    background-color: #FC6963;
    padding: 20px;
    transform: translateY(-90%);
    transition: 0.5s;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: 1;

    textarea {
        width: 100%;
        color: #fff;
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 4px;
        padding: 10px;
        box-sizing: border-box;
        font-size: 14px;
        outline: none;

        &::-webkit-input-placeholder {
            color: #fff;
        }
    }
    small {
        color: #fff;
    }
    p {
        color: #fff;
        border: 1px solid #fff;
        border-radius: 4px;
        padding: 5px;
        margin-bottom: 5px;

        &.empty_comment {
            border: 0;
            margin: 0;
        }
    }
    .sendComment {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        border: 0;
        border-radius: 4px;
        font-size: 15px;
    }
`;

export const RegisterComment = styled.div`
    display: flex;
    align-items: center;

    p {
        width: 100%;
        margin: 0 10px 0 0;
    }
    button {
        background-color: #fff;
        color: #FC6963;
        border: 1px solid transparent;
        border-radius: 4px;
        padding: 0 1px;
        cursor: pointer;
    }
`;