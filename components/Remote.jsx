import React from "react";

const Remote = () => {
  return (
    <>
      <div className="md:w-2/3">
        <h1 className="md:text-3xl text-xl text-center font-bold p-8">
          EM QUALQUER LADO!
        </h1>
        <div className=" flex flex-row items-center justify-center">
          <div className="flex md:w-2/3 w-10/12">
            <div className="grid md:h-20 h-16  flex-grow card bg-accent rounded-box place-items-center ">
              <div className="flex flex-row gap-4 justify-center items-center">
                <img
                  src="./img/remote.png"
                  className="md:w-12 md:h-12 w-8 h-8"
                  alt="call me"
                />
                <span className="md:text-lg lg:text-xl text-md font-semibold tracking-wider">
                  ONLINE
                </span>
              </div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid md:h-20 h-16 flex-grow card bg-accent rounded-box place-items-center">
              <div className="flex flex-row gap-4 justify-center items-center">
                <img
                  src="./img/person.png"
                  className="md:w-12 md:h-12 w-8 h-8"
                  alt="email"
                />

                <span className="md:text-lg lg:text-xl text-md font-semibold tracking-wider">
                  PRESENCIAL
                </span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="md:text-3xl text-xl text-center font-bold p-2 md:p-6">
          COMO QUISERES!
        </h1>
        <div className=" flex flex-row items-center justify-center ">
          <div className="flex md:w-[65%] lg:w-[50%] w-10/12 pb-2">
            <div className="grid md:h-20 h-16 flex-grow card bg-accent rounded-box place-items-center">
              <div className="flex flex-row gap-4 justify-center items-center">
                <img
                  src="./img/individual.png"
                  className="md:w-12 md:h-12 w-8 h-8"
                  alt="individual"
                />
                <span className="md:text-lg lg:text-xl text-md font-semibold tracking-wider">
                  INDIVIDUAL
                </span>
              </div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid md:h-20 h-16 flex-grow card bg-accent rounded-box place-items-center">
              <div className="flex flex-row gap-4 justify-center items-center">
                <img
                  src="./img/meeting.png"
                  className="md:w-12 md:h-12 w-8 h-8"
                  alt="group"
                />

                <span className="md:text-lg lg:text-xl text-md font-semibold tracking-wider">
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
