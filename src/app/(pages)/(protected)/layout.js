
import Navbar from "@/components/Navbar/Navbar";
import ProgressBar from "@/components/Animation/ProgressBar";

import ScrollToTops from "@/components/Animation/ScrollToTop/ScrollToTop";

const ProtectedLayout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <Navbar />

      {children}

      <ScrollToTops />
    </>
  );
};

export default ProtectedLayout;
