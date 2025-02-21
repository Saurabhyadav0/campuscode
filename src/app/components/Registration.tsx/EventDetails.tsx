"use client";

import Image from "next/image";
import { Instagram, Twitter, Youtube, Calendar, Globe } from "lucide-react";
import Link from "next/link";

interface EventDetailsProps {
  title: string;
  date: string;
  time: string;
  platform: string;
  registrationClosed: boolean;
  hostName: string;
  attendees: string[];
  eventImage: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({
  title,
  date,
  time,
  platform,
  registrationClosed,
  hostName,
  attendees,
  eventImage,
}) => {
  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-6 bg-transparent backdrop-blur-md rounded-lg shadow-lg">
      {/* Left Column - Poster, Host, Attendees, Contact Info */}
      <div className="w-full md:w-1/3 space-y-6">
        {/* Event Poster */}
        <div className="w-full">
          <Image
            src={eventImage}
            alt={title}
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Hosted By */}
        <div>
          <p className="font-semibold text-gray-800">Hosted By:</p>
          <div className="border-t border-gray-400 my-2"></div>
          <div className="flex items-center space-x-11">
            <p className="text-blue-600 font-medium hover:text-gray-700 cursor-pointer">
              {hostName}
            </p>
            <div className="flex justify-end space-x-2 text-gray-500">
              <Link href="">
                <Instagram className="w-5 h-5 text-pink-500 hover:text-pink-700 cursor-pointer" />
              </Link>
              <Link href="">
                <Twitter className="w-5 h-5  text-blue-500 hover:text-blue-700 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

        {/* Attendees */}
        <div>
          <p className="font-semibold text-gray-800">566 Went</p>
          <div className="border-t border-gray-400 my-2"></div>
          <div className="flex -space-x-2 cursor-pointer hover:text-gray-400 mt-2">
            {attendees.slice(0, 5).map((attendee, index) => (
              <div
                key={index}
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm font-semibold"
              >
                {attendee[0]}
              </div>
            ))}
            {attendees.length > 5 && (
              <span className="w-10 h-10 bg-gray-400 text-white flex items-center justify-center rounded-full">
                +{attendees.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Contact & Report */}
        <div className="space-y-2 text-blue-600">
          <p className="cursor-pointer hover:text-gray-400">Contact the Host</p>
          <p className="cursor-pointer hover:text-gray-400">Report Event</p>
        </div>
      </div>

      {/* Right Column - Event Details */}
      <div className="w-full md:w-2/3 space-y-6">
        {/* Title & Date Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <div className="mt-2 text-gray-600">
            <p className="font-semibold">{date}</p>
            <p className="text-sm">{time}</p>
            <p className="flex items-center space-x-2">
              <Youtube className=" text-red-400 w-5 h-5 hover:text-red-900" />
              <span>{platform}</span>
            </p>
          </div>
        </div>

        {/* Registration Section */}
        <div className="p-4 rounded-lg shadow-md bg-transparent border border-gray-300">
          <div className="bg-gray-100 rounded px-2">Registration</div>
          <div className="flex items-center space-x-2 text-gray-700">
          <Calendar className="w-5 h-5 text-blue-500" />
            <h2 className="font-semibold text-black-800">Past Event</h2>
            <span>- This event ended 488 days ago</span>
          </div>

          <Link href="/register">
            <button
              type="button"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Register Now
            </button>
          </Link>
        </div>

        {/* About Event (Scrollable if long) */}
        <div className="h-60 overflow-y-auto bg-transparent p-4 border border-gray-300 rounded-lg">
          {/* About Event Title */}
          <p className="font-semibold text-gray-800 flex items-center gap-2">
        📌 About Event
          </p>
          <div className="border-t border-gray-400 my-2"></div>

          {/* Event Description */}
          <p className="mt-2 text-gray-700">
            🚀 <strong>Microsoft SDE Secrets: Tips by Anshima Choudhary</strong> 🚀
            <br /><br />
            Join us for an exclusive session with Anshima Choudhary, a Senior Software Development Engineer at Microsoft.
            If you're aspiring to excel in placement interviews and secure top positions, this is an opportunity you can't afford to miss!
          </p>

          {/* Session Highlights */}
          <p className="mt-4 font-semibold flex items-center gap-2">
             🔍 Session Highlights:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Gain Insider Tips: Learn from Anshima’s experience.</li>
            <li>Placement Interview Mastery: Excel in tech interviews.</li>
            <li>Career Insights: Build a successful software engineering career.</li>
          </ul>

          {/* Social Media Links */}
          <p className="mt-4 font-semibold text-gray-800 flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-500" /> Connect with Us:
          </p>
          <div className="text-blue-400 space-y-2">
            <p className="flex items-center gap-2">
              <Twitter className="w-5 h-5 text-blue-500" />
              <a href="https://twitter.com/SoarXNetwork" target="_blank" rel="noopener noreferrer"
                className="hover:text-gray-400">
                Follow on Twitter
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Instagram className="w-5 h-5 text-pink-500" />
              <a href="https://www.instagram.com/soarxnetwork/" target="_blank" rel="noopener noreferrer"
                className="hover:text-gray-400">
                Follow on Instagram
              </a>
            </p>
          </div>

          {/* Hashtags */}
          <p className="mt-4 text-gray-700">
            #Microsoft #TechCareer #PlacementSuccess #AnshimaChoudhary #SoarXNetwork #SoftwareDevelopment
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
