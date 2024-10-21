"use client";

import Image from "next/image";
import Logo from "@/app/logo3.png";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { Input, Row, Space } from "antd";
import { LuSearch } from "react-icons/lu";
import { GrRefresh } from "react-icons/gr";
import { GoHome } from "react-icons/go";
import { BsDash } from "react-icons/bs";

import { RiShoppingBasketLine, RiCouponLine } from "react-icons/ri";
import { TbReceipt } from "react-icons/tb";
import { BsLayers } from "react-icons/bs";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import {
  PiImage,
  PiImages,
  PiBellSimpleBold,
  PiShoppingCartSimpleBold,
} from "react-icons/pi";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { subMenuProps } from "@/app/type/navbarType";
import { usePathname } from "next/navigation";

interface MenuListProps {
  name: string;
  prefix: React.ReactNode;
  subMenu?: subMenuProps[];
  link: string;
}
interface menuListNavbarProps {
  group: string;
  mainMenu: MenuListProps[];
}

const menuList: menuListNavbarProps[] = [
  {
    group: "",
    mainMenu: [
      {
        name: "Dashboard",
        prefix: <GoHome />,
        link: "/dashboard",
      },
    ],
  },
  {
    group: "POS SECTION",
    mainMenu: [
      {
        name: "New Sale",
        prefix: <RiShoppingBasketLine />,
        link: "/new-section",
      },
    ],
  },
  {
    group: "ORDER MANAGEMENT",
    mainMenu: [
      {
        name: "Orders",
        prefix: <PiShoppingCartSimpleBold />,
        link: "/orders",
        subMenu: [
          {
            name: "All",
            link: "/orders/all",
          },
          {
            name: "Scheduled",
            link: "/orders/scheduled",
          },
          {
            name: "Pending",
            link: "/orders/pending",
          },
          {
            name: "Accepted",
            link: "/orders/accepted",
          },
          {
            name: "Processing",
            link: "/orders/processing",
          },
          {
            name: "Order On The Way",
            link: "/orders/on-the-way",
          },
          {
            name: "Delivered",
            link: "/orders/delivered",
          },
          {
            name: "Canceled",
            link: "/orders/canceled",
          },
          {
            name: "Payment Failed",
            link: "/orders/payment-failed",
          },
          {
            name: "Refunded",
            link: "/orders/refunded",
          },
          {
            name: "Offine Payment",
            link: "/orders/offline-payment",
          },
        ],
      },
      {
        name: "Orders Refunds",
        prefix: <TbReceipt />,
        link: "/orders-refundsx",
        subMenu: [
          {
            name: "Refund Request",
            link: "/orders/refunded-request",
          },
        ],
      },
    ],
  },
  {
    group: "PROMOTION MANAGEMENT",
    mainMenu: [
      {
        name: "Campaigns",
        prefix: <BsLayers />,
        link: "",
        subMenu: [
          {
            name: "Basic Campaigns",
            link: "/basic-campaign",
          },
          {
            name: "Item Campaigns",
            link: "/item-campaign",
          },
        ],
      },
      {
        name: "Banners",
        prefix: <PiImage className="transform -scale-x-100" />,
        link: "/banners",
      },
      {
        name: "Other Banners",
        prefix: <PiImages className="transform -scale-x-100" />,
        link: "/other-banners",
      },
      {
        name: "Coupons",
        prefix: <RiCouponLine />,
        link: "/coupons",
      },
      {
        name: "Cashback",
        prefix: <GrRefresh className="transform -scale-x-100" />,
        link: "/cashback",
      },
      {
        name: "Push Notification",
        prefix: <PiBellSimpleBold />,
        link: "/push-notificationx",
      },
    ],
  },
  {
    group: "PRODUCT MANAGEMENT",
    mainMenu: [
      {
        name: "Categories",
        prefix: <BsLayers />,
        link: "/categories-index",
        subMenu: [
          {
            name: "Category",
            link: "/category",
          },
          {
            name: "Sub Category",
            link: "/sub-category",
          },
          {
            name: "Bulk Import",
            link: "/bulk-import",
          },
          {
            name: "Bulk Export",
            link: "/bulk-export",
          },
        ],
      },
      {
        name: "Attributes",
        prefix: <PiImage className="transform -scale-x-100" />,
        link: "/attributes",
      },
      {
        name: "Units",
        prefix: <PiImages className="transform -scale-x-100" />,
        link: "/units",
      },
      {
        name: "Common Conditions",
        prefix: <RiCouponLine />,
        link: "/common-conditions",
      },
      {
        name: "Product Setup",
        prefix: <GrRefresh className="transform -scale-x-100" />,
        link: "/product-setup",
        subMenu: [
          {
            name: "Add New",
            link: "/product-setup/add-new",
          },
          {
            name: "List",
            link: "/product-setup/list",
          },
          {
            name: "Product Gallery",
            link: "/product-setup/product-gallery",
          },
          {
            name: "Review",
            link: "/product-setup/review",
          },
          {
            name: "Bulk Import",
            link: "/product-setup/bulk-import",
          },
          {
            name: "Bulk Export",
            link: "/product-setup/bulk-export",
          },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpenSubmenu, setIsOpenSubmenu] = useState<any>([]);
  let main = menuList.filter((v, i) => v.mainMenu);
  let mainMenu: any = [];
  for (let i of main) {
    mainMenu.push(...i["mainMenu"]);
  }

  let subMenu = mainMenu.filter((e: any, i: any) => e.subMenu);

  useEffect(() => {
    const objs = subMenu.reduce((acc: any, p: any) => {
      acc[p.name] = p.subMenu;
      return acc;
    }, {});

    const newArr = Array.from(
      { length: Object.keys(objs).length },
      () => false
    );

    setIsOpenSubmenu(newArr);
  }, []);

  const handleSubmenu = (index: number, name: string) => {
    setIsOpenSubmenu((prev: any) => {
      let nedw = [...prev];
      nedw[index] = !nedw[index];
      return nedw;
    });
  };

  return (
    <div className="px-4 w-[320px]  overflow-y-scroll  h-screen">
      <div className="flex justify-between  items-center my-4">
        <Image src={Logo} width={100} height={0} alt=""></Image>
        <RxDoubleArrowLeft color="#0c1926" size={20} />
      </div>
      <Input
        placeholder="Search Menu..."
        prefix={<LuSearch />}
        size="large"
        className="search-navbar"
      />

      <Space direction="vertical" className=" flex flex-col ">
        {menuList?.map((val: menuListNavbarProps, idx: number) => {
          return (
            <div className="flex flex-col " key={idx}>
              <Space>
                <p className="text-[#B4B4B4] text-xs font-semibold mb-5 ">
                  {val.group.toUpperCase()}
                </p>
              </Space>
              {val.mainMenu.map((i: MenuListProps, idx1: number) => {
                console.log("🚀 ~ {val.mainMenu.map ~ i:", i);
                return (
                  <>
                    <div key={idx1}>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <p
                            className={`${
                              pathname === i?.link
                                ? "text-[#1677ff]"
                                : "text-[#A4A4A4]"
                            } text-lg`}
                          >
                            {" "}
                            {i?.prefix}
                          </p>
                          <Link
                            href={i?.link}
                            className={`text-sm ${
                              pathname === i?.link ? "text-[#1677ff]" : ""
                            }`}
                          >
                            {i.name}
                          </Link>
                        </div>
                        <div>
                          {subMenu?.map((d: MenuListProps, subIdx: any) => {
                            return (
                              <div key={subIdx}>
                                {i.name == d.name && (
                                  <div key={subIdx}>
                                    {isOpenSubmenu[subIdx] ? (
                                      <FaAngleUp
                                        onClick={() =>
                                          handleSubmenu(subIdx, i.name)
                                        }
                                      />
                                    ) : (
                                      <FaAngleDown
                                        onClick={() =>
                                          handleSubmenu(subIdx, i.name)
                                        }
                                      />
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {subMenu?.map((d: MenuListProps, subIdx1: any) => {
                        console.log("🚀 ~ {subMenu?.map ~ d:", d);
                        return (
                          <div className="mt-4" key={subIdx1}>
                            {i.name == d.name && isOpenSubmenu[subIdx1] ? (
                              <Space direction="vertical" size={10}>
                                {d.subMenu?.map(
                                  (sub: subMenuProps, subIdx: any) => {
                                    return (
                                      <Link
                                        key={subIdx}
                                        href={sub?.link}
                                        className="flex gap-2 ml-6 mt-2 text-sm items-center"
                                      >
                                        <BsDash
                                          color="#D1D5DB"
                                          strokeWidth={1}
                                        />
                                        {sub.name}
                                      </Link>
                                    );
                                  }
                                )}
                              </Space>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          );
        })}
      </Space>
    </div>
  );
}
