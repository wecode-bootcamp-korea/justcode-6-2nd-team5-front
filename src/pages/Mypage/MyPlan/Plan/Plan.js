import "./Plan.scss";

function Plan(props) {
  const { type, info } = props;

  if (info.length > 0) {
    info.map((inf) => {
      console.log(inf);
    });
  }

  return (
    <>
      {info.length > 0 &&
        !(type === "restaurant") &&
        info.map((info, index) => {
          return (
            <div className="plan-detail-wrap">
              <div className="plan-detail">
                <div className="top">
                  <div className="top-left">
                    <span className="margin-right gray">예약번호</span>
                    <span>
                      {info.reserveinfo.created_at.split("-").join("")}82
                      {index}
                    </span>
                  </div>
                  <div className="tag">예약완료</div>
                </div>
                <div className="main">
                  <p className="name">
                    {info.companyinfo.rentcarcompanyname} {info.carinfo.carname}
                  </p>
                  <div className="time">
                    <div className="created-at">
                      <span>예약일시</span>
                      <span className="gray">
                        {info.reserveinfo.created_at.split("-").join(".")}
                      </span>
                    </div>
                    <div className="period">
                      <span>이용기간</span>
                      <span className="gray">
                        {info.reserveinfo.rentdate} ~{" "}
                        {info.reserveinfo.returndate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Plan;
