"use client";
import Input from "@/app/components/Input";
import InputLabel from "@/app/components/InputLabel";
import TopSellignTabDefault from "@/app/components/tabs/top-selling-store/topSellignTabDefault";
import {
  Col,
  Divider,
  Row,
  Select,
  Space,
  Tabs,
  TabsProps,
  Upload,
} from "antd";
import { useParams } from "next/navigation";
import React from "react";
import { PiStorefrontBold } from "react-icons/pi";
import { SlCloudUpload } from "react-icons/sl";
import GoogleMapReact from "google-map-react";

const tabItems: TabsProps["items"] = [
  {
    label: "Default",
    key: "1",
    children: <TopSellignTabDefault title={" (Default)"} />,
  },
  {
    label: "English (EN)",
    key: "2",
    children: <TopSellignTabDefault title={" (EN)"} />,
  },
  {
    label: "Thai-ไทย (TH)",
    key: "3",
    children: <TopSellignTabDefault title={" (TH)"} />,
  },
];

// const AnyReactComponent = ({  }:{text:number}) => <div>{text}</div>;
export default function Page() {
  const { id } = useParams();

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className="">
      <Space size={20} direction="vertical" className="w-full ">
        <p className="font-extrabold text-2xl">Update store</p>
      </Space>
      <Row className="rounded-2xl shadow-md p-4 h-full" justify="space-between">
        <Col span={12} className=" flex flex-col  pr-4 ">
          <Tabs className="" items={tabItems}></Tabs>
        </Col>

        <Col span={12} className=" flex flex-col">
          <p className="font-extrabold text-base ">Store Logo & Covers</p>
          <Row gutter={[10, 10]} className="h-full ">
            <Col span={10} className="flex flex-col justify-between">
              <InputLabel>Logo (Ratio 1:1)</InputLabel>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader flex-grow"
                showUploadList={false}
              >
                <SlCloudUpload size={28} />
              </Upload>
            </Col>
            <Col span={14} className="flex flex-col justify-between">
              <InputLabel>Store Cover Logo (Ratio 2:1)</InputLabel>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader flex-grow"
                showUploadList={false}
              >
                <SlCloudUpload size={28} />
              </Upload>
            </Col>
          </Row>
        </Col>
      </Row>
      <Space direction="vertical" className="w-full gap-6 mt-4">
        <div className="rounded-2xl shadow-md p-4">
          <Row align={"middle"} className="gap-2">
            <PiStorefrontBold size={20} color="#464646" />

            <p className="font-extrabold text-base">Store information</p>
          </Row>
          <Divider className="my-4" />

          <Row gutter={[10, 2]}>
            <Col span={12}>
              <InputLabel>Social media link</InputLabel>
              <Input
                placeholder="Social media link"
                size="large"
                label="First name"
              />
            </Col>
            <Col span={12}>
              <InputLabel>
                Estimated Delivery Time ( Min & Maximum Time)
              </InputLabel>

              <Input defaultValue={0} size="large" label="Last name" disabled />
            </Col>
          </Row>
          <Row gutter={20} className="mt-2">
            <Col span={8}>
              <InputLabel>Zone</InputLabel>
              <Select placeholder="Select Zone" className="w-full mb-2" />
              <InputLabel>Latitude</InputLabel>
              <Input
                placeholder="Ex : -94.24459"
                size="large"
                label="First name"
              />
              <InputLabel>Longitude</InputLabel>
              <Input
                placeholder="Ex : 140.635841"
                size="large"
                label="First name"
              />
            </Col>
            <Col span={16}>
              <div style={{ height: "100%", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                ></GoogleMapReact>
              </div>
            </Col>
          </Row>
        </div>

        {/* //Item details */}
        <div className="rounded-2xl shadow-md p-4">
          <Row align={"middle"} className="gap-2">
            <p className="font-extrabold text-base">Owner information</p>
          </Row>
          <Divider className="my-4" />
          <div className="grid grid-flow-row grid-cols-3 gap-2">
            <div>
              <InputLabel>First name</InputLabel>
              <Input placeholder="First name" size="large" label="First name" />
            </div>
            <div>
              <InputLabel>Last name</InputLabel>

              <Input placeholder="Last name" size="large" label="Last name" />
            </div>
            <div>
              <InputLabel>Phone</InputLabel>

              <Input placeholder="Phone" size="large" label="Phone" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl shadow-md p-4">
          <Row align={"middle"} className="gap-2">
            <p className="font-extrabold text-base">Account information</p>
          </Row>
          <Divider className="my-4" />
          <div className="grid grid-flow-row grid-cols-3 gap-2">
            <div>
              <InputLabel>Email</InputLabel>
              <Input
                placeholder="taechit.telehealth@gmail.com"
                size="large"
                label="First name"
              />
            </div>
            <div>
              <InputLabel>Password</InputLabel>

              <Input
                placeholder="8+ characters required"
                size="large"
                label="Last name"
              />
            </div>
            <div>
              <InputLabel>Confirm password</InputLabel>

              <Input
                placeholder="8+ characters required"
                size="large"
                label="Phone"
              />
            </div>
          </div>
        </div>
      </Space>
    </div>
  );
}
