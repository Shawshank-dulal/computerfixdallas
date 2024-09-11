import { ServicesData } from "@/db/Services";
import Image from "next/image";
import "./style.css";
import { fetchhomeservices } from "@/utils/homeservices";
import config from "@/config";
const ServiceItems = async () => {
  const fetcheData=await fetchhomeservices()
  const data=fetcheData?.homeservices?.data
  console.log('new datas',data)
  return (
    <div className="relative grid  sm:grid-cols-2 md:grid-cols-3 place-content-between gap-6 gap-y-12 mt-14">
      <Image
        style={{
          top: "50%",
          left: "31%",
          transform: "translate(-50%,-50%)",
        }}
        className="absolute animate-pulse2  z-[-1]"
        width={168}
        height={168}
        src="/images/icons/star2.svg"
        alt="gradient image"
      />
      <Image
        style={{
          top: "50%",
          left: "65%",
          transform: "translate(-50%,-50%)",
        }}
        className="absolute animate-pulse z-[-1]"
        width={168}
        height={168}
        src="/images/icons/star2.svg"
        alt="gradient image"
      />

{data.length > 0 && data.map((item, index) => {
        return (
          <div key={index} className=" flex flex-col gap-2">
            <Image width={50} height={50} src={`${config.api}${item?.attributes?.image?.data?.attributes?.url}`} alt={item?.attributes?.title} />
            <p>{item?.attributes?.title}</p>
            <p className="text-[#b4b2b3]">{item?.attributes?.summary}</p>
            <p></p>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceItems;
