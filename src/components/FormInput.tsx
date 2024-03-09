import React from "react";

import "../styles/FormInput.css";

interface IFormInput {
  formLabelText: string;
  placeholderText: string;
  handler: (e: React.FormEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<IFormInput> = ({
  formLabelText,
  placeholderText,
  handler,
}) => {
  return (
    <label className="form-label">
      {formLabelText}
      <input
        type="text"
        name={formLabelText.toLowerCase()}
        className="form-input"
        placeholder={placeholderText}
        onChange={handler}
      />
    </label>
  );
};

export default FormInput;
