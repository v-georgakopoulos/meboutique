import styled from "styled-components";
import {media} from "../../styles/media"

export const SubscibeContainer = styled.div`
  width: 100%;
  padding: 80px 20px;
  text-align: center;
  background: #f7f7f7;

  @media ${media.sm} {
  }

  h2 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    opacity: 0.7;
    margin-bottom: 30px;
    @media ${media.sm} {
    width:300px;
    margin: 20px auto;
  }
  }

`
export const SubscribeForm = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  max-width: 500px;
  margin: 0 auto;

  @media ${media.sm} {
   flex-direction:column;
  }

  input {
    flex:1;
    padding: 12px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;
  }
  button {
    flex:0.3;
  }
`
