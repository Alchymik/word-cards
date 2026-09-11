import React, { useEffect } from 'react';
import { ProfileField, ProfileData } from '../types';
import { Field } from './Field';

type EditViewProps = {
  fields: ProfileField[];
  values: ProfileData;
  onChange: (name: string, value: any) => void;
};

export const EditView: React.FC<EditViewProps> = ({ fields, values, onChange }) => {
  const isCompany = values.accountType === 'company';

  useEffect(() => {
    if (isCompany && values.taxId !== 'AUTO-TAX-ID') {
      onChange('taxId', 'AUTO-TAX-ID');
    }
  }, [isCompany, values.taxId, onChange]);

  const visibleFields = fields.filter(field => {
    if (isCompany && field.name === 'middleName') return false;
    return true;
  });

  return (
    <form className="edit-view" onSubmit={e => e.preventDefault()}>
      {visibleFields.map(field => (
        <Field
          key={field.name}
          field={field}
          value={values[field.name]}
          onChange={onChange}
          disabled={isCompany && field.name === 'taxId'}
        />
      ))}
    </form>
  );
};
