// import React from 'react';
// function App() {
  
// 	// <---- 자바스크립트 영역 ---->
//   function handleClick(){
//     alert('클릭');
//   }

//   return (
//   /* <---- HTML/JSX 영역  ---->*/
//     <div
//       style={{
//         height: '100vh',
//         display: ' flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//     <h1>이것은 내가 만든 App컴포넌트 입니다</h1>
//     <button onClick={handleClick}>클릭!</button>
//     </div>
//   );
// }

// import React from 'react'

// function App() {
//   const NUMBER=100;
//   const arr=[1,2,3];
//   return (
//     <div id="abc" className='abc'>
//       <input type="text" />
//       <div style={{color:"orange", fontSize:"20px",}}>{NUMBER}</div>
//       <div>{arr.map(function(x){return `${x*x} `})}</div>
//     </div>
//   )
// }

// export default App


// src/App.jsx

// import React from "react";

// function App() {
//   return <GrandFather />;
// }

// function GrandFather() {
//   return <Mother />;
// }

// function Mother() {
// 	const name = '홍부인';
//   return <Child motherName={name} />;
// }

// function Child(props){
// 	console.log(props) // 이게 바로 props다.
// 	return <div>연결 성공</div>
// }


// export default App;


// import React from "react";

// function User(props) {
//   return <div>{props.children}</div>;
// }

// function App() {
//   return <User>안녕하세요</User>;
// }
// export default App;

// src/About.jsx

// import React from "react";

// function App() {
//   return ( 
//     <Layout> 
//       <div>여긴 App의 컨텐츠가 들어갑니다.</div>
//     </Layout>
//   );
// } 
// export default App;

// function Layout(props){
//   const children=props.children;
//   return(
//     <main>
//       <header>헤더</header>
//       {children}
//       <footer>푸터</footer>
//     </main>
//   )
// }

// import React from 'react'

// const App = () => {
//   const title="제출";
//   return (
//     <div>
//       <h1>추출테스트</h1>
//       <Todo title={title}/>
//     </div>
//   )
// }

// export default App

// const Todo=({title="미제출"})=>{
//   //const { title }=props;
//   return (
//   <div>
//     <h2>{title}</h2>
//     투두
//   </div>
//   );
// };

// // src/App.js

// import React, { useState } from "react";

// function Child(props) {
//   return (
//     <div>
//       <button
//         onClick={() => {
// 					props.setName("박할아"); // 드디어 받은 setName을 실행합니다.
//         }}
//       >
//         할아버지 이름 바꾸기
//       </button>
//       <div>{props.grandFatherName}</div>
//     </div>
//   );
// }

// function Mother(props) {
//   return (
//     <Child grandFatherName={props.grandFatherName} setName={props.setName} /> // 받아서 다시 주고
//   );
// }

// function GrandFather() {
//   const [name, setName] = useState("김할아");
//   return <Mother grandFatherName={name} setName={setName} />; // 주고
// }

// function App() {
//   return <GrandFather />;
// }

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [inputValue, setInputValue] = useState("");

//   const onChangeHandler = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" onChange={onChangeHandler} />
//       <p>입력값: {inputValue}</p> {/* 입력값을 화면에 표시 */}
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [dogs, setDogs] = useState(["말티즈"]);

//   function onClickHandler() {
// 		// spread operator(전개 연산자)를 이용해서 dogs를 복사합니다. 
// 	  // 그리고 나서 항목을 추가합니다.
//     setDogs([...dogs, "시고르자브르종"]);
//   }

//   console.log(dogs);
//   return (
//     <div>
//       <button onClick={onClickHandler}>버튼</button>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// function GoodCounter() {
//   const [items, setItems] = useState([1, 2, 3]);

//   const addItem = () => {
//     /* items.push(items.length + 1); // 배열에 직접 push, 불변성 위반
//     setItems(items); // 상태 업데이트 */
//     // 새 배열을 생성하고 기존 항목을 복사한 후 새 항목 추가
//     setItems([...items, items.length + 1]); // 불변성 유지
//   };

//   return (
//     <div>
//       <button onClick={addItem}>Add Item</button>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

