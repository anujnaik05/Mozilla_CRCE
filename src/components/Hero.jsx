// import React, { useState, useEffect, useRef } from "react";

// export default function Hero() {
//   const [startGame, setStartGame] = useState(false);
//   const [falling, setFalling] = useState(false);
//   const [gameOver, setGameOver] = useState(false);

//   const canvasRef = useRef(null);

//   // Game state refs
//   const birdY = useRef(0);
//   const velocity = useRef(0);
//   const pipes = useRef([]);
//   const frame = useRef(0);
//   const score = useRef(0);
//   const localGameOver = useRef(false);
//   const animationRef = useRef(null);

//   const gravity = 0.4;
//   const lift = -8;
//   const pipeWidth = 80;
//   const pipeGap = 220;

//   const handleStart = () => {
//     setFalling(true);
//     setTimeout(() => {
//       setStartGame(true);
//       setGameOver(false);
//     }, 1500);
//   };

//   const handleRestart = () => {
//     resetGame();
//     setGameOver(false);
//   };

//   const handleBack = () => {
//     setStartGame(false);
//     setFalling(false);
//     setGameOver(false);
//     cancelAnimationFrame(animationRef.current);
//   };

//   const resetGame = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");

//     // Reset game state
//     birdY.current = canvas.height / 2;
//     velocity.current = 0;
//     pipes.current = [];
//     frame.current = 160;
//     score.current = 0;
//     localGameOver.current = false;

//     const birdImg = new Image();
//     birdImg.src = "/Images/logo/Mozilla_Logo.jpg";

//     function drawBird() {
//   const size = 55; // same as before
//   ctx.save();
//   ctx.beginPath();
//   ctx.arc(80 + size / 2, birdY.current + size / 2, size / 2, 0, Math.PI * 2);
//   ctx.closePath();
//   ctx.clip();
//   ctx.drawImage(birdImg, 80, birdY.current, size, size);
//   ctx.restore();
// }


//     function drawPipes() {
//       for (let pipe of pipes.current) {
//         const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
//         gradient.addColorStop(0, "#00BFFF");
//         gradient.addColorStop(1, "#1E90FF");
//         ctx.fillStyle = gradient;

//         ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);
//         ctx.fillRect(pipe.x, canvas.height - pipe.bottom, pipeWidth, pipe.bottom);
//       }
//     }

//     function update() {
//       if (localGameOver.current) {
//         setGameOver(true);
//         ctx.fillStyle = "rgba(0,0,0,0.6)";
//         ctx.fillRect(0, 0, canvas.width, canvas.height);

//         ctx.fillStyle = "white";
//         ctx.font = "bold 42px Arial";
//         ctx.fillText("Game Over", canvas.width / 2 - 120, canvas.height / 2 - 20);
//         return;
//       }

//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       velocity.current += gravity;
//       birdY.current += velocity.current;

//       if (birdY.current + 50 > canvas.height || birdY.current < 0) {
//         localGameOver.current = true;
//       }

//       if (frame.current % 200 === 0) {
//         let top = Math.random() * (canvas.height - pipeGap - 120) + 60;
//         let bottom = canvas.height - top - pipeGap;
//         pipes.current.push({ x: canvas.width, top, bottom });
//       }

//       for (let pipe of pipes.current) {
//         pipe.x -= 1.5;

//         if (
//           80 < pipe.x + pipeWidth &&
//           80 + 50 > pipe.x &&
//           (birdY.current < pipe.top || birdY.current + 50 > canvas.height - pipe.bottom)
//         ) {
//           localGameOver.current = true;
//         }

//         if (pipe.x === 78) score.current++;
//       }

//       drawBird();
//       drawPipes();

//       ctx.fillStyle = "white";
//       ctx.font = "24px Arial";
//       //ctx.fillText("Score: " + score.current, 20, 40);

//       frame.current++;
//       animationRef.current = requestAnimationFrame(update);
//     }

//     function jump() {
//       velocity.current = lift;
//     }

//     document.addEventListener("keydown", jump);
//     document.addEventListener("mousedown", jump);
//     document.addEventListener("touchstart", jump);

//     birdImg.onload = update;

//     return () => {
//       document.removeEventListener("keydown", jump);
//       document.removeEventListener("mousedown", jump);
//       document.removeEventListener("touchstart", jump);
//     };
//   };

//   useEffect(() => {
//     if (startGame && canvasRef.current) {
//       resetGame();
//     } else {
//       cancelAnimationFrame(animationRef.current);
//     }
//   }, [startGame]);

//   return (
//     <div className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-blue-900 to-black">
//       {!startGame ? (
//         <>
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
//             Empowering Digital Communities
//           </h1>
//           <p className="text-lg text-gray-300 max-w-2xl">
//             Join the movement for an open, accessible, and secure internet for everyone.
//           </p>

//           <div className="mt-10 flex flex-col items-center">
//             <img
//               id="logo"
//               src="/Images/logo/Mozilla_Logo.jpg"
//               alt="Council Logo"
//               onClick={handleStart}
//               className={`w-40 h-40 cursor-pointer rounded-full shadow-lg border-4 border-blue-400 ${
//                 falling ? "animate-fall-slide" : "animate-spin-slow"
//               }`}
//             />
//             {!falling && (
//               <p className="mt-6 text-xl font-semibold text-white animate-pulse">
//                 🎉 Click on the logo for some fun! 😎🚀
//               </p>
//             )}
//           </div>
//         </>
//       ) : (
//         <div className="w-full h-screen flex flex-col items-center justify-center">
//           <canvas
//             ref={canvasRef}
//             width="700"
//             height="600"
//             className="bg-gray-900 border-4 border-blue-400 rounded-2xl shadow-xl"
//           ></canvas>

//           {gameOver && (
//             <div className="mt-6 flex gap-4">
//               <button
//                 onClick={handleRestart}
//                 className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg"
//               >
//                 Play Again
//               </button>
//               <button
//                 onClick={handleBack}
//                 className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-xl shadow-lg"
//               >
//                 Back to Home
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }




import React, { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [startGame, setStartGame] = useState(false);
  const [falling, setFalling] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const canvasRef = useRef(null);

  const birdY = useRef(0);
  const velocity = useRef(0);
  const pipes = useRef([]);
  const frame = useRef(0);
  const score = useRef(0);
  const localGameOver = useRef(false);
  const animationRef = useRef(null);

  const gravity = 0.4;
  const lift = -8;

  const handleStart = () => {
    setFalling(true);
    setTimeout(() => {
      setStartGame(true);
      setGameOver(false);
    }, 1500);
  };

  const handleRestart = () => {
    resetGame();
    setGameOver(false);
  };

  const handleBack = () => {
    setStartGame(false);
    setFalling(false);
    setGameOver(false);
    cancelAnimationFrame(animationRef.current);
  };

  const resetGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Responsive canvas
    const width = Math.min(window.innerWidth - 40, 700);
    const height = Math.min(window.innerHeight - 100, 600);
    canvas.width = width;
    canvas.height = height;

    const pipeWidth = width * 0.12; // scale pipe width
    const pipeGap = height * 0.35;  // scale gap

    birdY.current = height / 2;
    velocity.current = 0;
    pipes.current = [];
    frame.current = 160;
    score.current = 0;
    localGameOver.current = false;

    const birdSize = width * 0.08; // scale bird

    const birdImg = new Image();
    birdImg.src = "/Images/logo/Mozilla_Logo.jpg";

    function drawBird() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(80 + birdSize / 2, birdY.current + birdSize / 2, birdSize / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(birdImg, 80, birdY.current, birdSize, birdSize);
      ctx.restore();
    }

    function drawPipes() {
      for (let pipe of pipes.current) {
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "#00BFFF");
        gradient.addColorStop(1, "#1E90FF");
        ctx.fillStyle = gradient;
        ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);
        ctx.fillRect(pipe.x, canvas.height - pipe.bottom, pipeWidth, pipe.bottom);
      }
    }

    function update() {
      if (localGameOver.current) {
        setGameOver(true);
        ctx.fillStyle = "rgba(0,0,0,0.6)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.font = `${width * 0.06}px Arial`;
        ctx.fillText("Game Over", canvas.width / 2 - width * 0.15, canvas.height / 2 - 20);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      velocity.current += gravity;
      birdY.current += velocity.current;

      if (birdY.current + birdSize > canvas.height || birdY.current < 0) {
        localGameOver.current = true;
      }

      if (frame.current % 200 === 0) {
        let top = Math.random() * (canvas.height - pipeGap - 120) + 60;
        let bottom = canvas.height - top - pipeGap;
        pipes.current.push({ x: canvas.width, top, bottom });
      }

      for (let pipe of pipes.current) {
        pipe.x -= 1.5 * (width / 700); // adjust speed for width
        if (
          80 < pipe.x + pipeWidth &&
          80 + birdSize > pipe.x &&
          (birdY.current < pipe.top || birdY.current + birdSize > canvas.height - pipe.bottom)
        ) {
          localGameOver.current = true;
        }
        if (pipe.x === 78) score.current++;
      }

      drawBird();
      drawPipes();

      ctx.fillStyle = "white";
      ctx.font = `${width * 0.035}px Arial`;
      ctx.fillText("Score: " + score.current, 20, 40);

      frame.current++;
      animationRef.current = requestAnimationFrame(update);
    }

    function jump() {
      velocity.current = lift;
    }

    document.addEventListener("keydown", jump);
    document.addEventListener("mousedown", jump);
    document.addEventListener("touchstart", jump);

    birdImg.onload = update;

    return () => {
      document.removeEventListener("keydown", jump);
      document.removeEventListener("mousedown", jump);
      document.removeEventListener("touchstart", jump);
    };
  };

  useEffect(() => {
    if (startGame && canvasRef.current) {
      resetGame();
    } else {
      cancelAnimationFrame(animationRef.current);
    }
  }, [startGame]);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-blue-900 to-black">
      {!startGame ? (
        <>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Empowering Digital Communities
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Join the movement for an open, accessible, and secure internet for everyone.
          </p>

          <div className="mt-10 flex flex-col items-center">
            <img
              id="logo"
              src="/Images/logo/Mozilla_Logo.jpg"
              alt="Council Logo"
              onClick={handleStart}
              className={`w-24 md:w-40 h-24 md:h-40 cursor-pointer rounded-full shadow-lg border-4 border-blue-400 ${
                falling ? "animate-fall-slide" : "animate-spin-slow"
              }`}
            />
            {!falling && (
              <p className="mt-6 text-xl font-semibold text-white animate-pulse">
                🎉Click on the logo for some fun!😎🚀
              </p>
            )}
          </div>
        </>
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <canvas
            ref={canvasRef}
            className="w-full max-w-[700px] h-auto bg-gray-900 border-4 border-blue-400 rounded-2xl shadow-xl"
          ></canvas>

          {gameOver && (
            <div className="mt-6 flex gap-4 flex-wrap justify-center">
              <button
                onClick={handleRestart}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg"
              >
                Play Again
              </button>
              <button
                onClick={handleBack}
                className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-xl shadow-lg"
              >
                Back to Home
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
