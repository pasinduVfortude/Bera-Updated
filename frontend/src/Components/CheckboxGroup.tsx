import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

export interface Option {
  value: string;
  label: string;
}

export interface CheckboxGroupProps {
  options: Option[];
  onChange: (department: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, onChange }) => {
  const [department, setDepartment] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
      setDepartment((prevState) => [...prevState, value]);
    } else {
      setDepartment((prevState) => prevState.filter((v) => v !== value));
    }
  };

  return (
    <>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          control={<Checkbox checked={department.includes(option.value)} onChange={handleCheckboxChange} value={option.value} />}
          label={option.label}
        />
      ))}
    </>
  );
};

export default CheckboxGroup;
