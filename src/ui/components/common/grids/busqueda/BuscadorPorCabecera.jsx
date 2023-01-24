import React from 'react'

const BuscadorPorCabecera = ({column}) => {

  const { filterValue, setFilter} = column

  return (
    <div className="col-auto">
      <input class="form-control form-control-sm" value={filterValue || ''} onChange={ (e)=> setFilter(e.target.value)} />
      </div>
    
  )
}

export default BuscadorPorCabecera