import React, { useState } from "react";
import Modal from "./Modal";
import "./HomePage.css";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    conEmail: "",
    wantsSpam: false,
    tier: "",
  });

  const [errors, setErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const simulateRegistration = async () => {
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ success: true }), 1000)
      );
      if (response.success) {
        // 注册成功
        setRegistrationSuccess(true);
      } else {
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // 执行注册逻辑
      await simulateRegistration();
    } else {
      // 如果有错误，可以进行一些处理，例如滚动到第一个错误字段
      const firstErrorField = Object.keys(validationErrors)[0];
      const errorFieldElement = document.getElementById(
        `input-${firstErrorField}`
      );
      if (errorFieldElement) {
        errorFieldElement.focus();
      }
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (formData.email !== formData.conEmail) {
      errors.conEmail = "Emails do not match";
    }

    if (!formData.tier) {
      errors.tier = "Please select a tier";
    }

    return errors;
  };

  const closeModal = () => {
    setRegistrationSuccess(false);
  };

  return (
    <div className="home">
      <h1>Welcome, please register!</h1>
      <div id="main-content">
        <button className="register-button" onClick={() => setShowForm(true)}>
          Register Now
        </button>

        {registrationSuccess && (
          <Modal isOpen={true} onClose={closeModal}>
            <h2>Registration Successful!</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Wants Spam: {formData.wantsSpam ? "Yes" : "No"}</p>
            <p>Tier: {formData.tier}</p>
            <button onClick={closeModal}>Close</button>
          </Modal>
        )}

        {showForm && !registrationSuccess ? (
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="name box">
              <label htmlFor="input-name">
                Name<span>*</span>
              </label>
              <input
                type="text"
                name="name"
                id="input-name"
                className={`input-name ${errors.name ? "error-input" : ""}`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <div className="err-name error">{errors.name}</div>
              )}
            </div>

            <div className="email box">
              <label htmlFor="input-email">
                Email<span>*</span>
              </label>
              <input
                type="text"
                name="email"
                id="input-email"
                className={`input-email ${errors.email ? "error-input" : ""}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="err-email error">{errors.email}</div>
              )}
            </div>

            <div className="con-email box">
              <label htmlFor="input-con-email">
                Confirm Email<span>*</span>
              </label>
              <input
                type="text"
                name="conEmail"
                id="input-con-email"
                className={`input-con-email ${
                  errors.conEmail ? "error-input" : ""
                }`}
                value={formData.conEmail}
                onChange={handleChange}
              />
              {errors.conEmail && (
                <div className="err-con-email error">{errors.conEmail}</div>
              )}
            </div>

            <div className="spam box">
              <div className="spam-label">Do you want to receive spam?</div>
              <label htmlFor="spam" className="spam-option">
                I want
              </label>
              <input
                type="checkbox"
                name="wantsSpam"
                id="spam"
                checked={formData.wantsSpam}
                onChange={handleChange}
              />
              <label htmlFor="no-spam" className="spam-option">
                Probably no
              </label>
              <input
                type="checkbox"
                name="noSpam"
                id="no-spam"
                checked={!formData.wantsSpam}
                onChange={handleChange}
              />
            </div>

            <div className="tier box">
              <label htmlFor="tier">Your Tier</label>
              <select
                name="tier"
                id="tier"
                className={`tier-select ${errors.tier ? "error-input" : ""}`}
                value={formData.tier}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select a tier
                </option>
                <option value="Silver">Silver Tier</option>
                <option value="Gold">Gold Tier</option>
                <option value="Platinum">Platinum Tier</option>
              </select>
              {errors.tier && (
                <div className="err-tier error">{errors.tier}</div>
              )}
            </div>

            <button type="submit">Register</button>
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default HomePage;
