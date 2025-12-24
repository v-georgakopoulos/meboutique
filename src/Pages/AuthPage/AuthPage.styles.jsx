import styled from "styled-components";
import { media } from "../../styles/media";

export const AuthContainer = styled.div`
  display: flex;
  max-width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media ${media.md} {
    width:330px;
    flex-direction:column;
    align-items:center;
    gap:30px;
  }
  @media ${media.sm} {
    width:330px;
    flex-direction:column;
    align-items:center;
    gap:30px;
  }

`