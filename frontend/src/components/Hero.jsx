import curve from "../assets/curve.png";
import calendar from "../assets/calendar-hero.png";
import Button from "./Button"; 
import { ScrollParallax } from "react-just-parallax";
import Notification from "./Notification";
import { BackgroundCircles } from "../assets/design/Hero";
import {CircleHelp} from "lucide-react";

import React, { useRef, useState } from "react";
import { collection, addDoc} from 'firebase/firestore';
import { db } from './firebase.js';


import avatar1 from "../assets/notification/image-2.png";
import avatar2 from "../assets/notification/image-3.png";
import avatar3 from "../assets/notification/image-4.png";

/**
 * Hero component for the landing page.
 * Displays a headline, subheadline, call-to-action button, and image with notifications.
 * The component also includes animated background circles.
 */

const Hero = () => {
  const parallaxRef = useRef(null);
  const [newItem, setNewItem] = useState({ email: ''});
  const [showPopup, setShowPopup] = useState(false);

  
  const addEmail = async (e) => {
    e.preventDefault();
    if (newItem.email !== '') {
      try {
        await addDoc(collection(db, 'emails'), {
          email: newItem.email.trim(),
        });
        setNewItem({ email: '' });
        setShowPopup(true); // Show popup
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } 
  };
  

  return (
    <div id="hero" className="container relative" ref={parallaxRef}>

       {/* POP UP */}
        {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-n-1 animate-fadeIn mx-5 min-h-[15rem] p-[2.4rem] rounded rounded-2xl">
              <p className="font-code text-2xl font-bold text-green-700 uppercase tracking-wider flex items-center group">
                Thank you for joining! We'll keep you updated.
              </p>
              <Button onClick={() => setShowPopup(false)} className="my-10">
                Close
              </Button>
            </div>
          </div>
        )}

      {/* Logo, hero headline and call to action button */}
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.5rem] md:mb-15 lg:mb-[6rem]">
        <h1 className="h1 mb-6">
          Unified Calendars, &nbsp;
          <span className="relative inline-block">
            Simplified
            <img
              src={curve}
              className="hidden md:block absolute top-full left-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
            />
          </span>
          &nbsp;Lives
        </h1>
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-4 lg:mb-8">
          Effortless scheduling and collaboration with shared calendars. 
          Optimize your time and productivity.
        </p>

        {/* Form for email waitlist */}
        <form onSubmit={addEmail} className="flex px-5 flex-col sm:flex-row items-center justify-center relative z-20">
          <input
            className='w-full sm:w-auto mb-4 sm:mb-0 sm:mr-5 rounded-md p-2 border z-20'
            type='email'
            placeholder='Enter your email'
            value={newItem.email}
            onChange={(e) => setNewItem({ ...newItem, email: e.target.value })}
            required
          />
          <Button type='submit' white className="z-20">
            Join waitlist
          </Button>
        </form>
      </div>

      {/* Image with notifications and parallax effect */}
      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient custom-container">
          <div className="relative rounded-2xl overflow-hidden bg-white">
            <img
              src={calendar}
              className="w-full h-auto object-cover rounded-2xl"
              alt="Calendar picture"
            />
          </div>

          {/* Notification on the middle right */}
          <div className="absolute backdrop-blur left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 flex items-center h-auto px-6 py-4 bg-white rounded-[1.7rem] shadow-lg text-base" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}>
            <CircleHelp className="w-6 h-6 mr-4" />
            <div className="flex-1">
              Where do I put my study group meeting?
            </div>
          </div>

            {/* message on top of picture - middle right */}
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden lg:block absolute right-[-3rem] top-1/2 transform -translate-y-1/2 md:w-[20rem] z-10">
                <Notification
                  className="w-full"
                  title="Meeting Accepted"
                  time="1m ago"
                  avatars={[avatar1, avatar2, avatar3]}
                  message="3 people accepted Friday meeting invite."
                />
              </div>
            </ScrollParallax>

            {/* Notification on top of the picture - top left */}
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden lg:block absolute left-[-3rem] top-[17rem] transform -translate-y-1/2 md:w-[20rem] z-10">
                <Notification
                  className="w-full"
                  title="Anniversary Reminder"
                  time="2hrs ago"
                  avatars={[avatar2]}
                  message="Your first anniversary is on Monday."
                />
              </div>
            </ScrollParallax>
        </div>
        {/* Background circles animation */}
       
      <div className="hidden lg:block">
        <BackgroundCircles parallaxRef={parallaxRef} />
        </div>
      </div>
    </div>
     

  );
};

export default Hero;
