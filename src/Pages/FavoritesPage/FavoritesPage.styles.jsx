import styled from "styled-components";
import { media } from "../../styles/media";

export const FavoritesPageContainer = styled.div`
  max-width: 1200px; 
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position:relative;
`;

export const FavoritesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${media.sm} {
    grid-template-columns: auto;
    gap:10px;
  }
`;
