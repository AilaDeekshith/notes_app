import React from 'react'

const List = (props) => {
  return (
    <div className='contentTwo col-sm-3 mx-5 my-2' onClick={()=>{
      props.onChecked(props.id)
    }}>
        <h3>{props.item.title}</h3>
        <p>{props.item.content}</p>
    </div>
  )
}

export default List;
