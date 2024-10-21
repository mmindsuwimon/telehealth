"use client";
import { Button } from "antd";
import React from "react";
import { BiEnvelope } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { LuBell, LuRefreshCw } from "react-icons/lu";
import { RiUser3Line } from "react-icons/ri";
import "../../globals.css";
import { TbSettings } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";
import { PiMoonBold } from "react-icons/pi";
import Image from "next/image";
import usa from "../../usa.png";
import { menuListIconProps, menuListProps } from "@/app/type/navbarType";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuList: menuListProps[] = [
  {
    name: "Dashboard",
    prefix: <GoHome />,
    link: "/dashboard",
  },
  {
    name: "Users",
    prefix: <RiUser3Line />,
    link: "/users",
  },
  {
    name: "Transaction & Reports",
    prefix: <CgFileDocument />,
    link: "/transaction-reports",
  },
  {
    name: "Setting",
    prefix: <TbSettings />,
    link: "/setting",
  },
  {
    name: "Dispatch Management",
    prefix: <LuRefreshCw />,
    link: "dispatch-mangement",
  },
];

const menuListIcon = [
  {
    name: "dark mode",
    prefix: <PiMoonBold />,
  },
  {
    name: "language",
    prefix: null,
  },
  {
    name: "messenger",
    prefix: <BiEnvelope />,
  },
  {
    name: "notifination",
    prefix: <LuBell />,
  },
  {
    name: "userInfo",
    prefix: <FiUser />,
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="shadow-md rounded-lg px-4 py-[16px] flex justify-between ">
      <div className=" gap-12 flex justify-between items-center">
        {menuList?.map((item: menuListProps, index: number) => {
          return (
            <Link href={item.link}>
              <div
                className="gap-4 flex justify-between items-center"
                key={index}
              >
                <div
                  className={`${
                    pathname === item.link && "text-[#3C6CE7]"
                  } font-bold stroke-2 icon text-base`}
                >
                  {item.prefix}{" "}
                </div>
                <p
                  className={`${
                    pathname === item?.link
                      ? "text-[#1677ff]"
                      : "text-[#2A2A2A]"
                  } text-sm font-normal`}
                >
                  {item?.name}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex gap-4 px-4">
        {menuListIcon.map((item: menuListIconProps, index: number) => {
          return (
            <div key={index}>
              <Button
                variant="filled"
                className="bg-[#E0E6ED] border-none bg-opacity-25 text-[#0E1726] text-base"
                shape="circle"
                size={"middle"}
                icon={item.prefix}
              >
                {!item.prefix && (
                  <Image src={usa} width={20} height={0} alt="" />
                )}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
