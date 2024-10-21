import { Avatar, Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import { PiRankingBold } from "react-icons/pi";

type Props = {};

const store_top_selling = [
  {
    id: 1,
    name: "Delicious Bites",
    address: "123 Foodie Lane, Flavor Town, FT 12345",
    social_media_link: {
      facebook: "https://facebook.com/deliciousbites",
      instagram: "https://instagram.com/deliciousbites",
      twitter: "https://twitter.com/deliciousbites",
    },
    zone: "Zone A",
    estimated_delivery_time: "30-45 minutes",
    latitude: 12.345678,
    longitude: 98.765432,
    owner_information: {
      first_name: "John",
      last_name: "Doe",
      phone: "+1234567890",
    },
    account_information: {
      email: "owner@deliciousbites.com",
      password: "securepassword123",
      confirm_password: "securepassword123",
    },
  },
  {
    id: 2,
    name: "Sweet Treats",
    address: "456 Dessert Ave, Sugar City, SC 67890",
    social_media_link: {
      facebook: "https://facebook.com/sweettreats",
      instagram: "https://instagram.com/sweettreats",
      twitter: "https://twitter.com/sweettreats",
    },
    zone: "Zone B",
    estimated_delivery_time: "20-30 minutes",
    latitude: 12.456789,
    longitude: 98.876543,
    owner_information: {
      first_name: "Jane",
      last_name: "Smith",
      phone: "+1234567891",
    },
    account_information: {
      email: "owner@sweettreats.com",
      password: "mypassword456",
      confirm_password: "mypassword456",
    },
  },
  {
    id: 3,
    name: "Healthy Greens",
    address: "789 Wellness Blvd, Green Valley, GV 13579",
    social_media_link: {
      facebook: "https://facebook.com/healthygreens",
      instagram: "https://instagram.com/healthygreens",
      twitter: "https://twitter.com/healthygreens",
    },
    zone: "Zone C",
    estimated_delivery_time: "25-35 minutes",
    latitude: 12.56789,
    longitude: 98.987654,
    owner_information: {
      first_name: "Emily",
      last_name: "Jones",
      phone: "+1234567892",
    },
    account_information: {
      email: "owner@healthygreens.com",
      password: "healthypassword789",
      confirm_password: "healthypassword789",
    },
  },
  {
    id: 4,
    name: "Spicy Delights",
    address: "321 Spice St, Zesty Town, ZT 24680",
    social_media_link: {
      facebook: "https://facebook.com/spicydelights",
      instagram: "https://instagram.com/spicydelights",
      twitter: "https://twitter.com/spicydelights",
    },
    zone: "Zone D",
    estimated_delivery_time: "30-40 minutes",
    latitude: 12.678901,
    longitude: 99.098765,
    owner_information: {
      first_name: "Michael",
      last_name: "Brown",
      phone: "+1234567893",
    },
    account_information: {
      email: "owner@spicydelights.com",
      password: "spicy123456",
      confirm_password: "spicy123456",
    },
  },
  {
    id: 5,
    name: "Beverage Haven",
    address: "654 Drink Dr, Thirsty City, TC 98765",
    social_media_link: {
      facebook: "https://facebook.com/beveragehaven",
      instagram: "https://instagram.com/beveragehaven",
      twitter: "https://twitter.com/beveragehaven",
    },
    zone: "Zone E",
    estimated_delivery_time: "15-25 minutes",
    latitude: 12.789012,
    longitude: 99.209876,
    owner_information: {
      first_name: "Alice",
      last_name: "Davis",
      phone: "+1234567894",
    },
    account_information: {
      email: "owner@beveragehaven.com",
      password: "beveragepassword123",
      confirm_password: "beveragepassword123",
    },
  },
];

export default function Page({}: Props) {
  return (
    <div>
      <div className="rounded-2xl shadow-md p-4 w-max">
        <Row align={"middle"} className="gap-2 my-4">
          <PiRankingBold size={20} color="#464646" />
          <p className="font-extrabold text-base">Top Selling Stores</p>
        </Row>
        <Row justify={"space-between"} className="gap-10 my-4">
          {store_top_selling.map((item: any, index: number) => {
            return (
              <Link
                key={index}
                className="flex flex-col items-center"
                href={`/dashboard/top-selling-store/${item?.id}`}
              >
                <Avatar>{item.name[0]}</Avatar>
                <p className="mt-2">{item?.name}</p>
              </Link>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
