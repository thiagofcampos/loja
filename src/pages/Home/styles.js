import styled from 'styled-components';

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;

    img{
        align-self: center;
        heigth: 450px;
        width: 100%;
    }

    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 20px;
    }

    li > strong{
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin: 10px 0 15px;
    }

    li > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
    }

    button {
        background: #04bf6d;
        color: #fff;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: auto;

        display: flex;
        align-items: center;

        div {
            display: flex;
            align-items: ceter;
            padding: 12px;
            background: #00a75e;

            svg {
                margin-right: 5px;
            }
        }

        span {
            flex: 1;
            text-align: center;
        }
    }
`;
