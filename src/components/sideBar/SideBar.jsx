import { useContext, useState } from "react";
import { Context } from "../../context/context";


const SideBar = () => {

  const [extended, setExtended] = useState(false);

  const {
    onSent,
    prevPrompt,
    setRecentPrompt,
    newChat,
    isDarkMode,
   
  
  } = useContext(Context);


  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)

      await onSent(prompt)
  }

  return (
    <div
      className={`side-bar hidden md:flex min-h-screen  flex-col justify-between bg-slate-50 py-[25px] px-[15px]  ${
        isDarkMode ? "bg-customDark text-white" : "bg-slate-50 text-black"
      }`}
    >
      {/* top div */}

      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu w-5 block ml-2.5 cursor-pointer"
          src={isDarkMode ? "/menu_icon_white.png" : "/menu_icon.png"}
          alt="menu_icon.png"
        />

          <div
          onClick={() => newChat()}
          className={`new-chat mt-[50px] inline-flex items-center gap-2.5 py-[10px] px-[15px] rounded-[50px] text-sm ${
            isDarkMode
              ? 'bg-gray-800 text-gray-200 hover:bg-gray-700'
              : 'bg-blue-50 text-gray-400 hover:bg-gray-100'
          } cursor-pointer`}
        >
          <img className="w-5" src="/plus_icon.png" alt="plus_icon.png" />
          {extended ? <p>New chat</p> : null}
        </div>

        {extended ? (
          <div className="recent fade-in flex flex-col ">

              <p
              className={`recent-title mt-[30px] mb-5 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Recent
            </p>

            {prevPrompt.map((item, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                className={`recent-entry flex items-start gap-2.5 p-2.5 pr-[40px] mb-1.5 rounded-[50px] cursor-pointer ${
                  isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'text-custom-dark-gray hover:bg-gray-100'
                }`}              >
                <img className="w-5" src="/message_icon.png" alt="message_icon" />
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {/* bottom div */}
      <div className={`bottom flex flex-col gap-2.5 p-2.5 ${
      isDarkMode ? 'text-gray-300' : 'text-custom-dark-gray'
    } cursor-pointer`}>

        <div className={`bottom-item flex gap-2.5 pr-2.5 items-center justify-start rounded-[50px] hover:${
        isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
      }`}>
          
          <img className="w-5" src={isDarkMode ?  "/question_icon_white.png" : "/question_icon.png" } />
          {extended ? <p>Help</p> : null}
        </div>

        <div className={`bottom-item flex gap-2.5 pr-2.5 items-center justify-start rounded-[50px] hover:${
        isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
      }`}>
          <img className="w-5" src={ isDarkMode ? "/history_icon_white.png" : "/history_icon.png"} />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className={`bottom-item flex gap-2.5 pr-2.5 items-center justify-start rounded-[50px] hover:${
        isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
      }`}>
          <img className="w-5" src= {isDarkMode ? "/setting_icon_white.png" :  "/setting_icon.png"} />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
