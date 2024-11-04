import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "India",
    street: "",
    state: "",
    zip: "",
    city: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: ""
  });

  function changeH(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing form data");
    console.log(formData);
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          onChange={changeH}
          name="firstname"
          id="fname"
          value={formData.firstname}
          className="input-field"
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          placeholder="Enter your last name"
          onChange={changeH}
          name="lastname"
          id="lname"
          value={formData.lastname}
          className="input-field"
        />

        <label htmlFor="eadd">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email address"
          onChange={changeH}
          name="email"
          id="eadd"
          value={formData.email}
          className="input-field"
        />

        <label htmlFor="country">Country</label>
        <select
          id="country"
          name="country"
          onChange={changeH}
          value={formData.country}
          className="input-field"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>UK</option>
          <option>Australia</option>
        </select>

        <label htmlFor="street">Street Address</label>
        <input
          type="text"
          placeholder="Street Address"
          onChange={changeH}
          name="street"
          id="street"
          value={formData.street}
          className="input-field"
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          placeholder="City"
          onChange={changeH}
          name="city"
          id="city"
          value={formData.city}
          className="input-field"
        />

        <label htmlFor="state">State/Province</label>
        <input
          type="text"
          placeholder="State"
          onChange={changeH}
          name="state"
          id="state"
          value={formData.state}
          className="input-field"
        />

        <label htmlFor="zip">ZIP / Postal Code</label>
        <input
          type="text"
          placeholder="122001"
          onChange={changeH}
          name="zip"
          id="zip"
          value={formData.zip}
          className="input-field"
        />

        <fieldset className="checkbox-group">
          <legend>By Email</legend>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={changeH}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>

          <div className="checkbox-item">
            <input
              type="checkbox"
              id="candidates"
              name="candidates"
              checked={formData.candidates}
              onChange={changeH}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="checkbox-item">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={formData.offers}
              onChange={changeH}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rjects an offer.</p>
            </div>
          </div>
        </fieldset>

        <fieldset className="checkbox-group">
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          
          <div className="radio-item">
            <input
              type="radio"
              id="push-everything"
              name="pushNotifications"
              value="Everything"
              checked={formData.pushnotifications === "Everything"}
              onChange={changeH}
            />
            <label htmlFor="push-everything">Everything</label>
          </div>

          <div className="radio-item">
            <input
              type="radio"
              id="push-email"
              name="pushNotifications"
              value="Same as Email"
              checked={formData.pushnotifications === "Same as Email"}
              onChange={changeH}
            />
            <label htmlFor="push-email">Same as Email</label>
          </div>

          <div className="radio-item">
            <input
              type="radio"
              id="push-no"
              name="pushNotifications"
              value="No push"
              checked={formData.pushnotifications === "No push"}
              onChange={changeH}
            />
            <label htmlFor="push-no">No Push Notifications</label>
          </div>
        </fieldset>

        <button className="save-button">Save</button>
      </form>
    </div>
  );
}

export default App;
