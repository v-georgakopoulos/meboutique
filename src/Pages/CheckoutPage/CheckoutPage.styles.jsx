import styled from "styled-components";
import { media } from "../../styles/media";

export const CheckoutContainer = styled.div`
  max-width: 900px;
  margin: 60px auto;

  @media ${media.sm} {
    width: 300px;
  }

  form {
    .input-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;

      @media ${media.sm} {
        grid-template-columns: 1fr;
      }
    }
    .single-column {
      display: grid;
      grid-template-columns: 1fr;
      max-width: calc(50% - 10px);

      @media ${media.sm} {
        grid-template-columns: 1fr;
        max-width: unset;
      }
    }

    button {
      margin-left: auto;
      @media ${media.sm} {
        margin: auto;
        width: 100%;
      }
    }
  }
`;
