import React, { useState } from "react";

const initFormData = {
  id: "",
  password: "",
  passwordCfm: "",
};

function Signup() {
  const [formData, setFormData] = useState(initFormData);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <form>
        <label>아이디</label>
        <input type="text" onChange={handleChange} />
        <label>비밀번호</label>
        <input type="password" onChange={handleChange} />
        <label>비밀번호 확인</label>
        <input type="password" onChange={handleChange} />
      </form>
    </>
  );
}

export default Signup;
