import "./SideFilterBar.scss";
import SortOrderBar from "./SortOrderBar/SortOrderBar";

function SideFilterBar() {
  // order type mockdata
  const orderTypes = [
    {
      id: 0,
      type: "가격순",
    },
    {
      id: 1,
      type: "예약순",
    },
    {
      id: 2,
      type: "리뷰평점순",
    },
  ];

  return (
    <div className="rentcar-sfb-wrap">
      <SortOrderBar orderTypes={orderTypes} />
    </div>
  );
}

export default SideFilterBar;
