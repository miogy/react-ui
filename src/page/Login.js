import React, { useState } from "react";

const initFormData = {
  email: "",
  password: "",
};
function Login() {
  const [formData, setFormData] = useState(initFormData);
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleKeyDown = (e) => {
    // enter key submit
    if (e.keyCode === 13) {
      // login button
    }
    setErrors("");
  };

  return (
    <>
      <section
        className="login_box"
        style={{ width: "200px", height: "300px", margin: "0 auto" }}
      >
        <form>
          <label htmlFor="email"> Email</label>
          <input
            style={{ width: "100%" }}
            id="email"
            name="email"
            type="email"
            placeholder="please enter your emai l address"
            value={formData.email}
            maxLength="30"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            style={{ width: "100%" }}
            id="password"
            name="password"
            type="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          {errors && <p className="error">* {errors}</p>}
          {formData.email !== "" || formData.password !== "" ? (
            <>
              <button
                type="button"
                style={{ width: "208px", marginTop: "20px" }}
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="disabled"
                disabled
                style={{ width: "208px", marginTop: "20px" }}
              >
                Sign In
              </button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

export default Login;
