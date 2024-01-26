import React from "react";

const Contacts = () => {
  return (
    <>
      <h1 className="text-3xl text-center font-bold p-12">
        Ansioso? Não percas mais tempo!
      </h1>
      <div className=" flex flex-row items-center justify-center">
        <div className="flex w-[50%]">
          <div className="grid h-20 flex-grow card bg-base-200 rounded-box place-items-center">
            <div className="flex flex-row gap-4 justify-center items-center">
              <img
                src="./img/call-me.png"
                className="w-10 h-10"
                alt="call me"
              />
              <span className="text-xl font-semibold tracking-wider">
                955 917 472
              </span>
            </div>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-20 flex-grow card bg-base-200 rounded-box place-items-center">
            <div className="flex flex-row gap-4 justify-center items-center">
              <img src="./img/email.png" className="w-10 h-10" alt="email" />

              <span className="text-xl font-semibold tracking-wider">
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
