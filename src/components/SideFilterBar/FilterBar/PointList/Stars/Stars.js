import "./Stars.scss";

function Stars() {
  const className = [
    "star-box",
    "star-box",
    "star-box",
    "star-box-4",
    "star-box",
  ];

  return (
    <div className="stars-wrap">
      {className.map((cl, index) => {
        return (
          <div className={cl} key={index}>
            {[...Array(index + 1)].map((el, index) => {
              return <div key={`star${index}`} className="star"></div>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Stars;
