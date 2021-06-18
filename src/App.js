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
      <div className="container text-center" style={{ paddingTop: "15%" }}>
        <h1>Hi, {NameView}</h1>
        <h5>{EmailView}</h5>
        <h6>{mobileView}</h6>
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
          <br />
          <br />
          <input
            type="number"
            placeholder="Enter mobile"
            onChange={mobileFucn}
            value={mobileValue}
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
