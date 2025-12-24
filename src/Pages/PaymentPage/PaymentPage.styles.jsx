import styled from "styled-components";
import {media} from "../../styles/media"

export const PaymentFormContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

  @media ${media.sm} {
    width:calc(100% - 20px);
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
