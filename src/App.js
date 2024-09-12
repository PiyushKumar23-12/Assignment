import React from "react";
import Card1 from "../src/components/Card1";
import Card2 from "../src/components/Card2";
import Card3 from "../src/components/Card3";

const App = () => {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-screen bg-black p-4 md:p-8 lg:p-12 space-y-8 md:space-y-0 md:space-x-8">
      {/* Card1 section */}
      <div className="w-full md:w-1/3">
        <Card1 />
      </div>

      {/* Card2 and Card3 section */}
      <div className="flex flex-col space-y-8 w-full md:w-2/3">
        <div className="w-full">
          <Card2 />
        </div>
        <div className="w-full">
          <Card3 />
        </div>
      </div>
    </div>
  );
};

export default App;
