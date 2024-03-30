import { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import { RiMenu4Line as Menu } from "react-icons/ri";
import MenuItems from './MenuItems';
import { Link,useLocation } from 'react-router-dom';


const NavBar = () => {
  const location = useLocation();
  const [ShowMenu,setShowMenu]=useState(false);

  useEffect(()=>{
    setShowMenu(false);
  },[location.pathname]);
  
  return (
   <div className='blur-background w-screen fixed top-0 z-40'>
     <div className=' flex flex-col items-center justify-center relative'>

      <div className=" flex justify-between p-4 mt-[2%] border blur-background border-gray-400 px-20 md:px-5 w-[90%] md:w-[92%] z-10 rounded-[25px]">

        <Link to={'/'} className=' cursor-pointer'>
          <img src={Logo} width={80} />
        </Link>

        <div className={`text-[24px] cursor-pointer duration-500 ease-in rounded-[50%] ${ShowMenu === false && "border border-gray-600 bg-white"} w-[50px] h-[50px] flex justify-center items-center `}>
          {
            ShowMenu===false && <Menu className='text-[32px]' onClick={()=>setShowMenu((prev)=>!prev)}/> 
          }
        </div>

      </div>

      {
        ShowMenu && <MenuItems setShowMenu={setShowMenu} />
      }
    </div>
   </div>

  )
}

export default NavBar