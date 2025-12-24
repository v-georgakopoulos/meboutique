import styled from "styled-components";
import { media } from "../../styles/media";
export const CartContainer = styled.div`
  max-width: 900px;
  margin: 30px auto;

  .empty {
    text-align:center;
  }
`

export const ProductContainer = styled.div`
    display: grid;
    grid-template-columns:repeat(4,1fr);
    place-items: center;
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
    font-weight: 600;
    color: #444;

    p {
      text-transform: uppercase;
      font-size: 14px;
    }
  
`

export const CartTotal = styled.div`
  
    margin-top: 30px;
    text-align: right;
    font-size: 22px;
    font-weight: 600;
    
    @media ${media.md} {
    margin-right:20px;
    }
    @media ${media.sm} {
    margin-right:20px;
    }
  

  button {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    display: block;
  }

  p {
    text-align: center;
    font-size: 18px;
    margin-top: 60px;
    color: #666;

    svg {
      margin-left: 8px;
      vertical-align: middle;
    }
  }
`