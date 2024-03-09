import React from "react";

import "../styles/FormInput.css";

interface IFormInput {
  formLabelText: string;
  placeholderText: string;
}

const FormInput: React.FC<IFormInput> = ({
  formLabelText,
  placeholderText,
}) => {
  return (
    <label className="form-label">
      {formLabelText}
      <input
        type="text"
        name={formLabelText.toLowerCase()}
        className="form-input"
        placeholder={placeholderText}
      />
    </label>
  );
};

export default FormInput;
