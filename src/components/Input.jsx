import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({ label, id, type, placeholder, value, onChange, required }, ref) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
        required={required}
      />
    </>
  );
});
