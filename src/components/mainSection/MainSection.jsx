import  { useContext } from 'react';
import { Context } from '../../context/context';


const cards = [
  {
    text: "Suggest beautiful places to visit in canada, ontario",
    img: "/compass_icon.png",
  },
  {
    text: "Suggest beautiful places to visit in canada, ontario",
    img: "/bulb_icon.png",
  },
  {
    text: "Suggest beautiful places to visit in canada, ontario",
    img: "/message_icon.png",
  },
  {
    text: "Suggest beautiful places to visit in canada, ontario",
    img: "/code_icon.png",
  },
];

const MainSection = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    isDarkMode,
    toggleTheme,
  } = useContext(Context);

  return (
    <div className={`main flex-1 min-h-screen pb-[15vh] relative w-full ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="nav flex items-center justify-between text-[22px] p-5 text-gray-600">

        <p>Gemini</p>
         
         <div className='flex gap-4 items-center'>

        <button
          onClick={toggleTheme}
          className={`p-1 rounded-full text-sm font-medium transition-colors duration-300 
            ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
        >
          {isDarkMode ? <img className='w-6' src="/light_mode.png"/> :  <img className='w-6' src="/dark_mode.png"/>}
        </button>


        <img
          className="w-10 rounded-full"
          src="/user_icon.png"
          alt="user_icon"
        />
         </div>

        </div>

      <div className="main-cont mx-auto max-w-[900px]">
        {!showResult ? (
          <>
            <div className="greet mt-[10px] text-[56px] text-gray-300 font-medium p-5">
              <p>
                <span className="greet-span">Hello, Dev.</span>
              </p>
              <p>How can I help you today? </p>
            </div>

            <div className="cards grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[15px] p-5 mb-10">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`card p-[15px] h-[200px] rounded-xl relative cursor-pointer  ${isDarkMode ? 'bg-customDark hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                  <p className={`text-[17px]  ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>{card.text}</p>
                  <img
                    className={`w-[35px] p-[5px] absolute bg-white rounded-lg bottom-[10px] right-[10px] ${isDarkMode ? 'filter invert' : ''}`}
                    src={card.img}
                    alt={card.img}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="result px-5p max-h-[70vh] overflow-y-scroll">
            <div className="result-title my-10 mx-0 flex items-center gap-5">
              <img
                className="w-[40px] rounded-full"
                src="/user_icon.png"
                alt=""
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-5">
              <img src="/gemini_icon.png" alt="" />
              {loading ? (
                <div className="loader w-full flex flex-col gap-10">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  className="text-[17px] text-start font-light leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom absolute bottom-0  w-full max-w-[900px] m-auto px-5">
          <div className= {`search flex items-center justify-between gap-2 py-[5px] px-2.5 md:py-1 md:px-5 rounded-[50px] ${isDarkMode ? 'bg-customDark text-white' : 'bg-gray-50 text-black'}`}>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="flex-none sm:w-[150px] md:flex-1 bg-transparent border-none outline-none p-2 text-lg"
              type="text"
              placeholder="Enter prompt here"
            />

            <div className="flex justify-between sm:gap-[25px]">
              <img
                className=" w-[20px] md:w-[24px] cursor-pointer"
                src="/gallery_icon.png"
                alt=""
              />
              <img
                className=" w-[20px] md:w-[24px] cursor-pointer"
                src="/mic_icon.png"
                alt=""
              />
              {input ? (
                <img
                  onClick={() => onSent()}
                  className=" w-[20px] md:w-[24px] cursor-pointer"
                  src="/send_icon.png"
                  alt=""
                />
              ) : null}
            </div>
          </div>

          <p className="bottom-info text-[13px] my-[15px] mx-auto text-center font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem
            incidunt molestiae ut. Suscipit, laboriosam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
