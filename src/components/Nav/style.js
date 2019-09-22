import styled from 'styled-components';


const WrapperNav = styled.div`
    width: 100%;
    background-color: #333;
    ul{
        list-style: none;
        margin: 0;
        padding: 0 1rem;
        width: 100%;
        li.nav-item{
            padding: 0.1rem 0;
            a.nav-link{
                padding: 0 0.5rem;
                display:block;
                color: white !important;
                font-size: 10px;
                text-transform: uppercase;
                border-left: 1px solid #ccc;
            }   
            &:first-child{
                a{
                    border-left: none;
                }
            }
        }
    }
   
`;

export {
    WrapperNav
}