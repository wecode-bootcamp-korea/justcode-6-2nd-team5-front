import "./MyPlan.scss";
import NoPlan from "./NoPlan/NoPlan";
import Plan from "./Plan/Plan";

function MyPlan(props) {
  const { user, rentCar, hotel, restaurant } = props;

  return (
    <div className="mypage-myplan-wrap">
      {/* rentCar */}
      <div className={rentCar ? "content-on" : "content-off"}>
        <ul>
          <li>
            <div className="plan-type">
              <p>렌터카</p>
              <a href="">지난 여행보기 &gt;</a>
            </div>
            {rentCar ? (
              <Plan type={"rentCar"} info={rentCar} />
            ) : (
              <NoPlan type={"rentCar"} user={user.username} />
            )}
          </li>
        </ul>
      </div>
      {/* hotel */}
      <div className={hotel ? "content-on" : "content-off"}>
        <ul>
          <li>
            <div className="plan-type">
              <p>숙박</p>
              <a href="">지난 여행보기 &gt;</a>
            </div>
            {hotel ? (
              <Plan type={"hotel"} info={hotel} />
            ) : (
              <NoPlan type={"hotel"} user={user.username} />
            )}
          </li>
        </ul>
      </div>
      {/* restaurant */}
      <div className={restaurant ? "content-on" : "content-off"}>
        <ul>
          <li>
            <div className="plan-type">
              <p>맛집</p>
              <a href="">지난 여행보기 &gt;</a>
            </div>
            {restaurant ? (
              <Plan type={"restaurant"} info={restaurant} />
            ) : (
              <NoPlan type={"restaurant"} />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyPlan;
