import { useState } from 'react';
import './App.css';
import ControlLogo from './assests/control.png'
import Logo from './assests/logo.png'
import ChartFillLogo from './assests/Chart_fill.png'
import ChatLogo from './assests/Chat.png'
import UserLogo from './assests/User.png'
import CalendarLogo from './assests/Calendar.png'
import SearchLogo from './assests/Search.png'
import ChartLogo from './assests/Chart.png'
import FolderLogo from './assests/Folder.png'
import SettingLogo from './assests/Setting.png'



function App() {

  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: ChartFillLogo },
    { title: "Inbox", src: ChatLogo },
    { title: "Accounts", src: UserLogo, gap: true },
    { title: "Schedule", src: CalendarLogo },
    { title: "Search", src: SearchLogo },
    { title: "Analytics", src: ChartLogo },
    { title: "Files", src: FolderLogo, gap: true },
    { title: "Setting", src: SettingLogo },
  ]


  return (
    <div className='flex' >

      <div className={`${open ? "w-72" : "w-20"} duration-300 w-72 h-screen p-5 pt-8 bg-dark-purple relative`}>
        <img src={ControlLogo} alt="control" onClick={() => setOpen(!open)}
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${!open && "rotate-180"}`} />

        <div className='flex'>
          <img src={Logo} className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} alt="logo" />
          <h1 className={`pt-2 pl-2 text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>
            Designer
          </h1>
        </div>

        <ul className='pt-6'>
          {Menus.map((menu, index) => {
            return (
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"} `}>

                <img alt={`logo-${index}`} src={menu.src} />
                <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
              </li>
            )
          })}

        </ul>



      </div>

      <div>
        <h1 className='p-7 text-2xl font-semibold flex-1 h-screen'>Hello U</h1>
      </div>

    </div>
  );
}

export default App;
