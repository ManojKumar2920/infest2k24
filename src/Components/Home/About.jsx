import AboutImg from "../../assets/about.jpg"

const About = () => {
  return (
    <div>
      <div>
        <div className=" px-8 pt-8 flex sm:flex-col sm:gap-[10%] justify-evenly items-center">

          <div className=" w-[50%] sm:w-[90%] gap-10 sm:gap-5 flex flex-col">

            <h1 className=" text-[30px] font-bold bg-gradient-to-r from-blue-500 via-green-500 to-green-500 bg-clip-text text-transparent">About Infest</h1>

            <p className=" text-gray-700">Welcome to <strong>Infest 2K24</strong> , the National Level Technical Symposium
              hosted by Info Institute of Engineering! We're excited to provide a
              platform for aspiring engineers and tech enthusiasts from all
              disciplines to showcase their talent and compete for amazing prizes.
            </p>

            <p className=" text-gray-700">Calling all students from <strong> CSE, IT, AIDS, ECE, EEE, MECH, S&H, and
              MBA! </strong>Are you passionate about technology? Do you have groundbreaking
              research or innovative projects waiting to be unveiled? Infest 2024
              offers you the perfect opportunity to:
            </p>

            <p className=" text-gray-700">
              Infest 2K24 is more than just a competition; it's a vibrant community
              of tech enthusiasts coming together to learn, share, and innovate.
              Join us for an experience that will never fades away.
            </p>
            
          </div>

          <div>
            <img src={AboutImg} width={500} className=" rounded-lg sm:mt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
