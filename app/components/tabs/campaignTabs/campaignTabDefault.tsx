import { Col, Form, Input, Row, Upload } from "antd";
import { Typography } from "antd";


import React from "react";
import InputLabel from "../../InputLabel";
import { SlCloudUpload } from "react-icons/sl";

type Props = {};

export default function CampaignTabDefault({ title }: { title?: any }) {
  return (
    <div className="rounded-2xl shadow-md px-4 ">
      <Form
        wrapperCol={{ span: 12 }}
      >
        <Row gutter={[16, 0]}>
          <Col span={12}>
            <p className="font-extrabold text-base my-4">Item Info</p>

            <Form.Item labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
              <InputLabel>Title (Default)</InputLabel>
              <Input placeholder="New Item" size="large" />
            </Form.Item>

            <Form.Item labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
              <InputLabel>Short description (Default)</InputLabel>
              <Input.TextArea placeholder="" size="large" rows={5} />
            </Form.Item>
          </Col>

          <Col span={12} className=" flex flex-col ">
            <p className="font-extrabold text-base my-4">Item Image</p>
            <Col>
              <InputLabel>Logo (Ratio 1:1)</InputLabel>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader flex-grow h-[150px]"
                showUploadList={false}
              >
                <SlCloudUpload size={28} />
              </Upload>
              <Form.Item labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                <Upload
                  name="cover"
                  listType="picture-card"
                  className="avatar-uploader w-full text-left h-10 mt-4 " // เพิ่ม w-full ที่นี่
                  showUploadList={false}
                >
                  Choose File
                </Upload>
              </Form.Item>
            </Col>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
