import { Field, ErrorMessage, Form } from "formik";

import styled from "styled-components";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-weight: 500;
  text-align: start;
`;
export const InputContainer = styled.div`
  position: relative;
`;
export const Input = styled(Field)`
  width: 98%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const ShowPasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

export const Error = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
  text-align: start;
  font-size:14px;
`;

export const SubmitButton = styled.button`
  background-color: #000;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
export const TextArea = styled(Field)`
  width: 98%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;
