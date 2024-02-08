import React from "react";
import Image from "next/image";
function Main() {
  const foodPreferences = [
    {
      image: "/images/image 6.png",
      alt: "anything",
      title: "Anything",
    },
    {
      image: "/images/image 1.png",
      alt: "meat",
      title: "Meat",
    },
    {
      image: "/images/image 2.png",
      alt: "vegetable",
      title: "Vegetable",
    },
    {
      image: "/images/image 4.png",
      alt: "ketogenic",
      title: "Ketogenic",
    },
    {
      image: "/images/image 3.png",
      alt: "vegan",
      title: "Vegan",
    },
    {
      image: "/images/image 5.png",
      alt: "mediterranean",
      title: "Mediterranean",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col relative">
          <div className="bg-[#FFEFED] flex justify-between items-end h-[620px] sm:h-[770px] md:h-[920px] lg:h-[740px] pt-5   w-full">
            <Image
              src="/images/kisspng-cooked-rice-cm-tm-vietnamese-cuisine-white-ri-5b112949156353 1.png"
              height={400} width={340}
              className="max-md:w-[80px] md:block hidden"
              alt=""
            />
            <Image
              src="/images/—Pngtree—western food_4652092 1.png"
              width={300}
              height={400}
              className="max-md:w-[80px] md:block hidden"
              alt=""
            />
          </div>
          <Image
            src="/images/Exclude.png"
            width={1440}
            height={199}
            className="w-full md:block hidden"
            alt=""
          />
        
        <div className="flex absolute   flex-col max-md:gap-4 gap-6 w-full items-center justify-center top-8 md:top-28 ">
          
            <h1 className=" 2xl:text-[4vw] lg:text-[5vw] xl:text-[72px] leading-none max-md:text-[40px] max-lg:text-[50px] font-atma text-center font-extrabold">
              Put your diet on <br />
              <span className="text-[#EF4D3C]">Autopilot</span>
            </h1>
            <p className="max-w-[640px] max-md:max-w-[356px] max-md:text-base font-dm-sans text-center leading-[150%]">
              Eat This Much creates personalized meal plans based on your food
              preferences, budget, and schedule. Reach your diet and nutritional
              goals with our calorie calculator, weekly meal plans, grocery
              lists and more.
            </p>
            <button
              type="text"
              className="text-white font-atma text-base hover:bg-black duration-200 max-md:!text-[14px] leading-[119%] sm:py-[14px] px-4 py-2 sm:px-6 font-semibold capitalize rounded-full  w-[170px] p-2 bg-[#EF4D3C]"
            >
              Plan Your Meal
            </button>
          
          <div className="w-[100%] max-w-[1200px] rounded-xl p-4 lg:p-10 bg-white" style={{ boxShadow: '0px 12px 24px 0px rgba(0, 0, 0, 0.15)' }}>
            <h1 className=" font-semibold font-atma text-lg sm:text-2xl pb-4 ">
              Choose your food preference
            </h1>
            <div className="flex flex-wrap gap-2 md:gap-4 mt-2 items-center">
              {/* Food Preference Cards */}
              {foodPreferences.map((item, index) => (
                <div
                  key={index}
                  className=" max-sm:w-[31.5%] w-[15.45%] h-[110px] max-sm:h-[55px] cursor-pointer justify-center rounded-lg border border-gray-300 py-4 flex flex-col items-center"
                >
                  <Image
                    src={item.image}
                    height={56}
                    width={56}
                    className="max-md:w-[28px]"
                    alt={item.alt}
                  />
                  <span className="font-atma px-[21px] font-semibold text-base leading-[110%] max-sm:text-[13px] mt-1 sm:mt-2">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col gap-3 mt-6 items-center">
              <div className="flex flex-1 justify-between w-full items-center gap-4">
                <div className="w-[70%]">
                  <h1 className="font-medium font-atma sm:mb-2 max-md:text-sm">
                    I want to Eat
                  </h1>
                  <div className="flex  max-md:p-1 p-[18.5px] px-4 justify-between  items-center border rounded-lg border-[#BEBEBE]">
                    <input
                      type="text"
                      placeholder="600"
                      className=" outline-none w-full max-md:text-sm font-dm-sans text-base leading-[110%]   text-black placeholder:text-[#7E7E7E]"
                    />
                    <div className="flex  gap-3 pr-4 max-md:gap-0 items-center">
                      <p className="font-dm-sans w-full max-md:text-xs pe-3 text-base leading-[110%]">
                        Calories
                      </p>
                      <div className="flex cursor-pointer w-full gap-2 items-center">
                        <Image
                          src="/images/calculator.png"
                          width={24}
                          height={24}
                          alt=""
                        />
                        <p className="text-[#EF4D3C] flex gap-[1.5px] cursor-pointer text-base leading-[110%] max-md:text-[8px] font-dm-sans ">
                          <span>Not</span>
                          <span>Sure?</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[30%]">
                  <p className="font-medium font-atma sm:mb-2 max-sm:text-sm ">
                    Meals
                  </p>
                  <div className=" cursor-pointer relative">
                    <button
                      className="relative w-full cursor-pointer text-left max-md:p-1 py-[15px] px-4 border rounded-lg overflow-hidden border-[#BEBEBE]"
                      type="button"
                    >
                      <span className="block truncate outline-none w-full  md:placeholder:text-lg max-sm:text-sm font-dm-sans font-medium rounded-lg text-[#7E7E7E] cursor-pointer">
                        # Meals
                      </span>
                      <span className=" pointer-events-none absolute inset-y-0 right-0 flex items-center bg-white px-2">
                        <Image
                          src="/images/Vector (5).png"
                          height={5}
                          width={10}
                          alt=""
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex  w-full items-center gap-4">
                <div className="w-full">
                  <p className="font-medium font-atma sm:mb-2 max-sm:text-sm ">
                    Select your school
                  </p>
                  <div className=" cursor-pointer relative">
                    <button
                      className="relative w-full cursor-pointer text-left max-md:p-1 py-[15px] px-4 border rounded-lg overflow-hidden border-[#BEBEBE]"
                      type="button"
                    >
                      <span className="block truncate outline-none w-full  md:placeholder:text-lg max-sm:text-sm font-dm-sans font-medium rounded-lg text-[#7E7E7E] cursor-pointer">
                        Select your school
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center bg-white px-2">
                        <Image
                          src="/images/Vector (5).png"
                          height={5}
                          width={10}
                          alt=""
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-full">
                  <p className="font-medium font-atma sm:mb-2 max-sm:text-sm ">
                    Location
                  </p>
                  <div className=" cursor-pointer relative">
                    <button
                      className="relative w-full cursor-pointer text-left max-md:p-1 py-[15px] px-4 border rounded-lg overflow-hidden border-[#BEBEBE]"
                      type="button"
                    >
                      <span className="block truncate outline-none w-full  md:placeholder:text-lg max-sm:text-sm font-dm-sans font-medium rounded-lg text-[#7E7E7E] cursor-pointer">
                        Select location
                      </span>
                      <span className=" pointer-events-none absolute inset-y-0 right-0 flex items-center bg-white px-2">
                        <Image
                          src="/images/Vector (5).png"
                          height={5}
                          width={10}
                          alt=""
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <button className="text-white font-atma text-base hover:bg-black duration-200 max-md:!text-[14px] sm:mt-7 font-semibold  sm:py-4  py-2  leading-[119%] rounded-full  w-[170px] p-2 bg-[#EF4D3C]">
                {" "}
                Generate Meals
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
     
      
    </>
  );
}

export default Main;
