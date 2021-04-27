import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 1.5rem 0;
    flex-direction: column;
    align-items: center;

    div {
        margin-bottom: 1.5rem;

        a {
            display: flex;
            align-items: center;
            color: #fff;
            font-size: 1.5rem;
            text-decoration: none;

            transition: filter 0.2s;

            &:hover {
                text-decoration: underline;
                filter: brightness(0.7);
            }

            img {
                margin-right: 1rem;
            }
        }
    }

    h1 {
        color: #fff;
        margin-bottom: 3rem;
        font-size: 3rem;
    }

    button {
        background: #7159c1;
        color: #fff;
        border: 0;
        padding: 0.625rem 1rem;
        margin-left: 0.3125rem;
        margin-top: 0.9rem;
        font-weight: bold;
        font-size: 1.5rem;
        border-radius: 0.5rem;

        &:hover {
            box-shadow: 0px 5px 5px #000000cc;
            transition: all 0.3s 0s;
            transform: translateY(-5px);
        }
    }
`
