import React from "react";

const FeatureCard = () =>{
     return(
        <>
        {/* Feature Cards Section */}
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
            <div
              key={index}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
              className="rounded-[27px] p-4 pl-6 w-1/2 flex flex-col justify-between"
            >
              <p>{item.text}</p>
              <p style={{ color: item.titleColor }} className="mt-40 text-[45px] pl-2">{item.title}</p>
            </div>
          ))}
        </div>
      
        
        </>
     )
}

export default FeatureCard