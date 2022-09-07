import React from 'react'
import ControlLogo from '../assests/control.png'
import Logo from '../assests/logo.png'
import ChartFillLogo from '../assests/Chart_fill.png'
import ChatLogo from '../assests/Chat.png'
import UserLogo from '../assests/User.png'
import CalendarLogo from '../assests/Calendar.png'
import SearchLogo from '../assests/Search.png'
import ChartLogo from '../assests/Chart.png'
import FolderLogo from '../assests/Folder.png'
import SettingLogo from '../assests/Setting.png'
import { useState } from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: ChartFillLogo, link: '/dashboard' },
        { title: "Inbox", src: ChatLogo, link: '/inbox' },
        { title: "Accounts", src: UserLogo, link: '/accounts', gap: true },
        { title: "Schedule", src: CalendarLogo, link: '/schedule' },
        { title: "Search", src: SearchLogo, link: '/search' },
        { title: "Analytics", src: ChartLogo, link: '/analytics' },
        { title: "Files", src: FolderLogo, link: '/files', gap: true },
        { title: "Setting", src: SettingLogo, link: 'setting' },
    ]

    return (
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
                        <Link to={menu.link}>
                            <li
                                key={index}
                                className={`group text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"} `}>

                                <img alt={`logo-${index}`} src={menu.src} />
                                <span
                                    style={{ transitionDelay: `${index + 1}00ms` }}
                                    className={`${!open && 'opacity-0 translate-x-28 overflow-hidden'} whitespace-pre origin-left duration-500`}>
                                    {menu.title}
                                </span>

                                <span
                                    className={`${open && "hidden"} absolute left-48 bg-white font-semibold text-sm whitespace-pre text-dark-purple rounded-md overflow-hidden drop-shadow-lg px-0 py-0 w-0 group-hover:p-2  group-hover:left-24 group-hover:duration-300 group-hover:w-fit`}>
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    )
                })}

            </ul>



        </div>
    )
}

export default Sidebar