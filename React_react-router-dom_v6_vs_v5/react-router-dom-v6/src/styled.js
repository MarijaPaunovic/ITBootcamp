import styled from "styled-components";

export const Navbar = styled.nav`
    background-color: turquoise;
    padding: 20px 30px;
    display: flex;
    align-items: center;
    margin: 0 auto;

    ul {
        li {
            display: inline;
            margin: 0 10px;

            a {
                text-decoration: none;
            }
        }
    }

`

export const UserItem = styled.p`
background-color: ${(props => props.primary ? "turquoise" : "yellow")};
`