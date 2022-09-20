import "./MyPlan.scss";

function MyPlan(props) {
  const { myPlan } = props;

  return (
    <div className="mypage-myplan-wrap">
      <div className="content">
        <ul>
          {myPlan &&
            myPlan.map((plan, index) => {
              return (
                <li key={index}>
                  <div className="plan-type">
                    <p>{plan.title}</p>
                    <a href="">지난 여행보기 &gt;</a>
                  </div>
                  <div className="plan-detail">
                    <div>
                      <div className="plus-btn">+</div>
                      <div className="text-wrap">
                        <p>이보다 저렴한 항공권은 못찾으실걸요?</p>
                        <p>
                          왕복 <span>6,000원</span> 할인 + 수수료
                          <span>2,000원</span> 면제
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default MyPlan;
