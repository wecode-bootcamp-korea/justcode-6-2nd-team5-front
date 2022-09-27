import "./TotalBox.scss";

function TotalBox(props) {
  const { totalAmount } = props;

  return (
    <div className="totalbox product-bar">
      <span className="title">
        총<span className="amount">{totalAmount}</span>건
      </span>
    </div>
  );
}

export default TotalBox;
