import { useEffect, useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
  const [timeLeft, setTimeLeft] = useState(30);
  const [highScore, setHighScore] = useState(0);

  // Mini Game: Timer
  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          if (newTime === 0) {
            // Game ends naturally
            setGameActive(false);
            setScore((currentScore) => {
              setHighScore((currentHigh) =>
                Math.max(currentHigh, currentScore)
              );
              return currentScore;
            });
          }
          return newTime;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameActive, timeLeft]);

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setTimeLeft(30);
    moveTarget();
  };

  const moveTarget = () => {
    const newX = Math.random() * 80 + 5;
    const newY = Math.random() * 60 + 10;
    setTargetPosition({ x: newX, y: newY });
  };

  const handleTargetClick = () => {
    if (gameActive) {
      setScore((prev) => prev + 1);
      moveTarget();
    }
  };

  return (
    <div
      className="min-h-screen w-full relative"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Grain Overlay */}
      <div className="grain"></div>

      {/* Floating Background Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 md:w-48 md:h-48 border-4 border-black rounded-full animate-float shadow-[8px_8px_0px_0px_#0f0f0f] overflow-hidden">
        <img src="/1.png" alt="AKU" className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute bottom-1/4 right-10 w-40 h-40 md:w-64 md:h-64 border-4 border-black rotate-12 shadow-[8px_8px_0px_0px_#0f0f0f] animate-float overflow-hidden"
        style={{ animationDelay: "1s" }}
      >
        <img src="/2.png" alt="AKU" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 border-4 border-black bg-[#A3FF00] shadow-[4px_4px_0px_0px_#0f0f0f]"></div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1
            className="text-[20vw] md:text-[15vw] font-black leading-none tracking-tighter text-black mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            AKU
          </h1>
        

          {/* Buy Button */}
          <div className="flex justify-center">
            <a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block"
            >
              <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div
                className="relative border-4 border-black bg-[#FF4D00] px-10 py-5 font-bold text-2xl md:text-3xl text-white transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-active:translate-x-1 group-active:translate-y-1"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                BUY ON PUMP.FUN 🚀
              </div>
            </a>
          </div>
        </div>

        {/* Epic Quote Section */}
        <div className="w-full max-w-5xl mb-16">
          <div className="relative border-4 border-black bg-black shadow-[12px_12px_0px_0px_#9D00FF] p-8 md:p-12 -rotate-1 hover:rotate-0 transition-transform duration-300">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF4D00] border-l-4 border-b-4 border-black"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#A3FF00] border-r-4 border-t-4 border-black"></div>

            <div className="relative z-10">
              <div className="border-4 border-[#FF4D00] bg-black p-1 mb-6 inline-block">
                <p
                  className="text-[#FF4D00] font-black text-sm md:text-base px-4 py-2 tracking-wider"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  {"/// THE LEGEND ///"}
                </p>
              </div>

              <blockquote className="space-y-4">
                <p
                  className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  <span className="text-[#FF4D00]">Long ago</span> in a{" "}
                  <span className="text-[#A3FF00]">distant land</span>, I,{" "}
                  <span className="text-[#9D00FF] text-5xl md:text-7xl lg:text-8xl">
                    AKU
                  </span>
                  ,
                </p>
                <p
                  className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  the{" "}
                  <span className="bg-[#FF4D00] text-white px-2">
                    shape-shifting
                  </span>{" "}
                  <span className="bg-white text-black px-2">
                    Master of Darkness
                  </span>
                  ,
                </p>
                <p
                  className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight"
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    WebkitTextStroke: "2px #A3FF00",
                    color: "transparent",
                  }}
                >
                  UNLEASHED AN UNSPEAKABLE EVIL!
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex-1 h-1 bg-[#A3FF00]"></div>
                  <p
                    className="text-2xl md:text-3xl font-black text-[#A3FF00]"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    ON SOLANA
                  </p>
                  <div className="flex-1 h-1 bg-[#A3FF00]"></div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Mini Game Section */}
        <div className="w-full max-w-4xl">
          <div className="border-4 border-black bg-white shadow-[12px_12px_0px_0px_#0f0f0f] p-8">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
              <h2
                className="text-3xl md:text-4xl font-black"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                CATCH JACK!
              </h2>
              <div className="flex gap-4 flex-wrap">
                <div className="border-4 border-black bg-[#A3FF00] px-4 py-2">
                  <span className="font-bold text-black">SCORE: {score}</span>
                </div>
                {highScore > 0 && (
                  <div className="border-4 border-black bg-[#9D00FF] px-4 py-2">
                    <span className="font-bold text-white">
                      HIGH: {highScore}
                    </span>
                  </div>
                )}
                {gameActive && (
                  <div className="border-4 border-black bg-[#FF4D00] px-4 py-2">
                    <span className="font-bold text-white">
                      TIME: {timeLeft}s
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Game Area */}
            <div className="relative w-full h-96 border-4 border-black bg-[#FFFAE5] overflow-hidden mb-6">
              {!gameActive ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-xl font-bold mb-6 text-center px-4">
                    {timeLeft === 0
                      ? `Game Over! You scored ${score} points!`
                      : "Click the button to start!"}
                  </p>
                  <button
                    type="button"
                    onClick={startGame}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
                    <div className="relative border-4 border-black bg-[#A3FF00] px-8 py-4 font-bold text-xl text-black transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-active:translate-x-1 group-active:translate-y-1">
                      START GAME
                    </div>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleTargetClick}
                  className="absolute p-1 text-white font-black text-2xl w-20 h-20 rounded-full transition-all duration-100 cursor-pointer"
                  style={{
                    left: `${targetPosition.x}%`,
                    top: `${targetPosition.y}%`,
                    transform: "translate(-50%, -50%)",
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  <img src={"/jack.png"} alt="AKU" className="w-full h-full object-cover" />
                </button>
              )}
            </div>

            <div className="text-center">
              <p className="text-lg font-bold text-black">
                Click the AKU button as many times as you can in 30 seconds!
              </p>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16 max-w-4xl w-full">
          <div className="border-4 border-black bg-[#A3FF00] p-6 shadow-[8px_8px_0px_0px_#0f0f0f] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <h3
              className="text-4xl md:text-5xl font-black text-black"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              99%
            </h3>
            <p className="text-sm font-bold uppercase mt-2">Chaos Factor</p>
          </div>
          <div className="border-4 border-black bg-[#FF4D00] p-6 shadow-[8px_8px_0px_0px_#0f0f0f] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <h3
              className="text-4xl md:text-5xl font-black text-white"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              ∞
            </h3>
            <p className="text-sm font-bold uppercase mt-2 text-white">Vibes</p>
          </div>
          <div className="border-4 border-black bg-[#9D00FF] p-6 shadow-[8px_8px_0px_0px_#0f0f0f] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all col-span-2 md:col-span-1">
            <h3
              className="text-4xl md:text-5xl font-black text-white"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              0%
            </h3>
            <p className="text-sm font-bold uppercase mt-2 text-white">
              Boring
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
