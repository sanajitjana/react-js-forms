import { useState, React } from "react";

const App = () => {
  //name load state
  const [nameValue, setnameValue] = useState("");
  const [NameView, setNameView] = useState(""); //button click state

  //email load state
  const [EmailValue, setEmailValue] = useState("");
  const [EmailView, setEmailView] = useState(""); //button click state

  //mobile load state
  const [mobileValue, setmobileValue] = useState("");
  const [mobileView, setmobileView] = useState(""); //button click state

  //name show fucn
  const nameFucn = (nameKeyValue) => {
    setnameValue(nameKeyValue.target.value);
  };

  //email show fucn
  const emailFucn = (emailKeyValue) => {
    setEmailValue(emailKeyValue.target.value);
  };

  //mobile show fucn
  const mobileFucn = (mobileKeyValue) => {
    setmobileValue(mobileKeyValue.target.value);
  };

  //button click fucn
  const onSubmit = (e) => {
    e.preventDefault();
    setNameView(nameValue);
    setEmailView(EmailValue);
    setmobileView(mobileValue);
  };

  return (
    <>
      <div className="container pt-5">
        <h1 className="pb-4">Hi, {NameView}</h1>
        <h5>{EmailView}</h5>
        <h6>{mobileView}</h6>

        <form onSubmit={onSubmit}>
          {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
          <div class="row mb-4">
            {/* <!-- First name input --> */}
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form6Example1">
                  First name
                </label>
                <input
                  type="text"
                  id="form6Example1"
                  class="form-control"
                  onChange={nameFucn}
                  value={nameValue}
                />
              </div>
            </div>

            {/* <!-- Last name input --> */}
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form6Example2">
                  Last name
                </label>
                <input type="text" id="form6Example2" class="form-control" />
              </div>
            </div>
          </div>

          {/* <!-- Company name input --> */}
          <div class="form-outline mb-4">
            <label class="form-label" for="form6Example3">
              Company name
            </label>
            <input type="text" id="form6Example3" class="form-control" />
          </div>

          {/* <!-- Address input --> */}
          <div class="form-outline mb-4">
            <label class="form-label" for="form6Example4">
              Address
            </label>
            <input type="text" id="form6Example4" class="form-control" />
          </div>

          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <label class="form-label" for="form6Example5">
              Email
            </label>
            <input
              type="email"
              id="form6Example5"
              class="form-control"
              onChange={emailFucn}
              value={EmailValue}
            />
          </div>

          {/* <!-- Number input --> */}
          <div class="form-outline mb-4">
            <label class="form-label" for="form6Example6">
              Phone
            </label>
            <input
              type="text"
              id="form6Example6"
              class="form-control"
              onChange={mobileFucn}
              value={mobileValue}
            />
          </div>

          {/* <!-- Message input --> */}
          <div class="form-outline mb-4">
            <label class="form-label" for="form6Example7">
              Additional information
            </label>
            <textarea
              class="form-control"
              id="form6Example7"
              rows="4"
            ></textarea>
          </div>

          {/* <!-- Checkbox --> */}
          <div class="form-check mb-4">
            <input
              class="form-check-input me-2"
              type="checkbox"
              id="form6Example8"
              checked
            />
            <label class="form-check-label" for="form6Example8">
              Accept term &amp; conditions.
            </label>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" class="btn btn-primary btn-block mb-4">
            Save Information
          </button>
          <h6 className="text-center pb-5">
            Copyright &copy; 2021 Sanajit Jana. All Rights Reserved.
          </h6>
        </form>
      </div>
    </>
  );
};

export default App;
