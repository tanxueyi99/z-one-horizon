import LeftLogo from "../assets/imgs/Left_transparent.png";
import RightLogo from "../assets/imgs/Right_transparent.png";

function TopNavigation() {
  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-10">
        <div className="flex justify-between items-center">
          <div className="text-5xl px-6 text-[#F5AC00]">Home</div>
          <div className="flex justify-center items-center pt-2">
            <img
              className="w-22 h-22 image-neon-glow"
              src={LeftLogo}
              alt="LeftLogo"
              onClick={() => alert("Logo")}
            />
            <div className="text-6xl font-amiri pt-5 neon-glow text-orange-glass-text">
              Spirit
            </div>
            <img
              className="w-22 h-22 image-neon-glow"
              src={RightLogo}
              alt="RightLogo"
              onClick={() => alert("Logo")}
            />
          </div>
          <div className="text-5xl px-6 text-[#F5AC00]">Contact</div>
        </div>
      </nav>
    </>
  );
}

export default TopNavigation;
