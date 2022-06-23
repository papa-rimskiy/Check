import React, { useState, useEffect } from "react";
import Filter from "./Filter";

function Content() {
  const [content, setContent] = useState([]);
  const [filterVariation, setFilterVariation] = useState("Show all");
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    fetch("http://localhost:3000/content.json")
      .then((responce) => responce.json())
      .then((json) => setContent(json.content));
  }, []);

  const addAmount = () => {
    setAmount(amount + 1);
  };

  const filterValue = (variation) => {
    setFilterVariation(variation);
  };

  const choiseIcon = (element) => {
    element.choise = !element.choise;
    const icon = [...content];
    const a = icon.find((el) => el.id === element.id).id;
    icon[a] = element;
    setContent(icon);
  };

  const deleteIcon = (element) => {
    const icon = [...content];
    icon.splice(element, 1);
    setContent(icon);
  };

  console.log(content);

  const filteredContent = (result) => {
    if (filterVariation === "Show all") {
      return result;
    } else {
      return result.filter((el) => el.category === filterVariation);
    }
  };

  const amountContent = (result) => {
    let a = [];
    for (let i = 0; i < amount * 9; i++) {
      a.push(result[i]);
    }
    return a;
  };

  const checkValue = () => {
    let result = [...content];
    result = amountContent(result);
    result = filteredContent(result);
    return result;
  };

  const finalContent = checkValue();

  if (content.length === 0) {
    return (
      <div className="content">
        <div className="body-circle">
          <div className="circle"> </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content">
      <Filter filterValue={filterValue} />
      <div className="content__area">
        {finalContent.map((el) => (
          <div
            className={
              el.choise === false
                ? "contents__area-icon"
                : "contents__area-icon-special"
            }
            onClick={() => choiseIcon(el)}
            style={{ backgroundImage: `url(${el.url})` }}
          >
            <div className="contents__area-icon-category">{el.category}</div>
            <h4 className="contents__area-icon-name">{el.name}</h4>
            <div
              className={
                el.choise === false
                  ? "contents__area-icon-delete"
                  : "contents__area-icon-delete-special"
              }
              onClick={() => deleteIcon(el.id)}
            >
              ✖{" "}
            </div>
          </div>
        ))}
      </div>
      <div className="content__add">
        <button className="content__add-btn" onClick={() => addAmount()}>
          load more
        </button>
      </div>
    </div>
  );
}

export default Content;
