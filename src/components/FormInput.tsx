import React from 'react';

import '../styles/FormInput.css';

interface IFormInput {
  formLabelText: string;
  placeholderText: string;
  showErrorBorder: boolean;
  handler: (e: React.FormEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<IFormInput> = ({
  formLabelText,
  placeholderText,
  showErrorBorder,
  handler,
}) => (
  <label className="form-label">
    {formLabelText}
    <input
      type="text"
      name={formLabelText.toLowerCase()}
      className={`form-input ${showErrorBorder && 'error-border'}`}
      placeholder={placeholderText}
      onChange={handler}
    />
  </label>
);

export default FormInput;
