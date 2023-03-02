import React, { useState } from "react";

const initRoomList = [
  { id: 0, name: "room1", password: "123" },
  { id: 1, name: "room2", password: "456" },
  { id: 2, name: "room3", password: "789" },
];
function DataList() {
  const [roomList, setRoomList] = useState(initRoomList);
  const [password, setPassword] = useState(initRoomList.map(() => ""));

  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        {/* getlist.map => password 개별 상태관리 */}
        <div>
          {/* 룸 배열 렌더링 */}
          {roomList.map((room, i) => {
            return (
              <div
                key={`room-${i}`}
                style={{ border: "1px solid #ddd", padding: 20 }}
              >
                <h3>{room.name}</h3>
                <label htmlFor={`room${i}-pw`}>password</label>
                <input
                  type="password"
                  id={`room${i}-pw`}
                  value={password[i]}
                  onChange={(ev) => {
                    const value = ev.target.value; // 각 룸의 패스워드 인풋 값
                    setPassword((prevState) =>
                      prevState.map((pw, index) => {
                        return index === i ? value : pw;
                      })
                    );
                  }}
                />
                <div>{password[i]}</div>
                <button
                  onClick={(ev) => {
                    ev.preventDefault();
                    if (room.password === password[i]) {
                      alert("비밀번호 확인 !");
                    } else {
                      alert("비밀번호 틀림 !");
                    }
                  }}
                >
                  join
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DataList;
