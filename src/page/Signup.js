import React, { useState } from "react";
import styled from "styled-components";

const initFormData = {
  option: "1", // default checked
  id: "",
  password: "",
  passwordCfm: "",
};

function Signup() {
  const [formData, setFormData] = useState(initFormData);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(e.target.name, ":", e.target.value);
  };

  const handleChangeRadio = (name) => {
    setFormData((prev) => ({ ...prev, [name.target.name]: name.target.value }));
  };

  return (
    <StyledSignup>
      <div className="checkbox_radio">
        <input
          onChange={handleChangeRadio}
          type="radio"
          name="option"
          value="1"
          checked={formData.option === "1"}
        />
        {/* checked or defaultChecked 둘중 하나만 사용 */}
        <label htmlFor="option"> option1 </label>
        <input
          type="radio"
          name="option"
          value="2"
          checked={formData.option === "2"}
          onChange={handleChangeRadio}
        />
        <label htmlFor="option"> option2 </label>
        <input
          type="radio"
          name="option"
          value="3"
          checked={formData.option === "3"}
          onChange={handleChangeRadio}
        />
        <label htmlFor="option"> option3 </label>
      </div>

      <form>
        {/* input type=file을 보내는 폼에 enctype="multipart/form-data" 속성을 넣어 줘야함 */}
        <label htmlFor="id">아이디</label>
        <input id="id" name="id" type="text" onChange={handleChange} />
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <label htmlFor="passwordCfm">비밀번호 확인</label>
        <input
          id="passwordCfm"
          name="passwordCfm"
          type="password"
          onChange={handleChange}
        />
      </form>
      {formData.id !== "" &&
      formData.password !== "" &&
      formData.passwordCfm !== "" ? (
        <>
          <button type="button">회원가입</button>
        </>
      ) : (
        <>
          <button type="button" disabled>
            회원가입
          </button>
        </>
      )}
    </StyledSignup>
  );
}

export default Signup;

const StyledSignup = styled.div`
  width: 300px;
  margin: 0 auto;
  .checkbox_radio {
    margin-bottom: 30px;
  }
  form {
    width: 100%;
    label {
      display: inline-block;
      width: 100px;
      font-size: 14px;
    }
    input {
      width: 160px;
      margin-bottom: 10px;
    }
  }
  button {
    float: right;
    margin-right: 32px;
  }
`;
