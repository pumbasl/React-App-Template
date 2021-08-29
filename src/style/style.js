import styled from 'styled-components';

const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
});

const Header = styled.div`
    flex: 0 0 auto;
`;

const Container = styled.div`
    flex: 1 0 auto;
`;

const Footer = styled.div`
    flex: 0 0 auto;
`;

export { Wrapper, Header, Container, Footer };