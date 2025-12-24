import styled from "styled-components";
import { media } from "../../styles/media";

export const CategoryContainer = styled.div`
  max-width: 1200px; 
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position:relative;

  /* @media ${media.xl} {
  background-color:red;
}
@media ${media.lg} {
  background-color:green;
}
@media ${media.md} {
  background-color:blue;
}
@media ${media.sm} {
  width:100%;
} */
`;


export const SortContainer = styled.div`
margin: 20px auto;
width:1180px;
display:flex;
justify-content:space-between;

@media ${media.xl} {
  width:1020px;
}
@media ${media.lg} {
  width:760px;
}
@media ${media.md} {
  width:580px;
}
@media ${media.sm} {
  width:100%;
}
  select {
    outline:none;
    padding:8px;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const ProductsContainer = styled.div`
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
