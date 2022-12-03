// import logo from "./logo.svg";
import { useRef, useState } from "react";
import "./App.css";
// import App from "test-aj";

function App2() {
  const [check, setCheck] = useState(false);
  const first = useRef(0);

  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      className="App"
      onMouseUpCapture={(evt) => {
        setCheck(false);
        window.onmousemove = function () {};
      }}
      onMouseMove={(evt) => {
        if (check) {
          var boun = document.getElementById("aa").offsetWidth;

          if (boun > evt.clientX && evt.clientX > 0) {
            console.log(evt.clientX, boun);
            first.current.style.width = evt.clientX + "px";
          }
        }
      }}
    >
      <div
        onClick={(e) => {
          first.current.style.width = e.screenX + "px";
        }}
        onMouseOver={(e) => {
          e.style.height = "10px";
        }}
        id={"aa"}
        style={{
          width: "800px",
          height: "5px",
          backgroundColor: "#c4b9a7",
          margin: "10px",
        }}
      >
        <div
          ref={first}
          onMouseDown={(ev) => {
            setCheck(true);
          }}
          onMouseUp={(ev) => {
            setCheck(false);
          }}
          style={{
            position: "absolute",
            top: 10,
            width: "50px",
            height: "5px",
            backgroundColor: "#ff0000",
            cursor: "pointer",
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: 10,
            width: "300px",
            height: "5px",
            backgroundColor: "#535356",
            cursor: "pointer",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App2;
