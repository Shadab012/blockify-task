import { useRef, useEffect, useState } from "react";
const Canvas = () => {
  const [coor, setCorr] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");
    /*
  I have created a grid of 40 by 40 because my laptop
  is taking too much time to do this calculation. you can expand 
  it by just changing the range for a loop, like 1000 by 1000.
  example:
  
  for (let i = 0; i <= 1000; i = i + 10) {
      for (let j = 0; j <= 1000; j = j + 10) {
        context.rect(j, i, 10, 10);
        context.stroke();
      }
    }
  */

    for (let i = 0; i <= 400; i = i + 10) {
      for (let j = 0; j <= 400; j = j + 10) {
        context.rect(j, i, 10, 10);
        context.stroke();
      }
    }
  }, []);

  function handleClick(evt) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = evt.clientX - rect.left - ((evt.clientX - rect.left) % 10);
    const y = evt.clientY - rect.top - ((evt.clientY - rect.top) % 10);
    setCorr(`x = ${(10 * x) / 100} and y=${(10 * y) / 100}`);
  }
  return (
    <div>
      <p> Coordinates: {coor}</p>
      <canvas onClick={handleClick} ref={canvasRef} />
    </div>
  );
};

export default Canvas;
