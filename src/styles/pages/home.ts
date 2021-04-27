import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 1.5rem 0;
    flex-direction: column;
    align-items: center;

    h1 {
        color: #fff;
        margin-bottom: 3rem;
        font-size: 3rem;
    }

    li {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 1.5rem;

        a {
            color: #fff;
            text-decoration: none;

            transition: filter 0.2s;

            &:hover {
                text-decoration: underline;
                filter: brightness(0.7);
            }
        }

        & + li {
            margin-top: 1rem;
        }
    }

    div {
        input {
            background: #333;
            color: #fff;
            border: 2px solid #7159c1;
            border-radius: 0.5rem;
            padding: 0.5rem 0.8125rem;
            cursor: pointer;
            margin-top: 0.9rem;
            font-weight: bold;
            font-size: 0.9rem;
            cursor: text;
        }

        button {
            background: #7159c1;
            color: #fff;
            border: 0;
            padding: 0.625rem 0.8125rem;
            margin-left: 0.3125rem;
            margin-top: 0.9rem;
            font-weight: bold;
            font-size: 1.2rem;
            border-radius: 0.5rem;

            &:hover {
                box-shadow: 0px 5px 5px #000000cc;
                transition: all 0.3s 0s;
                transform: translateY(-5px);
            }
        }
    }
`
