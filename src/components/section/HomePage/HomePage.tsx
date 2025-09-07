
import React from "react";
import Timer from "./Timer";
import Opsions from "./Opsions";


function HomePage() {
  

    return (
      <div>
        <div className="mx-4 sm:mx-10 lg:mx-20 flex flex-col lg:flex-row items-center justify-between mt-10 gap-8">
        <div className="-mt-4 w-full">
            <img src="/img/homeBg.svg" alt="home-bg" />
        </div>
        <Timer/>
        </div>  
        <Opsions/>
      </div>
  );
}

export default HomePage;
