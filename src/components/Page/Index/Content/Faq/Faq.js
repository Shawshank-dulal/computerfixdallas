

import FaqContent from "./Content/FaqContent";
import Image from "next/image";
import Introduction from "./Content/Introduction/Introduction";


const Faq = () => {

  return (
    <div
      id="faqs"
      className=" inside_sidespace flex flex-col justify-center items-center w-full"
    >
      <Introduction/>

      <div
        className="relative"
  
      >
        <div>
          <FaqContent />
          <div>
            <Image
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              className="absolute  z-[-10]"
              width={682}
              height={682}
              src="/images/bg/ell.svg"
              alt="gradient image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
