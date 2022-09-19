import "./ServiceList.scss";

function ServiceList(props) {
  const { content, btns, btnwidth } = props;

  return (
    <div className={`mypage-service-${content}-wrap`}>
      <ul className="service-list">
        {btns.map((btn, index) => {
          return (
            <li key={index} style={{ width: btnwidth }}>
              <button key={index}>{btn}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ServiceList;
