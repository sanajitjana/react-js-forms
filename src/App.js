import { useState, React } from "react";

const App = () => {
  //name load state
  const [nameValue, setnameValue] = useState("");
  const [NameView, setNameView] = useState("");

  //email load state
  const [EmailValue, setEmailValue] = useState("");
  const [EmailView, setEmailView] = useState("");

  //name event fucn
  const nameFucn = (nameValue) => {
    setnameValue(nameValue.target.value);
  };

  //email event fucn
  const emailFucn = (emailValue) => {
    setEmailValue(emailValue.target.value);
  };

  //button click fucn
  const onSubmit = () => {
    setNameView(nameValue);
    setEmailView(EmailValue);
  };

  return (
    <>
      <div className="container text-center" style={{ paddingTop: "20%" }}>
        <h1>Hi, {NameView}</h1>
        <h6>{EmailView}</h6>
        <div className="pt-3 pb-3">
          <input
            type="text"
            placeholder="Enter name"
            onChange={nameFucn}
            value={nameValue}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Enter email"
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
