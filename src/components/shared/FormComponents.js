import Styled from "styled-components";

export const TextInput = Styled.input`
      flex: 3;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      padding: 0.375rem 0.75rem;
      border-radius: 0.25rem;
      :focus{
          border-color: #ffc107;
          outline: 0;
         
      }
`;
export const TextAreaInput = Styled.textarea`
      width: 80%;
      flex: 3;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      padding: 0.375rem 0.75rem;
      border-radius: 0.25rem;
      margin-top: 0.75rem;
      :focus{
          border-color: #ffc107;
          outline: 0;
         
      }
`;

export const Label = Styled.label`
      flex:2;
      text-align: right;
      margin-right: calc(0.375rem + 1px);
      padding-top: calc(0.375rem + 1px);
      padding-bottom: calc(0.375rem + 1px);
`;
export const DropDown = Styled.select`
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      padding: 0.375rem 0.75rem;
      border-radius: 0.25rem;
      :focus{
          border-color: #ffc107;
          outline: 0;
         
      }
`;

export const Button = Styled.button`
  background-color: #ffc107;
  border-radius: 3px;
  color: #424000;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  margin-top: 0.75rem;

`;
