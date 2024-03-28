import Tech from "../../../../assets/Dept/tech.jpg";
import Electrial from "../../../../assets/Dept/chip.jpg";
import Mech from "../../../../assets/Dept/mech.jpg";
import MBA from "../../../../assets/Dept/mba.jpg";
import SH from "../../../../assets/Dept/sh.jpg";
import { useState } from "react";

const DeptCard = () => {

  return (
    <div>

      <div className=" flex">

        <div className=" w-[25%] h-[65vh] border-[2px] border-blue-500 rounded-[7px] overflow-hidden">
          <img src={Tech} alt="Tech_Departments" className=" object-cover h-full w-full" />
        </div>

        <div className=" w-[25%] h-[65vh] border-[2px] border-blue-500 rounded-[7px] overflow-hidden">
          <img src={Electrial} alt="Electrial_Departments" className=" object-cover h-full w-full" />
        </div>

        <div className=" w-[25%] h-[65vh] border-[2px] border-blue-500 rounded-[7px] overflow-hidden">
          <img src={Mech} alt="Mech_Departments" className=" object-cover h-full w-full" />
        </div>

        <div className=" w-[25%] h-[65vh] border-[2px] border-blue-500 rounded-[7px] overflow-hidden">
          <img src={SH} alt="SH_Departments" className=" object-cover h-full w-full" />
        </div>

        <div className=" w-[25%] h-[65vh] border-[2px] border-blue-500 rounded-[7px] overflow-hidden">
          <img src={MBA} alt="MBA_Departments" className=" object-cover h-full w-full" />
        </div>

      </div>

    </div>
  )
}

export default DeptCard;