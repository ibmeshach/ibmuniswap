import Footer from "../components/Footer";
import Header from "../components/Header";
import SwapComponent from "../components/SwapComponent";
import unavaliable from "../assets/unavaliable.png";

export default function Home() {
  return (
    <>
      <div className=" w-full min-h-screen my-0 gap-10 flex flex-col items-center justify-center bg-[#2D242F]">
        <Header />
        <SwapComponent />
        {/* <Footer /> */}
      </div>

      {/* <div className="bg-[#2D242F] md:hidden flex justify-center items-center h-screen w-screen flex-wrap">
        <h1 className="font-bold text-neutral-200 text-3xl text-center">
          Not avaliable on mobile switch to desktop
        </h1>
      </div> */}
    </>
  );
}
