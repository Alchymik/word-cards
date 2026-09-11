import React from 'react';
import { ProfileField } from '../types';

type FieldProps = {
  field: ProfileField;
  value: any;
  onChange: (name: string, value: any) => void;
  disabled?: boolean;
};

export const Field: React.FC<FieldProps> = ({ field, value, onChange, disabled }) => {
  const { name, label, type, options, required } = field;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="field">
      <label>
        {label}
        {required ? ' *' : ''}
      </label>

      {type === 'text' && (
        <input type="text" value={value ?? ''} onChange={handleChange} disabled={disabled} />
      )}

      {type === 'number' && (
        <input type="number" value={value ?? ''} onChange={handleChange} disabled={disabled} />
      )}

      {type === 'textarea' && (
        <textarea value={value ?? ''} onChange={handleChange} disabled={disabled} />
      )}

      {type === 'date' && (
        <input type="date" value={value ?? ''} onChange={handleChange} disabled={disabled} />
      )}

      {type === 'select' && (
        <select value={value ?? ''} onChange={handleChange} disabled={disabled}>
          <option value="">-- выберите --</option>
          {options?.map(opt => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {type === 'checkbox' && (
        <div className="checkbox-group">
          {options?.map(opt => (
            <label key={opt}>
              <input
                type="checkbox"
                checked={Array.isArray(value) && value.includes(opt)}
                onChange={e => {
                  const current = Array.isArray(value) ? value : [];
                  const next = e.target.checked
                    ? [...current, opt]
                    : current.filter((v: string) => v !== opt);
                  onChange(name, next);
                }}
                disabled={disabled}
              />
              {opt}
            </label>
          ))}
        </div>
      )}

      {type === 'radio' && (
        <div className="radio-group">
          {options?.map(opt => (
            <label key={opt}>
              <input
                type="radio"
                name={name}
                value={opt}
                checked={value === opt}
                onChange={handleChange}
                disabled={disabled}
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
