// import React from 'react'
// import styled from "styled-components";

// const StBox = styled.div`
// 	// 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
//   width: 100px;
//   height: 100px;
//   border: 1px solid ${(props)=>props.borderColor};
//   margin: 20px;
// `;

// const boxList = ["red", "green", "blue"];

// const getBoxName = (color) => {
//   switch (color) {
//     case "red":
//       return "빨간 박스";
//     case "green":
//       return "초록 박스";
//     case "blue":
//       return "파란 박스";
//     default:
//       return "검정 박스";
//   }
// };

// const App = () => {
//   return (
//     <>
//       {boxList.map((box) => (
//         <StBox key={box} borderColor={box}>{getBoxName(box)}</StBox>
//       ))}
//     </>
//   )
// }

// export default App

import React from 'react';
import TestPage from "./components/TestPage";
import GlobalStyle from './GlobalStyle'; // GlobalStyle.js 파일 import

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TestPage title="제목" contents="내용" />
    </>
  )
}

export default App