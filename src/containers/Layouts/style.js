import styled from 'styled-components';
import { images } from '../../constants';

const WrapperLogin = styled.div`
    height: 100vh;
    background-image: url(${images.login_fondo});
    background-position: 'center';
    background-repeat: 'no-repeat';
    background-size: 'cover';
`;


export {
    WrapperLogin
}