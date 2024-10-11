// import React, { useState } from 'react'

// const App = () => {
//   const [count,setCount]=useState(0);

//   const handleCountPlus=()=>{
//     setCount(count+1);
//   };

//   return (
//     <div>
//       {count}<br />
//       <button onClick={handleCountPlus}>
//         증가
//       </button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [count,setCount]=useState(0);

//   /* const handleCountPlus=()=>{
//     //함수형 스테이트
//     setCount((pre)=>{
//       return pre+1;
//     });
//   }; */

//   return (
//     <div>
//       {count}<br />
//       <button onClick={()=>{
//         //1
//         setCount(count+1); 
//         setCount(count+1); 
//         setCount(count+1); 
//         //3
//         /* setCount(prev=>prev+1);
//         setCount(prev=>prev+1);
//         setCount(prev=>prev+1); */
//       }}>
//         증가
//       </button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import Child from './components/Child';

const App = () => {
  const [count,setCount]=useState(0);

  return (
    <div>
      <h1>여기는 부모컴포넌트입니다.</h1>
			<span>현재 카운트 : {count}</span>
			<Child setCount={setCount}/> {/* count={count} */}
    </div>
  )
}

export default App