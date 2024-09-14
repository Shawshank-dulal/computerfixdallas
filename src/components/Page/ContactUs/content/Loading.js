import React from 'react'

const Loading = () => {
  return (
    <div className="FormRoot">
    <div className="FormField" name="Your full name">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <div className="bg-[#26292c] w-[220px] h-[15px] rounded-[4px] animate-pulse"></div>
   
   
      </div>
      <div>
        <div className='mt-3 bg-[#26292c] w-[250px] md:w-[360px] h-[28px] rounded-[4px] animate-pulse'/>
      </div>
    </div>

    <div className="FormField" name="email">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <div className="bg-[#26292c] w-[220px] h-[15px] rounded-[4px] animate-pulse"></div>
    
      </div>
      <div>
      <div className='mt-3 bg-[#26292c] w-[250px] md:w-[360px] h-[28px] rounded-[4px] animate-pulse'/>
      </div>
    </div>

    <div className="FormField" name="phonenumber">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <div className="bg-[#26292c] w-[220px] h-[15px] rounded-[4px] animate-pulse"> </div>
   
      </div>

      <div className='mt-3 bg-[#26292c] w-[250px] md:w-[360px] h-[28px] rounded-[4px] animate-pulse'/>
    </div>

    <div>
      <div className="bg-[#26292c] w-[220px] h-[15px] rounded-[4px] animate-pulse"></div>
      <div className='mt-3 bg-[#26292c] w-[250px] md:w-[360px] h-[28px] rounded-[4px] animate-pulse'></div>
    </div>

    <div className="FormField" name="Your Company">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <div className="bg-[#26292c] w-[220px] h-[15px] rounded-[4px] animate-pulse"></div>

      </div>
      <div>
      <div className='mt-3 bg-[#26292c] w-[250px] md:w-[360px] h-[28px] rounded-[4px] animate-pulse'/>
      </div>
    </div>

    <div className="FormField" name="Your Position">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <div className="bg-[#26292c] w-[220px] h-[15px] rounded-[4px] animate-pulse"></div>
   
      </div>
      <div>
      <div className='mt-3 bg-[#26292c] w-[250px] md:w-[360px] h-[28px] rounded-[4px] animate-pulse'/>
      </div>
    </div>

    <div className="FormField" name="question">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <div className="bg-[#26292c] w-[220px] h-[15px] rounded-[4px] animate-pulse">
         
        </div>
   
      </div>
      <div>
      <div className='mt-3 bg-[#26292c] w-[250px] md:w-[360px] h-[28px] rounded-[4px] animate-pulse'/>
      </div>
    </div>

    <div>
      <div
      
        className="bg-[#26292c] w-[220px] h-[25px] rounded-[4px] animate-pulse"
        style={{ marginTop: 10 }}
      >
       
      </div>
    </div>
  </div>
  )
}

export default Loading