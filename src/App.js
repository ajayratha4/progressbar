import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App2() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "500px" }}>
        <ProgressBar />
      </div>
    </div>
  );
}

export default App2;
