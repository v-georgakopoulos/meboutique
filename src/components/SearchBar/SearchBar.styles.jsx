import styled from "styled-components";
import { media } from "../../styles/media";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background-color: #ffffff;
  svg {
    color: #888;
  }

  input {
    border:none;
    outline: none;
    font-size: 14px;
    color: #333;

      @media ${media.sm} {
        width:120px;
  }

    &::placeholder {
      color: #aaa;
    }
  }
`