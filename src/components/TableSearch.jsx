export const TableSearch = (props) => {
  return (
    <input
      className="table-search"
      value={props.value}
      onChange={props.setValue}
    />
  );
};
