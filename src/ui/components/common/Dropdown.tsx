import "../../css/buscador.css";
const Dropdown = ({ value, onChange, options, class_name }: any) => {
  const valorDefault = "Todo";
  const className = `form-select ${class_name}`;
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
