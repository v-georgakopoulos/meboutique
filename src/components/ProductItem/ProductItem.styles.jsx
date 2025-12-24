import styled from "styled-components";
import { media } from "../../styles/media";

export const CategoryItemContainer = styled.div`

`
export const ImageContainer = styled.div`
    position: relative;
    width: 280px;
    height: 400px;

    @media ${media.xl} {
      width: 240px;
      height: 330px;
    }
    @media ${media.lg} {
      width: 240px;
      height: 380px;
    }
    @media ${media.md} {
      width:280px;
      height:360px;
    }
    @media ${media.sm} {
      width:unset;
      height:unset;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`
export const HeartIconContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 3px;
  top: 3px;
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
  z-index: 10;
  pointer-events: auto;

  svg {
    width: 18px;
    height: 18px;
    fill: none;
    transition: color 0.3s;
    stroke: ${({ active }) => (active ? "red" : "black")};
    fill: ${({ active }) => (active ? "red" : "none")};
  }
`;


export const ItemIfo = styled.div`
      p {
      text-align: left;
      font-size: 12px;

      @media ${media.sm} {
        margin-left:5px;
      }
    }
`

