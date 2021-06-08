import styled from 'styled-components';
export default function Footer() {
  return (
    <FooterContainer>
    © Copyright 2021
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;