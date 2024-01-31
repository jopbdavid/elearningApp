import React from "react";

const Remote = () => {
  return (
    <>
      <div className="w-2/3 ">
        <h1 className="text-3xl text-center font-bold p-8">
          EM QUALQUER LADO!
        </h1>
        <div className=" flex flex-row items-center justify-center">
          <div className="flex w-2/3">
            <div className="grid h-20 flex-grow card bg-accent rounded-box place-items-center">
              <div className="flex flex-row gap-4 justify-center items-center">
                <img
                  src="./img/remote.png"
                  className="w-12 h-12"
                  alt="call me"
                />
                <span className="text-xl font-semibold tracking-wider">
                  ONLINE
                </span>
              </div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-20 flex-grow card bg-accent rounded-box place-items-center">
              <div className="flex flex-row gap-4 justify-center items-center">
                <img
                  src="./img/meeting.png"
                  className="w-12 h-12"
                  alt="email"
                />

                <span className="text-xl font-semibold tracking-wider">
                  PRESENCIAL
                </span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-3xl text-center font-bold p-6">COMO QUISERES!</h1>
        <div className=" flex flex-row items-center justify-center ">
          <div className="flex w-[50%]">
            <div className="grid h-20 flex-grow card bg-accent rounded-box place-items-center">
              <div className="flex flex-row gap-4 justify-center items-center">
                <img
                  src="./img/remote.png"
                  className="w-12 h-12"
                  alt="call me"
                />
                <span className="text-xl font-semibold tracking-wider">
                  PESSOAL
                </span>
              </div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-20 flex-grow card bg-accent rounded-box place-items-center">
              <div className="flex flex-row gap-4 justify-center items-center">
                <img
                  src="./img/meeting.png"
                  className="w-12 h-12"
                  alt="email"
                />

                <span className="text-xl font-semibold tracking-wider">
                  GRUPO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Remote;
