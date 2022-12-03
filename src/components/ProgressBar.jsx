import { useRef, useState } from "react";

const ProgressBar = () => {
  const parentBar = useRef(0);
  const progressBar = useRef(null);
  const bufferBar = useRef(null);
  const isDraggingProgress = useRef(0);
  const [, setFirst] = useState("second");

  const handleWindowMouseMove = (event) => {
    if (isDraggingProgress.current) {
      const parentWidth = parentBar.current.clientWidth;
      const eventWidth =
        event.clientX - progressBar.current.getBoundingClientRect().left;
      if (parentWidth > eventWidth && eventWidth > 0) {
        progressBar.current.style.width = eventWidth + "px";
      }
    }
  };

  const handleProgressBarOnClick = (event) => {
    if (parentBar.current.clientWidth >= event.nativeEvent.offsetX) {
      progressBar.current.style.width = event.nativeEvent.offsetX + "px";
    }
  };

  const handleWindowMouseUp = () => {
    setFirst(false);
    isDraggingProgress.current = false;
    window.onmousemove = function () {};
  };

  const startProgressBar = (event) => {
    setFirst(true);
    isDraggingProgress.current = true;
    if (event.nativeEvent instanceof MouseEvent) {
      window.addEventListener("mousemove", handleWindowMouseMove);
      window.addEventListener("mouseup", handleWindowMouseUp);
    }
  };

  return (
    <div>
      <div
        ref={parentBar}
        onClick={handleProgressBarOnClick}
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: "#c4b9a7",
          cursor: "pointer",
        }}
      >
        <div
          ref={progressBar}
          onMouseDown={startProgressBar}
          style={{
            position: "absolute",
            width: "50px",
            height: "5px",
            backgroundColor: "#ff0000",
            cursor: "pointer",
            zIndex: 1,
          }}
        ></div>

        <div
          ref={bufferBar}
          style={{
            position: "absolute",
            width: "300px",
            height: "5px",
            backgroundColor: "#535356",
            cursor: "pointer",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
