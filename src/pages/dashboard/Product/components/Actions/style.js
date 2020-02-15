import styled from 'styled-components';

export const BoxActions = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;

    .actions_icon {
        margin-left: 5px;
        background-color: #FC6963;
        color: #fff;

        &.deslike {
            color: rgba(0, 0, 0, 0.26);
            box-shadow: none;
            background-color: rgba(0, 0, 0, 0.12);

            &:hover {
                background-color: #FC6963;
                box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
                color: #fff;
            }
        }
        &:hover {
            background-color: #e4726d;
        }
    }
`;
