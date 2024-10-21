import { Input } from "antd";
import React from "react";
import InputLabel from "../../InputLabel";

type Props = {};

export default function TopSellignTabDefault({ title }: { title?: any }) {
  return (
    <div>
      <InputLabel>Name (Default)</InputLabel>
      <Input placeholder="First name" size="large" className="mb-2" />

      <InputLabel>Address (Default)</InputLabel>
      <Input.TextArea placeholder="First name" size="large" />
    </div>
  );
}
