import styled from "styled-components";
import { media } from "../../styles/media";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
      @media ${media.sm} {
          width:100%;
      }
  
  h2 {
    margin: 10px 0;
  }

`;
