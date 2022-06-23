const Card = ({ item, chosenItemId, onDeleteItem, onChooseItem }) => {
    const iconClassName = item.id === chosenItemId
        ? "contents__area-icon contents__area-icon-special"
        : "contents__area-icon"

    return (
        <div
            className={iconClassName}
            onClick={() => onChooseItem(item)}
            style={{ backgroundImage: `url(${item.url})` }}
        >
            <div className="contents__area-icon-category">{item.category}</div>
            <h4 className="contents__area-icon-name">{item.name}</h4>
            {item.id === chosenItemId &&
              <div className={"contents__area-icon-delete"} onClick={() => onDeleteItem(item.id)}>
                ✖{" "}
              </div>}
        </div>
    )
};

export default Card