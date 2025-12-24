import styled from "styled-components";
import {media} from "../../styles/media"

export const FooterContainer = styled.div`
  background: #000;
  color: #fff;
`;

export const FooterGrid = styled.div`
  max-width: 900px;
  padding:20px;
  margin: 0 auto;
  display:flex;
  flex-direction:column;
  gap: 40px;

  @media ${media.sm} {
    width:100%;
  flex-direction:column;
  }
`;

export const FooterBrand = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
  h2 {
    font-size: 26px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    opacity: 0.7;
  }
`;

export const FooterLinksContainer = styled.div`
  display:flex;
  justify-content:space-between;
`

export const FooterLinks = styled.div`
display:flex;
flex-direction:column;
  h4 {
    font-size: 14px;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 13px;
      margin-bottom: 10px;
      opacity: 0.7;
      cursor: pointer;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  font-size: 12px;
  opacity: 0.5;
  padding-bottom:10px;
`;
