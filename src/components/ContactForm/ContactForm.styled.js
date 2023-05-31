import styled from "@emotion/styled";
import { Form, Field } from "formik";
import { BsFillPersonPlusFill } from "react-icons/bs";

// ext component (wrap + add export)
export const FormPanel = styled(Form)`
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Label = styled.label`
  display: block;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const Input = styled(Field)`
  display: block;
  width: 100%;
  margin-top: 5px;
`;

export const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-top: 40px;
`;

export const AddIcon = styled(BsFillPersonPlusFill)`
  margin-right: 5px;
`;