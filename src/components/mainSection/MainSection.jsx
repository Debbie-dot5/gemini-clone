import { useContext } from "react";
import { Context } from "../../context/context";



const cards =[
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
]





const MainSection = () => {

  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    } = useContext(Context)

  return (
    <div className="main flex-1 min-h-screen pb-[15vh] relative w-full">
      <div className="nav flex items-center justify-between text-[22px] p-5 text-gray-600">
        <p>Gemini</p>
        <img
          className="w-10 rounded-full"
          src="/user_icon.png"
          alt="user_icon"
        />
      </div>


     
      <div className="main-cont mx-auto max-w-[900px]">

      {!showResult 
      ? 
      <>
        <div className="greet mt-[50px] text-[56px] text-gray-300 font-medium p-5">
          <p>
            <span className="greet-span">Hello, Dev.</span>
          </p>
          <p>How can I help you today? </p>
        </div>


        <div className="cards grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[15px] p-5 ">
         {cards.map((card,index) => (

          <div key={index} className="card p-[15px] h-[200px] rounded-xl relative bg-gray-100 cursor-pointer hover:bg-gray-200 ">
            <p className="text-[17px] text-gray-600">{card.text}</p>
            <img className="w-[35px] p-[5px] absolute bg-white rounded-lg bottom-[10px] right-[10px]" src={card.img} alt={card.img} />
          </div>

         ))}  


        </div>

      </> :
          <div className="result px-5p max-h-[70vh] overflow-y-scroll">
              <div className="result-title my-10 mx-0 flex items-center gap-5">
                <img className="w-[40px] rounded-full" src="/user_icon.png" alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data flex items-start gap-5">
                <img src="/gemini_icon.png" alt="" />
                {loading ?
                 <div className="loader w-full flex flex-col gap-10">
                    <hr />
                    <hr />
                    <hr />
                </div> 
                :  
                 <p className="text-[17px] text-start font-light leading-relaxed" dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
              
              </div>
          </div>
      }

      
         <div className="main-bottom absolute bottom-0   w-full max-w-[900px] m-auto px-5">

          <div className="search flex items-center justify-between gap-2 py-2 px-5 rounded-[50px] bg-gray-50 ">
                <input onChange={(e) => setInput(e.target.value)} value={ input} className="flex-1 bg-transparent border-none outline-none p-2 text-lg" type="text" placeholder="Enter prompt here" />

                   <div className="flex justify-between">
                    <img  className="w-[24px] cursor-pointer"  src="/gallery_icon.png" alt="" />
                    <img  className="w-[24px] cursor-pointer"   src="/mic_icon.png" alt="" />
                    <img onClick={() => onSent()} className="w-[24px] cursor-pointer"  src="/send_icon.png" alt="" />
                    </div> 
                    
            </div>

            <p className="bottom-info text-[13px] my-[15px] mx-auto text-center font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem incidunt molestiae ut. Suscipit, laboriosam.
            </p>
            </div> 
 

      </div>
    </div>
  );
}

export default MainSection
