import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="py-20">
      {/* <h2 class="text-3xl font-bold tracking-tight text-[#c95701] sm:text-4xl">
        Message From The CEO
      </h2> */}
      <div className="relative overflow-hidden py-16 px-6 sm:px-12 md:px-24 lg:px-32">
      {/* Animated Vector Background */}
      <div className="absolute rounded-xl inset-0 bg-gradient-to-r from-[#c95701] via-[#c9580100] to-[#000] opacity-30 animate-pulse z-0"></div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#c95701] text-center mb-6">
          Message from the CEO
        </h1>
<div className="flex justify-center my-5">
<Image width={350} height={350} src="/images/user/1.webp" alt="" class="  rounded-xl  shadow-lg"/>

</div>
        <p className="text-lg text-gray-100 leading-relaxed text-center max-w-2xl mx-auto">
          Dear customers and partners, we are thrilled to have you with us as we continue to innovate and provide exceptional services to meet your needs. Our commitment to excellence drives everything we do, and we are grateful for your trust in our company. We look forward to achieving greater heights together.
        </p>
      </div>

      {/* Add a subtle animation to elements */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-gradient-to-tr from-yellow-400 to-red-500 opacity-50 animate-bounce"></div>
      <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-gradient-to-bl from-teal-300 to-indigo-400 opacity-50 animate-ping"></div>
    </div>
    </div>
  );
};

export default Team;
