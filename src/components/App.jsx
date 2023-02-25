import React, { useState } from "react";

function App() {
  // const [headingText,setHeadingText]=useState("clicked");
  const [headingColor, setHeadingColor] = useState(false);

  function ChangeBtnColor() {
    setHeadingColor(true);
  }
  function ChangeBtnColorOut() {
    setHeadingColor(false);
  }
  const [name, setname] = useState("");

  function handleChange(event) {
    setname(event.target.value);
  }
  // function HeadingClicked(){
  //   setHeadingText("submitted");
  const [fname, fsetname] = useState("");
  function fhandleClick(event) {
    fsetname(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>hello {fname}</h1>
      <h1>hello {name}</h1>
      <form onSubmit={fhandleClick}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button type="submit"
        style={{ backgroundColor: headingColor ? "black" : "white" }}
        onMouseOver={ChangeBtnColor}
        onMouseOut={ChangeBtnColorOut}
        
      >
        Submit
      </button>
      </form>
    </div>
  );
}

export default App;
