import { useState, React } from "react";

const App = () => {
  const [Text, setText] = useState("");
  const [FullName, setFullName] = useState("");

  const textEvent = (fieldValue) => {
    setText(fieldValue.target.value);
  };

  const onSubmit = () => {
    setFullName(Text);
  };

  return (
    <>
      <div className="container text-center pt-5">
        <h1>Hi, {FullName}</h1>
        <div className="pt-3 pb-3">
          <input
            type="text"
            placeholder="Enter your name"
            onChange={textEvent}
            value={Text}
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
