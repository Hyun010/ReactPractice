import React,{useState} from 'react'

const App = () => {
  const [number, setNumber]=useState(0);

  const onMinusButtonClick=()=>{
    setNumber(number-1);
  }
  const onPlusButtonClick=()=>{
    setNumber(number+1);
  }

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"cneter",alignItems:"center",}}>
      <div>{number}</div>
      <div>
        <button onClick={onMinusButtonClick}>-1</button>
        <button onClick={onPlusButtonClick}>+1</button>
      </div>
    </div>
  )
}

export default App