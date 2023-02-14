const Dropdown = ({ value, onChange, options, className }: any) => {
  const valorDefault = "Todo";
  className = `form-select ${className}`;
  return (
    <select
      className={className}
      value={value || valorDefault}
      onChange={onChange}
    >
      <option value="">{valorDefault}</option>
      {options};
    </select>
  );
};

export default Dropdown;
