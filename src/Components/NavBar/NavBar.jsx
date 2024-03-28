import { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png'

import { RiMenu4Line as Menu } from "react-icons/ri";
import MenuItems from './MenuItems';


const NavBar = () => {
  const [ShowMenu,setShowMenu]=useState(false);
  useEffect(()=>{
    setShowMenu(false);
  },[])
  
  return (
    <div>
      <div className=" flex justify-between p-8 px-20 sticky">
        <img src={Logo} width={80} />
        <div className=' text-[24px] cursor-pointer duration-500 ease-in'>
          {
            ShowMenu===false ? <Menu className='text-[32px]' onClick={()=>setShowMenu((prev)=>!prev)}/> : <MenuItems setShowMenu={setShowMenu} />
          }
        </div>
      </div>

    </div>

  )
}

export default NavBar