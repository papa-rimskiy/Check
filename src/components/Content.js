import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Loading from "./Loading";
import FilterPh from './FilterPh'

import Card from "./Card"

const ELEMENTS_PER_PAGE = 9;
const API_URL = "http://localhost:3000";

const serializeResponse = (response, page) => {
  if (page === 1) return response

  return response.map(el => ({
    ...el,
    id: el.id + ELEMENTS_PER_PAGE * page, // For uniq Id per page
    name: `${el.name} ${page}`,
  }))
}

function Content() {
  const [content, setContent] = useState([]);
  const [filter, setFilter] = useState("Show all");
  const [page, setPage] = useState(1);
  const [chosenItemId, setChosenItemId] = useState(null)

  const setResponse = response => {
    const result = serializeResponse(response, page)
    setContent([...content, ...result])
  }

  const chooseItem = element => {
    const newChosenItem = chosenItemId === element.id ? null : element.id
    setChosenItemId(newChosenItem)
  };

  const deleteItem = itemId => {
    const newContent = content.filter(el => el.id !== itemId)
    setContent(newContent);
  };

  const getFilteredContent = () => {
    if (filter === "Show all") return content
      
    return content.filter(el => el.category === filter);
  };

  useEffect(() => {
    fetch(API_URL + "/content.json")
      .then(response => response.json())
      .then(json => setResponse(json.content))
  }, [page]);

  if (content.length === 0) return <Loading />

  return (
    <div className="content">
      <Filter filter={filter} setFilter={setFilter} />
      <FilterPh setFilter={setFilter} />

      <div className="content__area">
        {getFilteredContent().map(el => (
          <Card
            key={el.id}
            item={el}
            chosenItemId={chosenItemId}
            onDeleteItem={deleteItem}
            onChooseItem={chooseItem}
          />
        ))}
      </div>

      <div className="content__add">
        <button className="content__add-btn" onClick={() => setPage(page + 1)}>
          Load more
        </button>
      </div>
    </div>
  );
}

export default Content;
