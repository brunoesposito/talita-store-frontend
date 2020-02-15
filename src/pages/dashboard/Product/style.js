import styled from "styled-components";

export const Product = styled.div`
    
    &:hover {

        .comment,
        .boxProduct {
            transform: translateY(0);
        }
        .boxProduct {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
    .boxProduct {
        position: relative;
        background-color: #fff;
        border: 1px solid #ececec;
        border-radius: 5px;
        padding: 20px;
        text-align: center;
        transform: translateY(10%);
        transition: 0.5s;
        z-index: 2;

        img {
            max-width: 100%;
            height: 250px;
            margin: 0 auto 20px;
            overflow: hidden;
        }
        p {
            min-height: 50px;
            display: block;
        }
        .box_price {

            span {
                color: #FC6963;
                font-size: 17px;
            }
            .old_price {
                color: #999;
                font-size: 15px;
                margin-right: 10px;
                text-decoration: line-through;
            }
        }
    }
`;