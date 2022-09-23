import { useEffect, useState } from "react";
import "./Dep1.scss";

function Dep1(props) {
  const { title, getValue } = props;

  // dep-1 check state value
  const [isOndep1, setIsOndep1] = useState(false);

  // dep-1 change disabled
  const onCheckDep1 = (e) => {
    setIsOndep1((prev) => !prev);
  };

  useEffect(() => {
    getValue(isOndep1);
  }, [isOndep1]);

  return (
    <div className="dep1" onClick={onCheckDep1}>
      <span className="title">{title}</span>
      <div className={isOndep1 ? "right-icon-on" : "right-icon-off"}></div>
    </div>
  );
}

export default Dep1;
