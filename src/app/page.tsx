import React from "react";
import Headers from "./components/Registration.tsx/Header";
import Footer from "./components/Registration.tsx/Footer";
import EventDetails from "./components/Registration.tsx/EventDetails";

function Hello() {
  return (
    <div>
      <div>
        <Headers />
      </div>
      {/* <Home /> */}
<div><div className="min-h-screen bg-transparent backdrop-blur-md flex items-center justify-center hover:text-gray-700 cursor-pointer ">
      <EventDetails 
        title="Microsoft SDE Secrets: Tips by Anshima Choudhary for Landing Top Placements"
        date="Sunday, 22 October 2023"
        time="12:00 - 13:00 GMT+5:30"
        platform="YouTube"
        hostName="Campus Code"
        attendees={["Dhwani", "Amit", "Rohan", "Sakshi", "Megha", "Raj"]}
        eventImage="/img/poster.png"
      />
    </div></div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default Hello;
