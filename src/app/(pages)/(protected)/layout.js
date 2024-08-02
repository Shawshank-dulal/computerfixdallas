
import Navbar from "@/components/Navbar/Navbar";
import ProgressBar from "@/components/Animation/ProgressBar";

import ScrollToTops from "@/components/Animation/ScrollToTop/ScrollToTop";
import Footer from "@/components/Footer/Footer";

const ProtectedLayout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <Navbar />

      {children}
      <Footer/>

      <ScrollToTops />
    </>
  );
};

export default ProtectedLayout;
