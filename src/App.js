import { useState, React } from "react";

const App = () => {
  //fullname
  const [FullnameValue, setFullnameValue] = useState("");
  const [FullNameView, setFullNameView] = useState("");

  //email
  const [EmailValue, setEmailValue] = useState("");
  const [EmailView, setEmailView] = useState("");

  //fullname fucn
  const fullnameFucn = (fullnameValue) => {
    setFullnameValue(fullnameValue.target.value);
  };

  //email fucn
  const emailFucn = (emailValue) => {
    setEmailValue(emailValue.target.value);
  };

  //button click fucn
  const onSubmit = () => {
    setFullNameView(FullnameValue);
    setEmailView(EmailValue);
  };

  return (
    <>
      <div className="container text-center" style={{ paddingTop: "20%" }}>
        <h1>Hi, {FullNameView}</h1>
        <h6>{EmailView}</h6>
        <div className="pt-3 pb-3">
          <input
            type="text"
            placeholder="Full name"
            onChange={fullnameFucn}
            value={FullnameValue}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={emailFucn}
            value={EmailValue}
          />
        </div>
        <button
          type="button"
          value=""
          className="btn btn-primary"
          onClick={onSubmit}
        >
          Click Me
        </button>
      </div>
    </>
  );
};

export default App;
