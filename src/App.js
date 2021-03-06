import { useState, React } from "react";
var d = new Date();
var currYear = d.getFullYear();

const App = () => {
  //name load state
  const [fnameValue, setnameValue] = useState("");
  const [NameView, setNameView] = useState(""); //button click state

  //email load state
  const [EmailValue, setEmailValue] = useState("");
  const [EmailView, setEmailView] = useState(""); //button click state

  //mobile load state
  const [mobileValue, setmobileValue] = useState("");
  const [mobileView, setmobileView] = useState(""); //button click state

  //name show fucn
  const fnameFucn = (nameKeyValue) => {
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
    setNameView(fnameValue);
    setEmailView(EmailValue);
    setmobileView(mobileValue);
  };

  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="row mt-4">
          <div className="col-12">
            <h3 style={{ backgroundColor: "orange", padding: "6px 10px" }}>
              Under Development
            </h3>
          </div>
        </div>
      </div>
      <div className="container pt-4 d-flex justify-content-center">
        <div className="col-lg-8">
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
                    onChange={fnameFucn}
                    value={fnameValue}
                    required
                  />
                </div>
              </div>

              {/* <!-- Last name input --> */}
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="form6Example2"
                    // onChange={lnameFucn}
                    // value={lnameValue}
                    class="form-control"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="row mb-4">
              {/* <!-- Email input --> */}
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="form6Example5"
                    class="form-control"
                    onChange={emailFucn}
                    value={EmailValue}
                    required
                  />
                </div>
              </div>

              {/* <!-- Number input --> */}
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example6">
                    Phone
                  </label>
                  <input
                    type="phone"
                    id="form6Example6"
                    class="form-control"
                    onChange={mobileFucn}
                    value={mobileValue}
                    required
                  />
                </div>
              </div>
            </div>

            {/* <!-- Company name input --> */}
            <div class="form-outline mb-4">
              <label class="form-label" for="form6Example3">
                Organisation / Institute name
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
              Copyright &copy; {currYear} Sanajit Jana. All Rights Reserved.
            </h6>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
