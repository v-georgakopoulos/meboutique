import styled from "styled-components";
import {media} from "../../styles/media"

export const CartItemContainer = styled.div`
    display: grid;
  grid-template-columns:repeat(4,1fr);
  place-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;

  img {
    width: 120px;
    height: 150px;
    object-fit: cover;

    @media ${media.md} {
      width:60px;
      height:80px;
    }
    @media ${media.sm} {
      width:60px;
      height:80px;
    }
  }
`

export const  QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    span {
        font-size: 16px;
      cursor: pointer;
      svg {
        width: 30px;
        height: 30px;
        color: gray;
        transition: all 0.4s ease;
      }

      &:hover svg {
        transform: scale(1.2);
        color:black;
      }
    }
    
  .price {
    font-size: 18px;
    font-weight: 600;
  }  
  `
 export const RemoveItem = styled.span`
      cursor: pointer;
    svg {
      width:20px;
      height:20px;
      color: #999;
      transition: color 0.3s ease;
    }

    &:hover svg {
      color: #e63946;
    }
 `
