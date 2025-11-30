import React, { useState, useRef } from "react";
import { BiSolidMessageRoundedCheck } from "react-icons/bi";
import "./styles.css";

const ContactUsForm = () => {
  const defaultErrorFields = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    context: "",
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    context: "I'd like to know the quotation for my project. Can we have a quick discussion?",
  });

  const successRef = useRef<HTMLDivElement | null>(null);
  const [errors, setErrors] = useState(defaultErrorFields);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors: any = {};

    // FIRST NAME (optional but must be >= 3 chars if present)
    if (formData.firstName && formData.firstName.trim().length < 3) {
      newErrors.firstName = "First name must be at least 3 characters";
    }

    // EMAIL (required + must be valid)
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      // email validation regex (covers work or personal email)
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    // PHONE NUMBER (required + 10 digits + cannot start with 12345)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const digitsOnly = formData.phone.replace(/\D/g, "");

      if (digitsOnly.length !== 10) {
        newErrors.phone = "Phone number must be exactly 10 digits";
      }
    }

    return newErrors;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    setIsSubmitted(true);
    setTimeout(() => {
      const el = successRef.current;
      if (el) {
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offset = 150; // adjust based on your header height

        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 100);
    if (Object.keys(validationErrors).length >= 0) return;
    

    try {
      await submitToHubSpot(formData);
      setStatusMessage("");
      setIsSubmitted(true);
      setTimeout(() => {
        const el = successRef.current;
        if (el) {
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          const offset = 150;

          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }, 100);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        budget: "",
        context: "I'd like to know the quotation for my project. Can we have a quick discussion?",
      });
      setErrors(defaultErrorFields);
    } catch (error) {
      setStatusMessage("Submission failed. Please try again.");
    }
  };

  if (isSubmitted)
    return (
    <div className="success-container" ref={successRef}>
      
      {/* Green Tick Icon */}
      <div className="tick-wrapper">
        <div className="tick-circle">
          <span className="tick"><BiSolidMessageRoundedCheck /></span>
        </div>
      </div>

      {/* Text */}
      <h1 className="success-title">Message Received!</h1>
      <p className="success-subtext">
        Your message has officially docked at ZETAPOD HQ.  
        We&apos;ll contact you soon with the next steps.
      </p>

      {/* Button */}
      <div className="button-wrapper">
        <button className="home-button" onClick={() => window.location.href = "/"}>
          Go to Home
        </button>
      </div>
    </div>
  );

  return (
    <form className="quote-form w-full max-w-[1000px]">
      <div className="row">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder=""
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder=""
          />
        </div>
      </div>

      <div className="form-group full">
        <label>
          Email <span className="required">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group full">
        <label>
          Phone Number <span className="required">*</span>
        </label>
        <div className="w-full">
          <select name="country-code" value="+91" disabled style={{ width: "15%", height: "42px", borderTopRightRadius: 0, borderBottomRightRadius: 0, textAlign: "center" }}>
            <option value="">+91</option>
          </select>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: "85%", borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          />
        </div>
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>

      <div className="form-group full">
        <label>Budget</label>
        <span style={{ fontSize: "10px", marginBottom: "5px", marginLeft: "10px" }}>The cost of implementing an idea ranges <b>from ₹5k to ₹50 lakhs</b>, which reflects <b>your project&apos;s scale</b>.</span>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        >
          <option value="">Your budget range</option>
          <option value="less than 10K">less than 10K</option>
          <option value="up to 30K">up to 30K</option>
          <option value="up to 60K">up to 60K</option>
          <option value="up to 1 lakh">up to 1 lakh</option>
          <option value="up to 5 lakhs">up to 5 lakhs</option>
          <option value="up to 10 lakhs">up to 10 lakhs</option>
          <option value="up to 50 lakhs">up to 50 lakhs</option>
          <option value="above 50 lakhs">above 50 lakhs</option>
        </select>
      </div>

      <div className="form-group full">
        <label>Context Description</label>
        <span style={{ fontSize: "10px", marginBottom: "5px", marginLeft: "10px" }}>A short description would be helpful in providing you expert assistance.</span>
        <textarea
          name="context"
          value={formData.context}
          onChange={handleChange}
          placeholder="Give us a short overview of your project and requirements."
        />
      </div>

      <button
        type="button"
        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[150px]"
        style={{ marginTop: "20px", backgroundColor: "#9158FF", fontWeight: "600" }}
        onClick={handleSubmit}
      >
        Submit
      </button>

      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </form>
  );
};

export default ContactUsForm;

/* ---------------- HubSpot API Function ---------------- */

async function submitToHubSpot(formData: any) {
  const HUBSPOT_PORTAL_ID = "244481224";
  const HUBSPOT_FORM_ID = "4da4a544-c390-4915-a2bf-c8dcf67d5507";

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

  const payload = {
    fields: [
      { name: "firstname", value: formData.firstName },
      { name: "lastname", value: formData.lastName },
      { name: "email", value: formData.email },
      { name: "phone", value: formData.phone },
      { name: "budget", value: formData.budget },
      { name: "message", value: formData.context },
    ],
  };
  console.log("Submitting to HubSpot with payload:", payload);
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("HubSpot submission failed");
  }

  return response.json();
}
