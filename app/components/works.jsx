import React from "react";
import Image from "next/image";
import Carousel2 from "./carousal";
function Works() {
  return (
    <>
      <div className="container mx-auto max-w-[1200px] md:mt-[150px] mt-[200px]">
      
        <div className="flex w-full px-3 max-lg:hidden overflow-auto gap-8  items-center justify-between xl:mt-0 mt-20 mb-0  lg:mb-20">
          <Image src="/images/image 8.png" alt="" width={130} height={48} />
          <Image src="/images/image 9.png" alt="" width={100} height={48} />
          <Image src="/images/image 10.png" alt="" width={97} height={48} />
          <Image src="/images/image 11.png" alt="" width={62} height={48} />
          <Image src="/images/image 12.png" alt="" width={157} height={48} />
          <Image src="/images/image 13.png" alt="" width={82} height={48} />
        </div>
        <div className="w-full px-3  lg:!hidden block overflow-hidden gap-8  items-center justify-between lg:mb-0 mb-20"><Carousel2/></div>
        <div className=" flex max-lg:flex-col  max-md:gap-6 px-2  gap-8  mx-auto items-center">
          <div className="flex flex-col w-full items-start gap-4">
            <h3 className="font-atma max-md:text-3xl text-5xl font-extrabold">
              How We Automate Your{" "}
              <span className=" xl:block">Meal Planning</span>
            </h3>
            <p className="max-w-[580px] font-dm-sans max-md:text-base py-2 text-[#4E4E4E] ">
              Eat This Much creates personalized meal plans based on your food
              preferences, budget, and schedule. Reach your diet and nutritional
              goals with our calorie calculator, weekly meal plans, grocery
              lists and more.
            </p>
            <div className="flex w-full max-sm:flex-col gap-3 font-semibold items-center p-4 rounded-2xl bg-[#FFF1F0]">
              <Image
                src="/images/Frame 130.png"
                alt=""
                height={32}
                width={32}
                className="max-w-full"
              />
              <p className="font-medium font-atma text-base max-sm:text-lg max-sm:text-center leading-[110%]">
                Turn meal planning into an effortless and magical experience
              </p>
            </div>
            <div className="flex w-full max-sm:flex-col gap-3 font-semibold items-center p-4 rounded-2xl bg-[#FFF1F0]">
              <Image
                src="/images/Frame 130 (1).png"
                className="max-w-[]"
                height={32}
                width={32}
                alt=""
              />
              <p className="font-medium font-atma text-base max-sm:text-lg max-sm:text-center leading-[110%]">
                Provide an endless supply of delicious recipes specific to your
                needs
              </p>
            </div>
            <div className="flex w-full max-sm:flex-col gap-3 font-semibold items-center p-4 rounded-2xl bg-[#FFF1F0]">
              <Image
                src="/images/Frame 130 (2).png"
                className="max-w-[]"
                height={32}
                width={32}
                alt=""
              />
              <p className="font-medium font-atma text-base max-sm:text-lg max-sm:text-center leading-[110%]">
                Provide an endless supply of delicious recipes specific to your
                needs
              </p>
            </div>
            <div className="w-full max-sm:text-center">
              <button className="text-white font-atma text-base hover:bg-black duration-200 max-md:text-[14px] mt-2 leading-[119%]  sm:py-4 py-2  font-semibold rounded-full  w-[170px] p-2 bg-[#EF4D3C]">
                {" "}
                Generate Meals
              </button>
            </div>
          </div>
          <div className="w-full text-center">
            <Image
              src="/images/Illustration.png"
              className="text-center mx-auto max-lg:w-3/4"
              height={590}
              width={588}
              alt=""
            />
          </div>
        </div>
      </div>
      <div id="out-feature" className="pb-36">
        <div className="w-full  relative  lg:pt-30 lg:pb-28">
          <Image
            src="/images/Vector.png"
            className="absolute z-[-1] max-sm:w-20 sm:top-20"
            height={261}
            width={150}
            alt=""
          />
        </div>
        <div className=" w mx-auto max-w-[1200px]">
          <div className="flex px-2 w-full bottom-0 flex-col items-center justify-center">
            <h1 className="text-5xl max-md:text-3xl font-atma font-bold">
              Our Features
            </h1>
            <p className="max-w-[650px] font-normal max-md:max-w-[380px] mt-4 font-dm-sans max-md:text-base text-[#4E4E4E] text-center ">
              Eat This Much creates personalized meal plans based on your food
              preferences, budget, and schedule. Reach your diet and nutritional
              goals with our calorie calculator, weekly meal plans, grocery
              lists and more.
            </p>
            <div className="flex gap-6 max-md:mt-7 max-md:flex-col md:max-w-[800px] justify-between mt-10 lg:max-w-[900px] xl:max-w-[1200px] ">
              <div className="w-full">
                <div className="flex flex-col md:gap-2 items-start max-md:items-center">
                  <Image
                    src="/images/calendar.png"
                    alt=""
                    height={64}
                    width={64}
                    className="max-md:w -6"
                  />
                  <h2 className="text-2xl my-4 font-atma max-md:text-lg font-extrabold">
                    Meal Prep Scheduling
                  </h2>
                </div>
                <p className="text-[#4E4E4E] max-md:text-center text-base font-dm-sans max-md:text-base">
                  A tool that helps students schedule their meal preparation
                  throughout the week. It could integrate with digital calendars
                  and provide reminders for meal prep times.
                </p>
              </div>
              <div className="w-full">
                <div className="flex flex-col md:gap-2 items-start max-md:items-center">
                  <Image
                    src="/images/document-filter.png"
                    height={64}
                    width={64}
                    alt=""
                    className="max-md:w -6"
                  />
                  <h2 className="text-2xl my-4 font-atma max-md:text-lg font-extrabold">
                    AI-optimized Nutrition
                  </h2>
                </div>
                <p className="text-[#4E4E4E] max-md:text-center text-base font-dm-sans max-md:text-base">
                  Your calorie and macronutrient requirements will automatically
                  adjust over time based on how {`you\re`} progressing toward
                  your weight goal, ensuring that your meal plan.
                </p>
              </div>
              <div className="w-full">
                <div className="flex flex-col md:gap-2 items-start max-md:items-center">
                  <Image
                    src="/images/user-tick.png"
                    alt=""
                    height={64}
                    width={64}
                    className="max-md:w -6"
                  />
                  <h2 className="text-2xl my-4 font-atma max-md:text-lg font-extrabold">
                    Personalized Meal Plan
                  </h2>
                </div>
                <p className="text-[#4E4E4E] max-md:text-center text-base font-dm-sans max-md:text-base">
                  Based on your school{``}s menu and your personal preferences,
                  receive a weekly meal plan. This plan balances {`What's`}{" "}
                  offered at school with additional meal suggestions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="client">
        <Image
          src="/images/Vector (3).png"
          height={190}
          width={1440}
          className="w-full translate-y-1 "
          alt=""
        />
        <div className="bg-[#FFEFED] px-2 pb-16 md:pb-20">
          <div className="container mx-auto max-w-[1200px]">
            <div className="flex bg-[#FFEFED] leading-none  w-full flex-col items-center justify-center">
              <h1 className="text-5xl max-md:text-3xl font-atma font-bold">
                What our client says
              </h1>
              <p className="max-w-[588px] text-base leading-[150%] max-md:max-w-[380px] max-md:mt-2 md:mt-4 font-dm-sans text-[#4E4E4E] text-center">
                Trusted SEO Agency In BrisbaneWork with Paul Napper and outsmart
                your competitors to the top of Google with an SEO strategy
                (without the BS).
              </p>
            </div>
            <div className=" max-md:flex-col   gap-10 md:gap-4 max-md:mt-10 mt-20 bg-[#FFEFED]  mx-auto hidden md:flex justify-between">
              <div className="bg-white flex flex-col text-center gap-3 md:gap-4 w-[90%] mx-auto p-4 lg:p-6 rounded-lg relative">
                <div className="rounded-full bg-white md:w-20 md:h-20 h-14 w-14 flex items-center justify-center absolute shadow-base top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2">
                  <Image
                    src="/images/image 9.png"
                    height={28}
                    width={60}
                    className="w-full"
                    alt=""
                  />
                </div>
                <Image
                  src="/images/Group.png"
                  height={40}
                  width={40}
                  className="w-[40px] max-md:w-4 mx-auto mt-6 md:mt-11"
                  alt=""
                />
                <p className=" max-md:text-lg text-xl leading-[160%] font-semibold font-atma">
                  Mind-blowing Services
                </p>
                <p className="font-dm-sans max-md:text-base leading-[167%] text-[#424242]">
                  Viverra vel vitae libero iaculis. Tellus vel volutpat sem sit
                  egestas aliquam. Pharetra dictum volutpat non velit lorem
                  vitae amet.
                </p>
                <div className="flex items-center justify-center mt-2">
                  <div>
                    <h1 className="text-lg max-md:text-base leading-[167%] font-semibold font-atma">
                      Elezabeth Sarian
                    </h1>
                    <p className="text-[#424242] max-md:text-sm leading-[142%] mt-[5px] font-dm-sans text-sm">
                      Student at University of Connecticut
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white flex flex-col text-center gap-3 md:gap-4 w-[90%] mx-auto p-4 lg:p-6 rounded-lg relative">
                <div className="rounded-full bg-white md:w-20 md:h-20 h-14 w-14 flex items-center justify-center absolute shadow-base top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2">
                  <Image
                    src="/images/image 8.png"
                    height={28}
                    width={60}
                    className="w-full"
                    alt=""
                  />
                </div>
                <Image
                  src="/images/Group.png"
                  height={40}
                  width={40}
                  className="w-[40px] max-md:w-4 mx-auto mt-6 md:mt-11"
                  alt=""
                />
                <p className=" max-md:text-lg text-xl leading-[160%] font-semibold font-atma">
                  Mind-blowing Services
                </p>
                <p className="font-dm-sans max-md:text-base leading-[167%] text-[#424242]">
                  Viverra vel vitae libero iaculis. Tellus vel volutpat sem sit
                  egestas aliquam. Pharetra dictum volutpat non velit lorem
                  vitae amet.
                </p>
                <div className="flex items-center justify-center mt-2">
                  <div>
                    <h1 className="text-lg max-md:text-base leading-[167%] font-semibold font-atma">
                      Elezabeth Sarian
                    </h1>
                    <p className="text-[#424242] max-md:text-sm leading-[142%] mt-[5px] font-dm-sans text-sm">
                      Student at University of Connecticut
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white flex flex-col text-center gap-3 md:gap-4 w-[90%] mx-auto p-4 lg:p-6 rounded-lg relative">
                <div className="rounded-full bg-white md:w-20 md:h-20 h-14 w-14 flex items-center justify-center absolute shadow-base top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2">
                  <Image
                    src="/images/image 11.png"
                    height={28}
                    width={60}
                    className="w-full"
                    alt=""
                  />
                </div>
                <Image
                  src="/images/Group.png"
                  height={40}
                  width={40}
                  className="w-[40px] max-md:w-4 mx-auto mt-6 md:mt-11"
                  alt=""
                />
                <p className=" max-md:text-lg text-xl leading-[160%] font-semibold font-atma">
                  Mind-blowing Services
                </p>
                <p className="font-dm-sans max-md:text-base leading-[167%] text-[#424242]">
                  Viverra vel vitae libero iaculis. Tellus vel volutpat sem sit
                  egestas aliquam. Pharetra dictum volutpat non velit lorem
                  vitae amet.
                </p>
                <div className="flex items-center justify-center mt-2">
                  <div>
                    <h1 className="text-lg max-md:text-base leading-[167%] font-semibold font-atma">
                      Elezabeth Sarian
                    </h1>
                    <p className="text-[#424242] max-md:text-sm leading-[142%] mt-[5px] font-dm-sans text-sm">
                      Student at University of Connecticut
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="personalized" className="container mx-auto max-w-[1200px] mt-32">
        <div className="flex max-md:flex-col px-2 items-center  gap-6 lg:gap-0">
          <div className="w-full flex items-start flex-col gap-6">
            <h1 className="text-5xl font-atma max-md:text-3xl leading-none font-extrabold">
              Receive Your <br />
              Personalized Meal Plan
            </h1>
            <p className="text-[#4E4E4E] font-ds max-md:text-base text-base leading-[150%]">
              Based on your {`school\s`} menu and your personal preferences,
              receive a weekly meal plan. This plan balances{`What's`} offered
              at school with additional meal suggestions to ensure nutritional
              completeness.
            </p>
            <button className="text-white font-atma text-base hover:bg-black duration-200 max-md:!text-[14px] sm:mt-7 font-semibold  sm:py-4  py-2  leading-[119%] rounded-full  w-[170px] p-2 bg-[#EF4D3C]">
              {" "}
              Generate Meals
            </button>
          </div>
          <div className="w-full flex items-center justify-center relative">
            <Image
              src="/images/Vector (1).png"
              width={500}
              height={360}
              className="max-md:w-[270px]"
              alt=""
            />
            <Image
              src="/images/Frame 30.png"
              height={364}
              width={510}
              className="absolute top-3 max-md:w-[300px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
