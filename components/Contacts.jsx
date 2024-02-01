import React from "react";

const Contacts = () => {
  return (
    <>
      <h1 className="md:text-3xl text-xl text-center font-bold p-12">
        Ansioso? Não percas mais tempo!
      </h1>
      <div className=" flex items-center justify-center">
        <div className="flex md:flex-row flex-col md:w-[60%]">
          <div className="grid h-20 flex-grow card bg-base-200 rounded-box place-items-center">
            <div className="flex flex-row gap-4 justify-center items-center">
              <img
                src="./img/call-me.png"
                className="w-10 h-10"
                alt="call me"
              />
              <span className="md:text-xl text-md font-semibold tracking-wider">
                955 917 472
              </span>
            </div>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-20 flex-grow card bg-base-200 rounded-box place-items-center mt-8 md:mt-0">
            <div className="flex flex-row gap-4 justify-center items-center">
              <img src="./img/email.png" className="w-10 h-10" alt="email" />

              <span className="md:text-xl text-md font-semibold tracking-wider">
                jopbdavid@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
