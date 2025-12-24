import styled from "styled-components";
import { media } from "../../styles/media";

export const ProductPageContainer = styled.div`
  display: flex;
  max-width:1200px;
  margin: 20px auto;

  @media ${media.md} {
    flex-direction:column;
    gap:20px;
  }
  @media ${media.sm} {
    flex-direction:column;
    gap:20px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  display:flex;
  align-items:center;
  .info {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      width:80%;
      margin:20px 0;
    }

    .add-to-cart {
      margin-top: 20px;
    }
  }
`;
