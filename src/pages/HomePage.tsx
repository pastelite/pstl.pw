import { HTMLAttributes, SetStateAction } from "react";
import logo from "../logo.svg";

interface HomePageProps extends HTMLAttributes<HTMLDivElement> {
  setIsZoom: React.Dispatch<SetStateAction<boolean>>;
}
export default function HomePage({ setIsZoom, ...otherProps }: HomePageProps) {
  return (
    <div
      {...otherProps}
      className="max-w-4xl w-screen p-4 flex flex-col md:flex-row-reverse items-center justify-between"
    >
      <img
        src={logo}
        onMouseOver={() => setIsZoom(true)}
        onMouseLeave={() => setIsZoom(false)}
        className="pastel-logo"
        alt="logo"
      />
      <div>
        <div className="font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-tr from-primary to-primary-2 ">
          pastelite.
        </div>
        <div className=" text-2xl">just a normal guy who like codes</div>
      </div>
    </div>
  );
}
