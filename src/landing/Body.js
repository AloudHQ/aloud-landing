import React from 'react'
import Ellipse1 from "../assets/Ellipse 1.png"
import Ellipse2 from "../assets/Ellipse 2.png"
import Ellipse3 from "../assets/Ellipse 3.png"
import Ellipse4 from "../assets/Ellipse 4.png"
import Ellipse5 from "../assets/Ellipse 5.png"

const Body = () => {
  return (
    <main className='mt-20'>
      <div>
        {/* Overlapping Images Section */}
        <div className="flex justify-center items-center mt-56 relative">
          <img src={Ellipse1} className="absolute ml-[-7rem]" alt="" />
          <img src={Ellipse2} className="absolute ml-[-2rem]" alt="" />
          <img src={Ellipse3} className="absolute ml-[2rem]" alt="" />
          <img src={Ellipse4} className="absolute ml-[6rem]" alt="" />
          <img src={Ellipse5} className="absolute ml-[10rem]" alt="" />
        </div>

      
        <div className="flex font-inter flex-col items-center mt-24 space-y-8">
          {/* Main Heading */}
          <p className="text-5xl text-customTransparentBlue font-inter font-semibold text-center leading-tight">
            Voice Only. Pure <br /> Connection.
          </p>

         
          <p className="text-xl text-customGray text-center leading-tight font-inter font-normal">
            Connect with voices, not screens. Experience the <br />
            raw power of voice-only communication.
          </p>

         
          <button className="px-8 py-3 text-lg font-inter font-medium text-customWhite bg-customTransparentBlue rounded-full hover:bg-customGray">
            Get Started
          </button>
        </div>

        <div className='mt-28'>
          <p className="text-xl text-customGray text-center leading-tight font-inter font-medium">
            Aloud is a unique voice-only chat app designed to foster authentic, real- <br />
            time conversations. Forget the distractions of text and video; here, your <br />
            voice is the star.
          </p>
        </div>

        <div className="flex space-x-8 p-4 justify-center items-stretch mt-36 font-inter font-medium">
          {[
            {
              bgColor: '#E8E6E2A3',
              textColor: '#757171',
              titleColor: '#ADADAC',
              text: 'Share quick thoughts, ideas, and feelings with concise, under-a-minute voice messages.',
              title: 'Less',
            },
            {
              bgColor: '#DCFFDE',
              textColor: '#585858',
              titleColor: '#A3E2A5',
              text: 'Connect with up to 6 like-minded individuals in exclusive, private groups.',
              title: 'Roundtable',
            },
            {
              bgColor: '#F5F5F5',
              textColor: '#7C7C7C',
              titleColor: '#DADADA',
              text: 'Join live, interactive voice-only roundtables on a variety of topics.',
              title: 'Chat',
            },
          ].map((item, index) => (
            <div key={index} className={`bg-[${item.bgColor}] rounded-lg p-4 pl-6 w-1/6 flex flex-col justify-between`}>
              <p className={`text-[${item.textColor}]`}>{item.text}</p>
              <p className={`mt-40 text-[${item.titleColor}] text-[45px] pl-2`}>{item.title}</p>
            </div>
          ))}
        </div>



      </div>

    </main>
  )
}

export default Body
