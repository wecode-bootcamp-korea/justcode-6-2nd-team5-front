import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ModalContext } from "../../../Context/ModalContext";

const HotelLocation = () => {
  const { location, setLocation } = useContext(ModalContext);
  const navigate = useNavigate;
  const [select, setSelect] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    location === "" &&
      setData([
        {
          id: 1,
          img: "https://static-www.jejupass.com/resource/MO/images/location/ALL.png",
          location: "전체",
        },
        {
          id: 2,
          img: "https://static-www.jejupass.com/resource/MO/images/location/JS.png",
          location: "제주시내",
        },
        {
          id: 3,
          img: "https://static-www.jejupass.com/resource/MO/images/location/JH.png",
          location: "조천·함덕",
        },
        {
          id: 4,
          img: "https://static-www.jejupass.com/resource/MO/images/location/WK.png",
          location: "구좌·월정",
        },
        {
          id: 5,
          img: "https://static-www.jejupass.com/resource/MO/images/location/AJ.png",
          location: "애월",
        },
        {
          id: 6,
          img: "https://static-www.jejupass.com/resource/MO/images/location/HH.png",
          location: "한림·협재",
        },
        {
          id: 7,
          img: "https://static-www.jejupass.com/resource/MO/images/location/SS.png",
          location: "서귀포·중문",
        },
        {
          id: 8,
          img: "https://static-www.jejupass.com/resource/MO/images/location/PN.png",
          location: "표선·남원",
        },
        {
          id: 9,
          img: "https://static-www.jejupass.com/resource/MO/images/location/SU.png",
          location: "성산·섭지코지",
        },
        {
          id: 10,
          img: "https://static-www.jejupass.com/resource/MO/images/location/DM.png",
          location: "안덕·대정",
        },
        {
          id: 11,
          img: "https://static-www.jejupass.com/resource/MO/images/location/HJ.png",
          location: "한경·저지",
        },
      ]);
    location === 1 &&
      setData([
        {
          id: 2,
          img: "https://static-www.jejupass.com/resource/MO/images/location/JS.png",
          location: "제주시내",
        },
      ]);
    location === 2 &&
      setData([
        {
          id: 7,
          img: "https://static-www.jejupass.com/resource/MO/images/location/SS.png",
          location: "서귀포·중문",
        },
      ]);
    location === 3 &&
      setData([
        {
          id: 3,
          img: "https://static-www.jejupass.com/resource/MO/images/location/JH.png",
          location: "조천·함덕",
        },
        {
          id: 4,
          img: "https://static-www.jejupass.com/resource/MO/images/location/WK.png",
          location: "구좌·월정",
        },
      ]);
    location === 4 &&
      setData([
        {
          id: 8,
          img: "https://static-www.jejupass.com/resource/MO/images/location/PN.png",
          location: "표선·남원",
        },
        {
          id: 9,
          img: "https://static-www.jejupass.com/resource/MO/images/location/SU.png",
          location: "성산·섭지코지",
        },
      ]);
    location === 5 &&
      setData([
        {
          id: 5,
          img: "https://static-www.jejupass.com/resource/MO/images/location/AJ.png",
          location: "애월",
        },
        {
          id: 6,
          img: "https://static-www.jejupass.com/resource/MO/images/location/HH.png",
          location: "한림·협재",
        },
        {
          id: 11,
          img: "https://static-www.jejupass.com/resource/MO/images/location/HJ.png",
          location: "한경·저지",
        },
      ]);
    location === 6 &&
      setData([
        {
          id: 10,
          img: "https://static-www.jejupass.com/resource/MO/images/location/DM.png",
          location: "안덕·대정",
        },
      ]);
  }, [location]);
  const [selectArea, setSelectArea] = useState("");
  const onClick = (e) => {
    setSelectArea(e.target.innerHTML);
    const url = `
    &category(메뉴)
    &hashTag(태그)
    &facility(편의사항)
    &address(주소)`;
    navigate(`/restaurant/list?${url}`);
  };

  return (
    <>
      <Flex>
        {data.map((item) => {
          return (
            <AreaBtn
              key={item.id}
              onClick={() => {
                select.includes(item.id)
                  ? setSelect(select.filter((arr) => arr !== item.id))
                  : setSelect((el) => [...el, item.id]);
              }}
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
    </>
  );
};

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  .isClicked {
    button {
      background-color: #404040;
    }

    img {
      border: 5px solid #63a1ff;
    }
  }
`;

const AreaBtn = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 10px 10px 0;
  width: fit-content;
  height: 85px;

  .AreaImg {
    padding: 0;
    width: 65px;
    height: 65px;
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

export default HotelLocation;
