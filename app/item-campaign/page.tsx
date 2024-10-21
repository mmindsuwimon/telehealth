"use client";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Input,
  Row,
  Select,
  Space,
  Tabs,
  TimePicker,
} from "antd";
import React from "react";
import CampaignTabDefault from "../components/tabs/campaignTabs/campaignTabDefault";
import { TbSticker } from "react-icons/tb";
import { LuImage } from "react-icons/lu";
import { PiCalendarBlankBold } from "react-icons/pi";
import InputLabel from "../components/InputLabel";

type Props = {};

const tabItems = [
  {
    label: "Default",
    key: 1,
    children: <CampaignTabDefault title={" (Default)"} />,
  },
  {
    label: "English (EN)",
    key: 2,
    children: <CampaignTabDefault title={" (EN)"} />,
  },
  {
    label: "Thai-ไทย (TH)",
    key: 3,
    children: <CampaignTabDefault title={" (TH)"} />,
  },
];

export default function Page({}: Props) {
  return (
    <div>
      <Space size={20} direction="vertical" className="w-full">
        <p className="font-extrabold text-2xl">Add new campaign</p>
        <Tabs>
          {tabItems.map((tab) => {
            const { key, label, children } = tab;
            return (
              <Tabs.TabPane key={key} tab={label}>
                {children}
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      </Space>
      {/* //Item details */}
      <Space direction="vertical" className="w-full gap-6">
        <div className="rounded-2xl shadow-md p-4">
          <Row align={"middle"} className="gap-2">
            <TbSticker size={20} color="#464646" />

            <p className="font-extrabold text-base">Item Details</p>
          </Row>
          <Divider className="my-4" />
          <div className="grid grid-flow-row-dense grid-cols-4 gap-2">
            <div>
              <InputLabel>Store</InputLabel>
              <Select
                placeholder="Select store"
                className="w-full"
                size="middle"
              />
            </div>
            <div>
              <InputLabel>Total stock</InputLabel>
              <Input size="large" />
            </div>
            <div>
              <InputLabel>Maximun cart quantity</InputLabel>
              <Input size="large" />
            </div>
            <div>
              <InputLabel>Suitable For</InputLabel>
              <Select placeholder="-- select --" className="w-full" />
            </div>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-4 gap-2">
            <div>
              <InputLabel>Sub category</InputLabel>
              <Select className="w-full" />
            </div>
          </div>
        </div>

        {/* //Item details */}
        <div className="rounded-2xl shadow-md p-4">
          <Row align={"middle"} className="gap-2">
            <TbSticker size={20} color="#464646" />
            <p className="font-extrabold text-base">Item Details</p>
          </Row>
          <Divider className="my-4" />
          <Row gutter={10}>
            <Col span={6}>
              <InputLabel>Price</InputLabel>
              <Input placeholder="0" size="large" />
            </Col>
            <Col span={6}>
              <InputLabel>Discount</InputLabel>
              <Input size="large" />
            </Col>
            <Col span={6}>
              <InputLabel>Discount Type</InputLabel>
              <Select placeholder="Percent" className="w-full" />
            </Col>
          </Row>
        </div>

        {/* //add attribute */}
        <div className="rounded-2xl shadow-md p-4">
          <Row align={"middle"} className="gap-2">
            <LuImage size={20} color="#464646" />
            <p className="font-extrabold text-base">Add Attribute</p>
          </Row>
          <Divider className="my-4" />
          <InputLabel>Attribute</InputLabel>
          <Select className="w-full" />
        </div>

        {/* //time schedule */}
        <div className="rounded-2xl shadow-md p-4">
          <Row align={"middle"} className="gap-2">
            <PiCalendarBlankBold size={20} color="#464646" />
            <p className="font-extrabold text-base">Time schedule</p>
          </Row>
          <Divider className="my-4" />
          <div className="grid grid-flow-row grid-cols-4 gap-2">
            <div>
              <InputLabel>Start date</InputLabel>
              <DatePicker className="w-full" placeholder="DD/MM/YYYY" />
            </div>
            <div>
              <InputLabel>End date</InputLabel>
              <DatePicker className="w-full" placeholder="DD/MM/YYYY" />
            </div>
            <div>
              <InputLabel>Start time</InputLabel>
              <TimePicker className="w-full" placeholder="-- : --" />
            </div>
            <div>
              <InputLabel>End time</InputLabel>
              <TimePicker className="w-full" placeholder="-- : --" />
            </div>
          </div>
        </div>

        {/* button */}
      </Space>
      <div className="py-4">
        <Row align={"middle"} justify={"end"} className="gap-2">
          <Button color="default" variant="filled" className="px-8 py-4">
            Reset
          </Button>
          <Button
            className="bg-[#3d6ce7] text-white px-8 py-4"
            variant="filled"
          >
            Submit
          </Button>
        </Row>
      </div>
    </div>
  );
}
