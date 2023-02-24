import React from "react";

function Signup() {
  return (
    <>
      <form>
        <label>아이디</label>
        <input type="text" />
        <label>비밀번호</label>
        <input type="password" />
        <label>비밀번호 확인</label>
        <input type="password" />
      </form>
    </>
  );
}

export default Signup;
