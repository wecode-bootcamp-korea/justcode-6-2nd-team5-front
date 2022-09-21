import "./GrayBox.scss";

function GrayBox(props) {
  const { GrayBoxContent } = props;

  return (
    <div className="mypage-graybox-wrap">
      <div className="content-list">
        {GrayBoxContent.map((data, index) => {
          return (
            <div className="content" key={index}>
              <div
                className="icon"
                key={index}
                style={{
                  backgroundImage: `url(${data.iconUrl})`,
                }}
              ></div>
              <p>
                {data.content}
                <span>0</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GrayBox;
