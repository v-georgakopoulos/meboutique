import styled from "styled-components"

export const ConfirmationContainer = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 70vh;
  background-color: #f5f5f5;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 500px;

  h2 {
    font-size: 2.2rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #34495e;
    margin-bottom: 1rem;
  }
`