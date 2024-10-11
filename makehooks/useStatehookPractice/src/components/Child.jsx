import React from 'react'

function Child({setCount}) { //count, setCount
  return (
    <div>
        <h3>자식컴포</h3>
        {/* <button onClick={()=>{
            setCount(count+1);
        }}>
            증가
        </button> */}
        <button onClick={()=>{
            setCount((prev)=>prev+1);
        }}>
            증가
        </button>
    </div>
  )
}

export default Child