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

  const handleChangeRadio = (name) => {
    setFormData((prev) => ({ ...prev, [name.target.name]: name.target.value }));
  };
  return (
    <>
      <div className="checkbox_radio">
        <input
          onChange={handleChangeRadio}
          type="radio"
          name="option"
          value="1"
          checked={formData.startup === "1"}
        />
        <label htmlFor="option"> option 1 </label>
        <input
          type="radio"
          name="option"
          value="2"
          checked={formData.startup === "2"}
          onChange={handleChangeRadio}
          defaultChecked
        />
        <label htmlFor="option"> option 2 </label>
        <input
          type="radio"
          name="option"
          value="3"
          checked={formData.startup === "3"}
          onChange={handleChangeRadio}
        />
        <label htmlFor="option"> option 3 </label>
      </div>

      <form>
        {/* input type=file을 보내는 폼에 enctype="multipart/form-data" 속성을 넣어 줘야함 */}
        <label htmlFor="id">아이디</label>
        <input id="id" type="text" onChange={handleChange} />
        <label htmlFor="password">비밀번호</label>
        <input id="password" type="password" onChange={handleChange} />
        <label htmlFor="passwordCfm">비밀번호 확인</label>
        <input id="passwordCfm" type="password" onChange={handleChange} />
      </form>
    </>
  );
}

export default Signup;
