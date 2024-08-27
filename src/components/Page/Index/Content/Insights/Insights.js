import Blogs from "./Content/Blogs";
import Image from "next/image";
import Introduction from "./Content/Introduction/Introduction";
const Insights = () => {
  return (
    <div className="py-20 px-2 md:px-0 ">
      <div className="main_container inside_sidespace">
        <Introduction />

        <div className="relative">
          <Blogs />
          <Image
            style={{
              top: "50%",
              left: "49%",
              transform: "translate(-50%,-50%)",
            }}
            className="absolute animate-pulse z-[-1]"
            width={168}
            height={168}
            src="/images/icons/star2.svg"
            alt="gradient image"
          />
        </div>
      </div>
    </div>
  );
};

export default Insights;
