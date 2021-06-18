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
  const onSubmit = () => {
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

        <div class="row mb-4">
          {/* <!-- First name input --> */}
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="form6Example1"
                class="form-control"
                onChange={nameFucn}
                value={nameValue}
              />
              <label class="form-label" for="form6Example1">
                First name
              </label>
            </div>
          </div>

          {/* <!-- Last name input --> */}
          <div class="col">
            <div class="form-outline">
              <input type="text" id="form6Example2" class="form-control" />
              <label class="form-label" for="form6Example2">
                Last name
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Company name input --> */}
        <div class="form-outline mb-4">
          <input type="text" id="form6Example3" class="form-control" />
          <label class="form-label" for="form6Example3">
            Company name
          </label>
        </div>

        {/* <!-- Address input --> */}
        <div class="form-outline mb-4">
          <input type="text" id="form6Example4" class="form-control" />
          <label class="form-label" for="form6Example4">
            Address
          </label>
        </div>

        {/* <!-- Email input --> */}
        <div class="form-outline mb-4">
          <input
            type="email"
            id="form6Example5"
            class="form-control"
            onChange={emailFucn}
            value={EmailValue}
          />
          <label class="form-label" for="form6Example5">
            Email
          </label>
        </div>

        {/* <!-- Number input --> */}
        <div class="form-outline mb-4">
          <input
            type="number"
            id="form6Example6"
            class="form-control"
            onChange={mobileFucn}
            value={mobileValue}
          />
          <label class="form-label" for="form6Example6">
            Phone
          </label>
        </div>

        {/* <!-- Message input --> */}
        <div class="form-outline mb-4">
          <textarea class="form-control" id="form6Example7" rows="4"></textarea>
          <label class="form-label" for="form6Example7">
            Additional information
          </label>
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
        <button
          type="submit"
          class="btn btn-primary btn-block mb-4"
          onClick={onSubmit}
        >
          Save Information
        </button>
        <h6 className="text-center pb-5">
          Copyright &copy; 2021 Sanajit Jana. All Rights Reserved.
        </h6>
      </div>
    </>
  );
};

export default App;
