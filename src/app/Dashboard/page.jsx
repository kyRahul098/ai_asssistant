"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Home, Compass, Settings, Rocket, Layers, Cpu, User, Menu } from "lucide-react";
import Link from "next/link";

export const Dashboard = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [introVideoFinished, setIntroVideoFinished] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const menuButtonClass = "w-full justify-start text-white text-lg px-6 py-4 rounded-lg bg-opacity-50 backdrop-blur-md";
  const headerButtonClass = "text-white text-lg px-4 py-2 rounded-lg bg-opacity-50 backdrop-blur-md";

  const menuItems = [
    { name: "Home", icon: <Home size={20} className="mr-2" /> },
    { name: "Explore", icon: <Compass size={20} className="mr-2" /> },
    { name: "Advance", icon: <Rocket size={20} className="mr-2" /> },
    { name: "Settings", icon: <Settings size={20} className="mr-2" /> },
    { name: "More AI Tools", icon: <Layers size={20} className="mr-2" />, path: "/AI" },
    { name: "Models", icon: <Cpu size={20} className="mr-2" /> },
  ];

  if (!showDashboard) {
    return (
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative group">
            <video
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg z-0 opacity-60 group-hover:opacity-80"
            >
              <source src="https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
            <Button
              onClick={() => {
                setIntroVideoFinished(true);
                setTimeout(() => setShowDashboard(true), 300);
              }}
              className="relative z-10 text-white font-semibold text-xl px-8 py-4 rounded-lg backdrop-blur-md bg-opacity-50"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>

      <div className="md:hidden p-4 relative z-20">
        <Button onClick={() => setShowMobileMenu(!showMobileMenu)} variant="ghost" className="text-white">
          <Menu size={28} />
        </Button>
        {showMobileMenu && (
          <aside className="absolute top-16 left-0 w-3/4 h-screen p-6 space-y-6 shadow-md backdrop-blur-md bg-opacity-50 bg-transparent">
            <h2 className="text-2xl font-bold mb-4 text-white">Menu</h2>
            {menuItems.map((item) => (
              item.path ? (
                <Link key={item.name} href={item.path} passHref>
                  <Button variant="ghost" className={menuButtonClass}>
                    {item.icon}
                    {item.name}
                  </Button>
                </Link>
              ) : (
                <Button key={item.name} variant="ghost" className={menuButtonClass}>
                  {item.icon}
                  {item.name}
                </Button>
              )
            ))}
          </aside>
        )}
      </div>

      <div className="min-h-screen flex flex-col md:flex-row relative z-10 text-white">
        <aside className="w-64 h-screen p-6 space-y-6 rounded-tr-3xl rounded-br-3xl shadow-md backdrop-blur-md bg-opacity-50 bg-transparent hidden md:block">
          <h2 className="text-2xl font-bold mb-4 text-white"></h2>
          {menuItems.map((item) => (
            item.path ? (
              <Link key={item.name} href={item.path} passHref>
                <Button variant="ghost" className={menuButtonClass}>
                  {item.icon}
                  {item.name}
                </Button>
              </Link>
            ) : (
              <Button key={item.name} variant="ghost" className={menuButtonClass}>
                {item.icon}
                {item.name}
              </Button>
            )
          ))}
        </aside>

        <div className="flex-1 p-4 md:p-8 space-y-8 md:ml-64">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <h2 className="text-xl text-gray-200 font-medium">My Workspace</h2>
                <h1 className="text-2xl md:text-4xl font-bold mt-1">Welcome back, Mr Rahul</h1>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <Button className={headerButtonClass}>
                <User size={20} className="mr-2" />
                Profile
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {["Topic Base Lecture", "Mock Interview", "Ques Ans Prep", "Learn Language", "Meditation"].map((item) => (
              <Card key={item} className="text-center shadow-md bg-white/30 backdrop-blur-md">
                <CardContent className="flex flex-col items-center py-6">
                  <div className="h-16 w-16 bg-[#e6e9f4]/40 rounded-full mb-3" />
                  <p className="text-lg font-medium text-white">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {/* <h3 className="text-2xl font-semibold mb-4 text-white">Your Previous Lectures</h3> */}
              <div className="space-y-4">
                {[
                  // { title: "NextJs", subtitle: "5 hours ago" },
                  // { title: "Digital Marketing", subtitle: "2 days ago" },
                  // { title: "React Native Basic", subtitle: "4 days ago" },
                ].map((lecture) => (
                  <div key={lecture.title} className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-medium text-white">{lecture.title}</p>
                      <p className="text-base text-gray-300">Topic Base Lecture • {lecture.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* <h3 className="text-2xl font-semibold mb-4 text-white">Feedback</h3> */}
              <div className="space-y-4">
                {[
                  // { title: "React Native", subtitle: "an hour ago" },
                  // { title: "React Native", subtitle: "an hour ago" },
                  // { title: "React Native Interview", subtitle: "3 hours ago" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-medium text-white">{item.title}</p>
                      <p className="text-base text-gray-300">Ques Ans Prep • {item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;