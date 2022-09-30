import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ModalContext } from "../../../Context/ModalContext";

const AreaSearch = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [select, setSelect] = useState([]);
  const { setOpen } = useContext(ModalContext);

  useEffect(() => {
    fetch("/data/restaurant/restaurantLocation.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.location);
      });
  }, []);

  console.log(data);

  // const AreaArr = [
  //   { id: 1, text: "제주시내" },
  //   { id: 2, text: "조천·함덕" },
  //   { id: 3, text: "구좌·월정" },
  //   { id: 4, text: "애월" },
  //   { id: 5, text: "한림·협재" },
  //   { id: 6, text: "서귀포·중문" },
  //   { id: 7, text: "표선·남원" },
  //   { id: 8, text: "성산·섭지코지" },
  //   { id: 9, text: "안덕·대정" },
  //   { id: 10, text: "한경·저지" },
  // ];

  const [selectArea, setSelectArea] = useState("");
  // const onClick = (e) => {
  //   setSelectArea(e.target.innerHTML);
  //   const url = `
  //   &category(메뉴)
  //   &hashTag(태그)
  //   &facility(편의사항)
  //   &address(주소)`;
  //   navigate(`/restaurant/list?${url}`);
  // };

  const goToArea = (e) => {
    let url;
    if (e.target.innertText === "") {
      url = e.target.innerText;
    } else {
      url = e.target.id;
    }
    navigate(`/restaurant/list?지역=${url}`);
    setOpen(false);
  };

  return (
    <Flex>
      {data.map((item) => {
        return (
          <AreaBtn
            key={item.id}
            onClick={goToArea}
            className={select.includes(item.id) && "isClicked"}
          >
            <img id={item.location} src={item.img} className="AreaImg"></img>
            <label htmlFor={item.id} className="AreaName">
              {item.location}
            </label>
          </AreaBtn>
        );
      })}
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  .isClicked {
    button {
      background-color: #404040;
    }
  }
`;

const AreaBtn = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 15px 10px 0;
  width: fit-content;
  height: 85px;

  .AreaImg {
    padding: 0;
    width: 60px;
    height: 60px;
    border-radius: 50px;
    border: none;
    background-color: #808080;
    cursor: pointer;

    &:hover {
      background-color: #404040;
    }
  }

  .AreaName {
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    color: #808080;
    cursor: pointer;
  }
`;

export default AreaSearch;
