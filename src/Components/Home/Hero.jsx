import React from "react";
import InfoLogo from "../../assets/logo.png";
import ParticleComponent from "./Particles";
import { Link } from 'react-router-dom';



const Hero = ({ scrollToContact }) => {
    const NotSelected = {
        "-webkit-user-select": "none",
        "-moz-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
    };

    return (
        <div>

            <div>
                <ParticleComponent />
                <div>

                    <div className=" relative">
                        <div className="mx-auto mt-[10%] z-20 md:mt-[25%] md:h-full">
                            <h1
                                className="text-center my-[1.5%] text-[25px] text-blue-500 font-bold"
                                style={NotSelected}
                            >
                                A One Day National Level Techinal Symposium
                            </h1>

                            <img
                                src={InfoLogo}
                                alt="Infest_2k24"
                                style={NotSelected}
                                className="mx-auto w-[30%] sm:w-[60%]"
                            />
                            <h1
                                className="text-center my-[1.5%] text-[25px] text-green-500 font-bold"
                                style={NotSelected}
                            >
                                23rd April 2024
                            </h1>

                            <div className=" flex flex-row sm:flex-col  justify-evenly items-center mx-auto text-center my-[2%] w-[45%] font-semibold">
                                <div className=" text-[20px] hover:shadow-lg sm:my-[5%] w-[250px] px-[30px] py-[15px] border-[2px] rounded-[8px] text-white bg-blue-500 border-blue-500 cursor-pointer">
                                    <Link to={'/event/tech'}>Register&#160;Events</Link>
                                </div>

                                <div className=" text-[20px] hover:shadow-lg sm:my-[5%] w-[250px] px-[30px] py-[15px] border-[2px] rounded-[8px] border-green-500 cursor-pointer text-green-500"
                                >
                                    <Link to={'#contact'} onClick={() => scrollToContact()}>Contact&#160;Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
