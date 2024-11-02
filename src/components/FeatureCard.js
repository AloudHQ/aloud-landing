import React from "react";

const FeatureCard = () => {
  return (
    <>
      {/* Feature Cards Section */}
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 p-4 justify-center items-center mt-36 font-inter font-medium">
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
            className="rounded-[27px] w-[340px] h-[370px] -tracking-3 p-4 pt-9 max-w-md flex flex-col justify-between"
          >
            <p>{item.text}</p>
            <p
              style={{ color: item.titleColor }}
              className="mt-auto text-[45px] pl-2 -tracking-3"
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeatureCard;
