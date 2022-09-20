import React, { useState, useEffect } from "react";

import "./Lodging.scss";

function Lodging() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/lodging.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.lodgeInfo);
      });
  }, []);

  return <div>Lodging</div>;
}

export default Lodging;
