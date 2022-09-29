import { useEffect, useState } from "react";
import Dep1 from "../Dep1/Dep1";
import CheckList from "./CheckList/CheckList";
import "./FilterBar.scss";
import PointList from "./PointList/PointList";
import SlideList from "./SlideList/SlideList";
import _ from "lodash";
import { useLocation, useNavigate } from "react-router-dom";

function FilterBar(props) {
  const { filterTypes } = props;

  // Filter types
  const [isCheckFilter0, setIsCheckFilter0] = useState(false);
  const [isCheckFilter1, setIsCheckFilter1] = useState(false);
  const [isCheckFilter2, setIsCheckFilter2] = useState(false);
  const [isCheckFilter3, setIsCheckFilter3] = useState(false);
  const [isCheckFilter4, setIsCheckFilter4] = useState(false);

  // Filter Bar disabled list: dep-2
  const filterDep2Disableds = [
    isCheckFilter0,
    isCheckFilter1,
    isCheckFilter2,
    isCheckFilter3,
    isCheckFilter4,
  ];

  // Filter Bar disabled 속성 할당: dep-2
  if (filterTypes) {
    for (let i = 0; i < filterTypes.length; i++) {
      filterTypes[i].disabled = filterDep2Disableds[i];
    }
  }

  // Filter Bar 선택/선택해제 함수: dep-2
  const filterSelect = (e) => {
    const tagId = e.target.id;

    if (tagId === "0") setIsCheckFilter0(!isCheckFilter0);
    if (tagId === "1") setIsCheckFilter1(!isCheckFilter1);
    if (tagId === "2") setIsCheckFilter2(!isCheckFilter2);
    if (tagId === "3") setIsCheckFilter3(!isCheckFilter3);
    if (tagId === "4") setIsCheckFilter4(!isCheckFilter4);
  };

  // Dep1 disabled
  const [isRefresh, setIsRefresh] = useState(false);

  // Dep1 disabled 값 가져오는 함수
  const getDep1Disabled = (bool) => {
    setIsRefresh(bool);
  };

  // 적용 버튼 disabled
  const [isDone, setIsDone] = useState(false);

  // query items 관리값
  const [queryItems, setQueryItems] = useState([]);

  // 체크리스트: 선택된 옵션들 가져오는 함수
  const getQueryList = (queryList) => {
    setIsDone(false);
    if (queryList.length !== 0) {
      let result = [];
      for (let i = 0; i < queryList.length; i++) {
        result += `&${queryList[i]}`;
      }
      queryItems.push(result);
      setQueryItems(queryItems);
    } else {
      queryItems.splice(0, queryItems.length);
      setQueryItems(queryItems);
    }
  };

  // 적용 버튼 관리 함수
  const submit = () => {
    window.scrollTo(0, 0);
    setIsDone(true);
  };

  // query items 관리값
  const [squeryItems, setSQueryItems] = useState([]);
  const [squery, setSQuery] = useState([]);

  // 슬라이드리스트: 범위 가져오는 함수
  const getSlideItem = (id, item) => {
    if (item.length !== 0) {
      const result = {
        id: id,
        item: item,
      };
      squeryItems.unshift(result);
      const filtered = _.uniqBy(squeryItems, "id");

      if (filtered.length === 2) {
        const bookedQuery = `bookedmin=${filtered[0].item[0]}&bookedmax=${filtered[0].item[1]}`;
        const priceQuery = `pricemin=${filtered[1].item[0]}&pricemax=${filtered[1].item[1]}`;
        let queryList = [];
        queryList.push(priceQuery);
        queryList.push(bookedQuery);
        const queryResult = queryList.slice(-2);
        const slideQuery = queryResult.join("&");
        setSQuery(slideQuery);
      }
    }
  };

  // 별점리스트: 관리 값
  const [pointQuery, setPointQuery] = useState("");

  // 별점리스트: 범위 가져오는 함수
  const getPointItem = (range) => {
    setIsDone(false);
    const query = `pointmin=${range[0]}&pointmax=${range[1]}`;
    setPointQuery(query);
  };

  // 필터 적용한 정보 불러오기
  useEffect(() => {
    if (isDone) {
      const checkQuery = makeQuery();

      if (location.pathname.split("/").includes("rentcar")) {
        let carTypeIndex = [];
        const conditon = decodeURIComponent(location.search).split("&");

        conditon.map((q, index) => {
          if (q.includes("carType")) carTypeIndex.push(index);
        });

        const endIndex = carTypeIndex[carTypeIndex.length - 1];
        if (squery.length !== 0 || checkQuery.split("&").length > endIndex) {
          let url = "";
          let plusUrl = "";

          if (checkQuery) plusUrl += checkQuery;
          if (squery.length !== 0) plusUrl += `&${squery}`;
          if (pointQuery) plusUrl += `&${pointQuery}`;

          url += "/rentcar/filteredList" + plusUrl;

          navigate(url);
          setIsDone(false);
        } else {
        }
      } else {
        if (squery.length !== 0 || checkQuery !== 0) {
          let url = "";
          let plusUrl = "";

          if (checkQuery) plusUrl += checkQuery;
          if (squery.length !== 0) plusUrl += `&${squery}`;
          if (pointQuery) plusUrl += `&${pointQuery}`;

          url += decodeURIComponent(location.pathname) + plusUrl;

          navigate(url);
          setIsDone(false);
        } else {
          const url = decodeURIComponent(location.pathname).replace(
            "/searchList?",
            ""
          );
          navigate(url);
        }
      }
      setQueryItems([]);
    }
  }, [isDone]);

  // query 작성 함수
  const makeQuery = () => {
    if (queryItems.length > 0) {
      const listResult = [];
      let queryResult = "";
      let filteredQuery = "";

      // 렌터카의 경우 기존 조건들 유지 / 숙박, 맛집의 경우 기존 조건들 리셋
      if (location.pathname.split("/").includes("rentcar")) {
        let carTypeIndex = [];
        const conditon = decodeURIComponent(location.search).split("&");

        conditon.map((q, index) => {
          if (q.includes("carType")) carTypeIndex.push(index);
        });

        const endIndex = carTypeIndex[carTypeIndex.length - 1];

        queryResult += decodeURIComponent(location.search)
          .split("&")
          .slice(0, endIndex + 1)
          .join("&");
      } else {
        queryResult += "?";
      }

      // 배열 생성 후
      queryItems.map((option) => {
        listResult.push(option);
      });

      // 문자열로 연결
      listResult.map((option) => {
        queryResult += option;
      });

      // 중복 제거
      filteredQuery = _.uniqBy(queryResult.split("&")).join("&");
      return filteredQuery;
    } else {
      // 아무 옵션도 없는 경우
      // 렌터카의 경우 기존 조건들 유지 / 숙박, 맛집의 경우 기존 조건들 리셋
      if (location.pathname.split("/").includes("rentcar")) {
        let carTypeIndex = [];
        const conditon = decodeURIComponent(location.search).split("&");

        conditon.map((q, index) => {
          if (q.includes("carType")) carTypeIndex.push(index);
        });

        const endIndex = carTypeIndex[carTypeIndex.length - 1];

        return decodeURIComponent(location.search)
          .split("&")
          .slice(0, endIndex + 1)
          .join("&");
      } else {
        return "?";
      }
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="sfb-wrap product-bar product-bar">
        <Dep1 title={"필터"} getValue={getDep1Disabled} />
        {
          <ul className="dep2">
            {filterTypes &&
              filterTypes.map((filterInfo) => {
                return (
                  <div key={filterInfo.id}>
                    <li
                      className="list"
                      key={filterInfo.id}
                      id={filterInfo.id}
                      onClick={filterSelect}
                    >
                      <span
                        className="dep2-type"
                        id={filterInfo.id}
                        onClick={filterSelect}
                      >
                        {filterInfo.type}
                      </span>
                      <div
                        className={
                          filterInfo.disabled
                            ? "right-icon-on"
                            : "right-icon-off"
                        }
                        id={filterInfo.id}
                        onClick={filterSelect}
                      ></div>
                    </li>
                    {filterInfo.disabled && filterInfo.checkList && (
                      <CheckList
                        filterTypes={filterTypes}
                        filterTypeId={filterInfo.id}
                        filterType={filterInfo.type}
                        checkList={filterInfo.checkList}
                        isRefresh={isRefresh}
                        getQueryList={getQueryList}
                        isDone={isDone}
                      />
                    )}
                    {filterInfo.disabled && filterInfo.slideList && (
                      <SlideList
                        filterTypeId={filterInfo.id}
                        filterType={filterInfo.type}
                        slideList={filterInfo.slideList}
                        isRefresh={isRefresh}
                        getSlideItem={getSlideItem}
                        isDone={isDone}
                      />
                    )}

                    {filterInfo.disabled && filterInfo.pointList && (
                      <PointList
                        filterTypeId={filterInfo.id}
                        filterType={filterInfo.type}
                        slideList={filterInfo.slideList}
                        isRefresh={isRefresh}
                        getPointItem={getPointItem}
                        isDone={isDone}
                      />
                    )}
                  </div>
                );
              })}
          </ul>
        }
      </div>
      <button className="filter-submit-btn  rentcar-sfb-wrap" onClick={submit}>
        적용
      </button>
    </>
  );
}

export default FilterBar;
