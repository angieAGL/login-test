import "../../css/buscador.css";
const Dropdown = ({ value, onChange, options, class_Name }: any) => {
  const valorDefault = "Todo";
  const className = `form-select ${class_Name}`;
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
