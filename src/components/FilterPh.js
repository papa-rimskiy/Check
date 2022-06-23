import React, {useState} from 'react'

function FilterMobile( {setFilter} ) {
  const [selectDropdownOpenCheck, setSelectDropdownOpenCheck] = useState (false)
  const [selectInput, setSelectInput] = useState ('Show all"')

  const selectDropdownOpen = () => {
    setSelectDropdownOpenCheck(!selectDropdownOpenCheck)
  }

  const onChange = (el) => {
    setSelectInput(el.value)
    setSelectDropdownOpenCheck(!selectDropdownOpenCheck)
    setFilter(el.value)
  }
  const variations = [
    { label: "Show all", value: "Show all" },
    { label: "Design", value: "Design" },
    { label: "Branding", value: "Branding" },
    { label: "Illustration", value: "Illustration" },
    { label: "Motion", value: "Motion" }
  ];

  return (
    <div className="select">
      <div className="select_filter">
        <div className="select__input" onClick={selectDropdownOpen}>
          {selectInput}
          <i className={(selectDropdownOpenCheck=== false) ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i>
        </div>
        <div className={(selectDropdownOpenCheck === false) ? "select__dropdown" : "select_open"}>
          {variations.map(el =>
          <ul className="select__list">
            <li className="select__item" value={el.value} key={el.label} onClick={() => onChange(el)} >{el.value}</li>
          </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default FilterMobile