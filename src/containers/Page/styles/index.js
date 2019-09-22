import styled from "styled-components";
import { BackgroundColor } from "./themes";
import { WidthContentPricing } from "./variables";



const HeaderBanner = styled.div`
    display: inline-block;
    width: 100%;
    height: auto;
    position: relative;
    padding: 0 2rem;
    .header-banner-diagonal-content{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 600px;
        z-index: -1;
        background: url(${props => props.background});
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
        .cover{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: rgba(${BackgroundColor}, 0.9);
            background: linear-gradient(to right, rgb(${BackgroundColor}), rgba(${BackgroundColor}, 0.9));
            background: -webkit-linear-gradient(to right, rgb(${BackgroundColor}), rgba(${BackgroundColor}, 0.9));
        }
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .header-container-description{
        width: calc(100% - ${WidthContentPricing});
        padding-right: 3rem;
        position: relative;
        h1.header-container-title {
            font-size: 32px;
            color: white;
            font-weight: 600;
            font-family: "Montserrat", Arial, sans-serif;
        }
        .header-container-intro{
            color: white;
            font-family: "Montserrat", Arial, sans-serif;
            font-weight: 300;
            font-size: 16px;
            text-align: justify;
            margin: 2rem 0;
        }
        .header-container-image {
            border: 5px solid #ffffff;
            border-radius: 3px;
            img{
                border-radius: 0 0 3px 3px;
            }
        }
        .header-container-stores-button {
            position: absolute;
            bottom: 0;
            left: 0;
            a {
                margin-left: 1rem;
                img {
                    max-width: 220px;
                    height: 50px;
                }
            }
        }
    }
    @media (max-width: 992px) {
        flex-direction: column;
        .header-container-description{
            width: 100%;
            margin-bottom: 2rem;
            padding-right: 0rem;
            .header-container-stores-button {
                position: relative;
                text-align: center;
                margin: 3rem 0;
            }
        }
        
    }
`;

const WrapperServicesBox = styled.div`
    padding: 5rem 2rem;
    .content-service{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media (max-width: 806px) {
            flex-direction: column;
        }
    }
`;


const WrapperVideoBlog = styled.div`
    width: 100%;
    
    padding: 5rem 2rem;
    background: rgba(${BackgroundColor}, 0.9);
    background: linear-gradient(to right, rgb(${BackgroundColor}), rgba(${BackgroundColor}, 0.9));
    background: -webkit-linear-gradient(to right, rgb(${BackgroundColor}), rgba(${BackgroundColor}, 0.9));
    .content-video{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .content-video-image-button{
            flex: 1;
            position: relative;
            span {
                position: absolute;
                left: 50%;
                top: 50%;
                margin-top: -30px;
                margin-left: -25px;
                z-index: 2;
                i {
                    color: #ffffff;
                    font-size: 72px;
                    cursor: pointer;
                    transition: all 1s ease;
                    -moz-transition: all 1s ease; /* Firefox */
                    -webkit-transition: all 1s ease; /* Chrome - Safari */
                    -o-transition: all 1s ease; /* Opera */
                    animation: pulse 2s infinite;
                }
                &:hover {
                    i {
                        color: #9ddcff;
                        animation: none;
                    }
                }
            }
            img {
                max-width: 350px;
            }
        }
        .content-video-decription{
            padding-left: 3rem;
            h3,
            p {
                color: white;
                font-family: "Montserrat", Arial, sans-serif;
            }
            h3 {
                font-size: 26px;
                margin-top: 1rem;
                font-weight: 600;
                letter-spacing: 1px;
            }
        }

        @media (max-width: 700px) {
            flex-direction: column;
            .content-video-decription{
                margin-top: 5rem;
                padding-left: 0rem;
                text-align: center;
            }
        }
    }
`;


const WrapperComments = styled.div`
    padding: 5rem 2rem;
`;

const WrapperAppDownload = styled.div`
    padding: 5rem 2rem;
    position: relative;
    background: rgba(${BackgroundColor}, 0.9);
    background: linear-gradient(to left, rgb(${BackgroundColor}), rgba(${BackgroundColor}, 0.9));
    background: -webkit-linear-gradient(to left, rgb(${BackgroundColor}), rgba(${BackgroundColor}, 0.9));
`;

const WrapperFooter = styled.div`
    padding: 5rem 2rem;
`;

const WrapperCopyFooter = styled.div`
    text-align: center;
    background-color: rgb(${BackgroundColor});
    padding: 1.5rem;
    color: white;
    span {
      font-weight: 500;
      font-family: "Montserrat", Arial, sans-serif;
    }
`;

HeaderBanner.defaultProps = {
    background: "",
}

export {
    HeaderBanner,
    HeaderContainer,
    WrapperServicesBox,
    WrapperVideoBlog,
    WrapperComments,
    WrapperAppDownload,
    WrapperFooter,
    WrapperCopyFooter
}