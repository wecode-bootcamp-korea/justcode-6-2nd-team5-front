import "./CheckList.scss";

function CheckList(props) {
  const { filterTypeId, checkList } = props;

  return (
    <ul className="dep3" id={filterTypeId}>
      {checkList.map((content, index) => (
        <li className="check-filter" key={index}>
          <span>{content}</span>
          <input type="checkbox" />
        </li>
      ))}
    </ul>
  );
}

export default CheckList;
