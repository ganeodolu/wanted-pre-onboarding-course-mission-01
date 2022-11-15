import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineDashboard,
  AiOutlineLogout,
  AiOutlineUser
} from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";

export default function Sider() {
  return (
    <div className="w-1/4 h-screen bg-myDarkBlue text-white ">
      <h1 className="w-full flex justify-evenly items-center text-5xl my-5 mx-auto font-bold">
        <Image
          src="/logo.png"
          alt="PREFACE Logo"
          width={50}
          height={50}
          className="rounded-md"
        />
        PREFACE
      </h1>
      <nav className="flex flex-wrap justify-center text-xl text-neutral-500">
        <span className="flex items-center w-full h-16 pl-8 hover:bg-myBlue hover:text-white">
          <AiOutlineDashboard className="mr-3" /> 대시 보드
        </span>
        <Link href="/accounts">
          <span className="flex items-center w-full h-16 pl-8 hover:bg-myBlue hover:text-white">
            <VscGraphLine className="mr-3" /> 투자 계좌
          </span>
        </Link>
        <Link href="/users">
          <span className="flex items-center w-full h-16 pl-8 hover:bg-myBlue hover:text-white">
            <AiOutlineUser className="mr-3" /> 사용자
          </span>
        </Link>
        <Link href="/">
          <span className="flex items-center w-full h-16 pl-8 hover:bg-myBlue hover:text-white">
            <AiOutlineLogout className="mr-3" /> 로그아웃
          </span>
        </Link>
      </nav>
    </div>
  );
}
