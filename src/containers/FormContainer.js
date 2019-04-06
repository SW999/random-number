import React from 'react';
import Input from '../components/Input';

const FormContainer = ({ props }) => (
  <div className="container">
    <div className="grid">
      <div className="grid__cell">
        <Input
          name="From"
          placeholder="Min value"
          min={0}
        />
      </div>
      <div className="grid__cell">
        <div className="form-group">
          <Input
            name="To"
            placeholder="Max value"
            min={1}
          />
        </div>
      </div>
    </div>
  </div>
);

export default FormContainer
