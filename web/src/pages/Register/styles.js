import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  margin: 200px;
  background: #fff;
  padding: 40px;
  min-width: 400px;
  border-radius: 5px;
  button {
    width: 100%;
    height: 45px;
    margin-top: 15px;
    border: none;
    background: #6441a5;
    color: #fff;
    font-size: 16px;
    &:hover {
      background: ${darken(0.08, '#6441a5')};
    }
  }
  form {
    justify-content: center;
    display: block;
  }

  strong {
    color: #000000;
    font-size: 24px;
    margin-bottom: 30px;
    display: block;
    text-align: center;
  }
`;

export const InputBlock = styled.div`
  margin: 10px 10px;
  label {
    color: #000000;
    font-size: 16px;
    font-weight: bold;
    display: block;
  }
  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    border: 0;
    border-bottom: 1px solid #eee;
  }
`;

export const InputGroup = styled.div`
  margin-top: 0;
  gap: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
