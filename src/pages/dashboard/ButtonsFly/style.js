import styled from 'styled-components';

export const ButtonModal = styled.div`
    position: fixed;
    top: 90%;
    right: 25px;
    z-index: 999;

    @media(min-width: 600px){
        top: inherit;
        bottom: 25px;
    }

    button {
        margin-left: 10px;
        background-color: #FC6963;
        color: #fff;

        &:hover, &:focus {
            background-color: #ff3333;
        }
        &.saller {
            background: #75D701;

            &:hover, &:focus {
            background-color: #56A902;
            }
        }
    }
`;

export const BoxModal = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    background: #fff;
    width: 80%;
    max-width: ${props => props.setWidth || '600px'};
    transform: translate(-50%, -50%);
    outline: none;
    box-shadow: none;
    padding: 20px;
    border-radius: 5px;

    > p {
        font-size: 17px;
        text-align: right;
        font-weight: bold;
    }
    form {
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
            color: #ff3333;
            margin-bottom: 15px;
            border: 1px solid #ff3333;
            padding: 10px;
            width: 100%;
            text-align: center;
            box-sizing: border-box;
            margin-top: 0;
        }
        input {
            flex: 1;
            height: 46px;
            margin-bottom: 15px;
            padding: 0 20px;
            color: #777;
            font-size: 15px;
            width: 100%;
            border: 1px solid #ddd;
            box-sizing: border-box;
            border-radius: 4px;
            height: 40px;
            line-height: 40px;
            &::placeholder {
            color: #999;
            }
        }
        button {
            color: #fff;
            font-size: 16px;
            background: #75D701;
            height: 56px;
            border: 0;
            border-radius: 5px;
            width: 100%;
            &:hover, &:focus {
            background-color: #56A902;
            }
        }
        hr {
            margin: 20px 0;
            border: none;
            border-bottom: 1px solid #cdcdcd;
            width: 100%;
        }
        a {
            font-size: 16;
            font-weight: bold;
            color: #999;
            text-decoration: none;
        }
    }
    table {
        margin-top: 20px;
    }
`;
