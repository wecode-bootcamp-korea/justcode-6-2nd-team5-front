import "./Dep1.scss";

function Dep1(props) {
  const { title, isOndep1, onCheckDep1 } = props;

  return (
    <div className="dep1" onClick={onCheckDep1}>
      <span className="title">{title}</span>
      <div className={isOndep1 ? "right-icon-on" : "right-icon-off"}></div>
    </div>
  );
}

export default Dep1;
