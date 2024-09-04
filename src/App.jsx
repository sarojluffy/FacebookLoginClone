import { useState } from "react";
import { IoIosCloseCircle, IoIosCloseCircleOutline } from "react-icons/io";

function App() {
  const [hovered, sethover] = useState(false);
  return (
    <>
      {/* <div className="bg-gray-300">
        <div className="mt-48">saroj</div>
      </div> */}
      <div className=" bg-gray-100 ">
        <div className="container flex py-32 mx-auto justify-center">
          <div className="left relative">
            <img
              src="../public/images/facebook.webp"
              className="w-40 absolute -top-10"
            ></img>
            <p className="text-4xl mt-4">Recent Logins</p>
            <p className="text-gray-600">
              Click your picture or add an account
            </p>

            {/* <div className="bg-green-500 rounded-full ">
              <div>
                <img src="../public/images/fb.jpeg"></img>{" "}
              </div>
            </div> */}
            <div className="flex flex-col mt-3">
              <div className="flex  ">
                <div
                  className=" flex w-[170px] rounded-lg flex-col overflow-hidden p-2 hover:shadow-2xl"
                  onMouseEnter={() => {
                    sethover(true);
                  }}
                  onMouseLeave={() => {
                    sethover(false);
                  }}
                >
                  <div className="relative">
                    <img
                      src="../public/images/saroj.jpg"
                      className="rounded-xl"
                    ></img>
                    {/* <div className=" w-16 absolute top-[2px] left-[2px] ">
                      <IoIosCloseCircle
                        color="#AFB4B8"
                        className="size-5 hover:size-8 "
                      />
                    </div> */}
                    <div
                      className="absolute top-1 left-1 "
                      onMouseEnter={() => {
                        sethover(true);
                      }}
                      onMouseLeave={() => {
                        sethover(false);
                      }}
                    >
                      {hovered ? (
                        <>
                          <IoIosCloseCircleOutline
                            color="white"
                            className="size-8 -top-4 -left-4 absolute"
                          />{" "}
                          {/* negative value used */}
                        </>
                      ) : (
                        <>
                          <IoIosCloseCircle
                            color="#AFB4B8"
                            className="size-5"
                          />{" "}
                          {/* react5 icons ko color ni change cha */}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="bg-white flex justify-center py-3">Saroj</div>
                </div>
                <div
                  className=" flex w-[170px] rounded-lg flex-col overflow-hidden p-2  hover:shadow-2xl"
                  onMouseEnter={() => {
                    sethover(true);
                  }}
                  onMouseLeave={() => {
                    sethover(false);
                  }}
                >
                  <div>
                    <img src="../public/images/fb.jpeg"></img>
                  </div>

                  <div className="bg-white flex justify-center py-3">
                    yourname
                  </div>
                </div>
                <div
                  className=" flex w-[170px] rounded-lg flex-col overflow-hidden p-2 hover:shadow-2xl"
                  onMouseEnter={() => {
                    sethover(true);
                  }}
                  onMouseLeave={() => {
                    sethover(false);
                  }}
                >
                  <div>
                    <img src="../public/images/fb.jpeg"></img>
                  </div>

                  <div className="bg-white flex justify-center py-3">
                    yourname
                  </div>
                </div>
              </div>
              <div className="flex">
                <div
                  className=" flex w-[170px] rounded-lg flex-col overflow-hidden p-2 hover:shadow-2xl"
                  onMouseEnter={() => {
                    sethover(true);
                  }}
                  onMouseLeave={() => {
                    sethover(false);
                  }}
                >
                  <div>
                    <img src="../public/images/fb.jpeg"></img>
                  </div>

                  <div className="bg-white flex justify-center py-3">
                    yourname
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col ml-20">
            <div className="right flex flex-col bg-white p-4 w-[400px] rounded-lg h-[350px] shadow-xl shadow-gray-[350]">
              <form className="flex flex-col ">
                <input
                  type="text"
                  placeholder="Email  or phone number"
                  className="p-3 border-[1px] border-slate-300 rounded-lg outline-0 active:outline-1 active:outline-blue-500 focus:outline-1 outline-blue-500 active:placeholder:text-black focus:placeholder:text-black " //important knowledge
                ></input>

                <input
                  type="password"
                  placeholder="password"
                  className="my-4 p-3 border-[1px] border-slate-300 rounded-lg outline-0 active:outline-1 active:outline-blue-500 focus:outline-1 outline-blue-500 "
                ></input>
                <button className="bg-saroj text-white rounded-lg p-[10px] text-xl font-bold">
                  Log in
                </button>
              </form>
              <center className="text-saroj p-3 text-sm ">
                Forgot password?
              </center>
              <hr className="mt-3" />
              <div className="flex justify-center pt-5">
                <button className="bg-sarojgreen text-white p-3 rounded-lg w-48 font-bold">
                  Create new account
                </button>
              </div>
            </div>
            <center className="mt-6">
              <p className="text-sm">
                <b>Create a Page</b> for a celebrity, brand or business.
              </p>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
