import React from 'react';

const SelectGenre = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="custom-input genre">
      <p>Genre</p>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectGenre;