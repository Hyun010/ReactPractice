// import React from "react";

// const App = () => {
//   const style = {
//     padding: "100px",
//     display: "flex",
//     gap: "12px",
//   };

//   const squareStyle = {
//     width: "100px",
//     height: "100px",
//     border: "1px solid green",
//     borderRadius: "10px",
// 		display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   const vegitables=["감자","고구마","오이","가지","옥수수"];

//   return (
//     <div style={style}>
//       {/* <div style={squareStyle}>감자</div>
//       <div style={squareStyle}>고구마</div>
//       <div style={squareStyle}>오이</div>
//       <div style={squareStyle}>가지</div>
//       <div style={squareStyle}>옥수수</div> */}
//       {
//         vegitables.map(function(vege){
//           return (
//             <div key={vege} style={squareStyle}>
//               {vege}
//             </div>
//           );
//         })
//       }
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import './App.css'; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.

// //  User 컴포넌트를 분리해서 구현
// function User({user}) {
//   const squareStyle = {
//     width: "120px",
//     height: "100px",
//     border: "1px solid green",
//     borderRadius: "10px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };
//   const{age,name}=user;
//   return (
//     <div style={squareStyle}>{age}살 - {name}</div>
//   );
// }

// const App = () => {
//   const style = {
//     padding: "100px",
//     display: "flex",
//     gap: "12px",
//   };

//   const users = [
//     { id: 1, age: 30, name: '송중기' },
//     { id: 2, age: 24, name: '송강' },
//     { id: 3, age: 21, name: '김유정' },
//     { id: 4, age: 29, name: '구교환' },
//   ];
//   return (
//     <div style={style}>
//       {users.map((user) => {
//         return <User user={user} key={user.id} />;
//       })}
//     </div>
//   );
// };

// export default App;

import React,{ useState } from 'react';
import './App.css'; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import Button from './components/Button';
import User from './components/User';


const App = () => {
  const style = {
    padding: "100px",
    display: "flex",
    gap: "12px",
  };

  const [users, setUsers] = useState([
    { id: new Date().getTime(), age: 30, name: '송중기' },
    { id: new Date().getTime()+1, age: 24, name: '송강' },
    { id: new Date().getTime()+2, age: 21, name: '김유정' },
    { id: new Date().getTime()+3, age: 29, name: '구교환' },
  ]);

  const addUserHandler=()=>{
    const newUser={
      id: new Date().getTime(),
      age: Number(age),
      name,
    };
    setUsers([...users, newUser]);
  };

  const removeUserHandler=(id)=>{
    const delUser=users.filter(function(user) {
      return user.id!=id;
    });
    setUsers(delUser);
  };

  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  return (
    <>
      <input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}} />
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <Button onClick={addUserHandler} color="green">
        추가
      </Button>
      <div style={style}>
        {/* 이 로직을 추천 */}
        {/* {users.filter(function(u){
          return u.age<25;
        }).map((user) => {
          return <User user={user} key={user.id} removeUserHandler={removeUserHandler}/>;
        })} */}
        {users.map((user) => {
          if(user.age>=25){
            return null;
          }
          return <User user={user} key={user.id} removeUserHandler={removeUserHandler}/>;
        })}
      </div>
    </>
  );
};

export default App;