import React, { useState } from "react";
import Select from "react-select";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    selectOption: null,
    checkboxChecked: false,
    radioButtonSelected: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, selectOption: selectedOption });
  };

  const handleCheckboxChange = (event) => {
    setFormData({ ...formData, checkboxChecked: event.target.checked });
  };

  const handleRadioButtonChange = (event) => {
    setFormData({ ...formData, radioButtonSelected: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name =formData.name
    const mobile =formData.mobile
    const email =formData.email
    const password =formData.password
    const confirmPassword =formData.confirmPassword

    const role =formData.selectOption
    const gender =formData.radioButtonSelected
    const termsAndConditions =formData.checkboxChecked

    const isValidMobile = /^[0-9+-]+$/.test(mobile)
    const isValidEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(email);

    const specialCharRegex = /[@#$]/;
    const numberRegex = /[0-9]/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;

    const hasSpecialChar = specialCharRegex.test(password);
    const hasNumbers = (password.match(numberRegex) || []).length >= 4;
    const hasUppercase = (password.match(uppercaseRegex) || []).length >= 2;
    const hasLowercase = (password.match(lowercaseRegex) || []).length >= 2;

    if (name==="" || mobile==="" || email==="" || password==="" || confirmPassword ===""){
      alert('Fill the blanks')
    }
    if (role==null){
      alert('please select role')
    }
    if (gender===""){
      alert('please select gender')
    }
    if (!isValidMobile) {
      alert('Mobile is not valid');
    }
    if (!isValidEmail) {
      alert('Email is not valid');
    }
    if (password !== confirmPassword) {
      alert('Password and confirm password are not same');
      return;
    }
    if (!hasSpecialChar) {
      alert('Password must have a special character');
      return;
    }
    if (!hasNumbers) {
      alert('Password must have at least 4 numbers');
      return;
    }
    if (!hasUppercase) {
      alert('Password must have at least 2 uppercase letters');
      return;
    }
    if (!hasLowercase) {
      alert('Password must have at least 2 lowercase letters');
      return;
    }
    if (termsAndConditions===false){
      alert('please read and accept terms and conditions')
    }
    
  };

  return (
    <div>
      <div>
        <h1>Welcome To Registration Section</h1>
      </div>
      <div className="FormMainClass">
        <form onSubmit={handleSubmit} className="Form">
          <div className="FormClass">
            <div className="firstSection">
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Re-enter Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="firstSection">
              <div>
                <label>Mobile:</label>
                <input
                  type="text"
                  name="mobile"
                  pattern="[0-9+-]+"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div style={{display:"flex"}}>
                <label style={{paddingRight:"2rem"}}>Select Category:</label>
                <Select
                  value={formData.selectOption}
                  onChange={handleSelectChange}
                  options={[
                    { value: "teacher", label: "Teacher" },
                    { value: "student", label: "Student" },
                    { value: "staff", label: "Staff" },
                  ]}
                />
              </div>
              <div style={{display:"flex"}}>
                <label>Gender:</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="radioButtonSelected"
                      value="male"
                      checked={formData.radioButtonSelected === "male"}
                      onChange={handleRadioButtonChange}
                    />
                    Male
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="radioButtonSelected"
                      value="female"
                      checked={formData.radioButtonSelected === "female"}
                      onChange={handleRadioButtonChange}
                    />
                    Female
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="radioButtonSelected"
                      value="other"
                      checked={formData.radioButtonSelected === "other"}
                      onChange={handleRadioButtonChange}
                    />
                    Other
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="CheckBox">
              <input
                type="checkbox"
                name="checkboxChecked"
                checked={formData.checkboxChecked}
                onChange={handleCheckboxChange}
              />
              <p> I Read and agree the teams and conditions</p>
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
