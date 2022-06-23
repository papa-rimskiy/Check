import React, {useState, useEffect} from 'react'

function Filter(props) {
  const [filterVariation, setFilterVariation] = useState('Show all')

  const variations = [
    { label: "Show all", value: "Show all"},
    { label: "Design", value: "Design" },
    { label: "Branding", value: "Branding" },
    { label: "Illustration", value: "Illustration" },
    { label: "Motion", value: "Motion" },
  ]


  const selectValue = (el) => {
    setFilterVariation(el)
    props.filterValue(el)
  }

  return (
    <div className='filter'>
      <ul className='filter__list'>
        {variations.map(el => 
         <li className={(filterVariation != el.value) ? 'filter__list-item' : 'filter__list-item-special' } onClick={() => selectValue(el.value)}>{el.value}</li> 
        )}               
      </ul>
    </div>
  )
}

export default Filter