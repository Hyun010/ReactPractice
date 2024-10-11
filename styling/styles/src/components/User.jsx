import React from 'react'
import Button from './Button';

function User({user, removeUserHandler}) {
    const squareStyle = {
        width: "120px",
        border: "1px solid green",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100px",
    };
    const{age,name, id}=user;
    return (
        <div style={squareStyle}>
            <div>
                {age}살 - {name}
            </div>
            <div>
                <Button color="red" onClick={()=>removeUserHandler(id)}>삭제</Button>
            </div> 
        </div>
    );
}

export default User