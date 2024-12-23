import { useState } from "react"

const SideBar = () => {

const [extended, setExtended] = useState(false)




  return (
    <div className="side-bar min-h-screen flex flex-col justify-between bg-slate-50 py-[25px] px-[15px]">
        {/* top div */}
      <div className="top">
            <img onClick={() => setExtended(prev=>!prev)} className="menu w-5 block ml-2.5 cursor-pointer" src="/menu_icon.png"  alt="menu_icon.png"/>
            <div className="new-chat mt-[50px] inline-flex items-center gap-2.5 py-[10px] px-[15px] bg-blue-50 rounded-[50px] text-sm text-gray-400 cursor-pointer">
                <img className="w-5" src="/plus_icon.png"  alt="plus_icon.png" />
               {extended ? <p>New chat</p> : null} 
            </div>
            {extended ? 
            
            <div className="recent flex flex-col ">
                <p className="recent-title mt-[30px] mb-5">Recent</p>
                <div className="recent-entry flex items-start gap-2.5 p-2.5 pr-[40px] rounded-[50px] text-custom-dark-gray cursor-pointer hover:bg-gray-100">
                    <img className="w-5" src="/message_icon.png" />
                    <p>What is react..</p>
                </div>
            </div>
            : null
           }
      </div>


         {/* bottom div */}
      <div  className="bottom flex flex-col gap-2.5 p-2.5  text-custom-dark-gray cursor-pointer ">

        <div  className="bottom-item flex gap-2.5 pr-2.5 items-center justify-start rounded-[50px]  hover:bg-gray-100">
            <img className="w-5" src="/question_icon.png"/>
           {extended ?  <p>Help</p> : null }
        </div>

        <div  className="bottom-item flex gap-2.5 pr-2.5  items-center justify-start rounded-[50px] hover:bg-gray-100">
            <img className="w-5" src="/history_icon.png"/>
            {extended ?  <p>Activity</p> : null }
        </div>

        <div  className="bottom-item flex gap-2.5 pr-2.5 items-center justify-start rounded-[50px] hover:bg-gray-100">
            <img className="w-5" src="/setting_icon.png"/>
            {extended ?  <p>Setting</p> : null }
        </div>

     </div>

    </div>
  )
}

export default SideBar
