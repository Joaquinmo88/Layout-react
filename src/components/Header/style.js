import styled from 'styled-components';


const WrapperHeader = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    max-width: 1024px;
    height: 100%;
    margin: auto;
    padding: 0;
    .cnt-user,
    .cnt-cart,
    .cnt-logo{
        width: 64px;
        text-align: center;
        img{
            max-height: 25px;
            border-radius: 12.5px;
        }
    }
    .cnt-search{
        width: calc(100% - 193px);
        height: 100%;
        span{
            height: 100%;
            display: flex;
            align-items: center;
            input{
                border-radius: 0;
                border: none;
            }
        }
    }
    li{
        border-right: 1px solid #eee;
        &:first-child{
            border-left: 1px solid #eee;    
        }
    }
    
`

const WrapperHeaderB2B = styled.div`
    height: 100%;
    .container-logo,
    .container-menu{
        float: left;
    }

    .container-logo{
        width: 200px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            transition: all 0.3s ease-in-out;
            max-width: 150px;
        }
    }
    .container-menu{
        // width: calc(100% - 200px);
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        
        .title-header{
            line-height: 1.3rem;
            text-align: center;
            flex: 1;
        }

        .nav-header{
            padding-right: 0.5rem;
            ul{
                list-style: none;
                margin: 0;
                padding: 0;
                li{
                    display: inline-block;
                    a{
                        padding: 0.3rem 1rem;
                        font-size: 13px;
                        background-color: #b3b2b2;
                        border-radius: 6px;
                        margin-left: 0.5rem;
                        color: #fff;
                    }
                }
            }
        }
    }

    .ant-dropdown-link{
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: #747273;
        i{
            margin-left: 0.5rem;
        }
    }
`;

export {
    WrapperHeader,
    WrapperHeaderB2B
}