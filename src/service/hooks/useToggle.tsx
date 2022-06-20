import { useState } from 'react';

export const useToggle = (defaultValue: unknown): any[] => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (value: any) => {
    setValue((currentValue: any) => (typeof value === 'boolean' ? value : !currentValue));
  };

  return [value, toggleValue];
};
