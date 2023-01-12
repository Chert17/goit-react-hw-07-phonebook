import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  padding: 12px;
  width: 300px;
  outline: 1px solid black;
`;

export const FormItem = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputName = styled.span`
  font-weight: 500;
  font-size: 18px;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(133, 133, 133);
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: #4e65fb;
    color: #fff;
  }
`;
