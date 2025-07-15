"use client";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Divider, Menu, Switch } from "antd";
import type { GetProp, MenuProps } from "antd";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUsers,
  faRightFromBracket,
  faBars,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faUsers, faRightFromBracket, faBars, faTableList);

type MenuTheme = GetProp<MenuProps, "theme">;

type MenuItem = GetProp<MenuProps, "items">[number];

const items: MenuItem[] = [
  {
    key: "1",
    icon: <MailOutlined />,
    label: "Dashboard",
  },
  {
    key: "sub1",
    icon: <FontAwesomeIcon icon="fa-solid fa-users" />,
    label: "Supplier Management",
    children: [
      { key: "2", label: "Dashboard" },
      { key: "3", label: "Supplier List" },
      { key: "4", label: "Reviews & approvals" },
      { key: "5", label: "Configurations" },
    ],
  },
  {
    key: "3",
    icon: <CalendarOutlined />,
    label: "Funnel Management",
    children: [
      { key: "6", label: "Dashboard" },
      { key: "7", label: "Funnel List" },
      { key: "8", label: "Reviews & approvals" },
      { key: "9", label: "Configurations" },
    ],
  },
];

const Configurations = [
  {
    key: "10",
    icon: <SettingOutlined />,
    label: "John Doe",
    children: [
      { key: "11", label: "Supplier Configurations" },
      { key: "12", label: "Funnel Configurations" },
      { key: "13", label: "User Management" },
      { key: "14", label: "System Settings" },
    ],
  },
];

export default function Sidebar() {
  const [mode, setMode] = useState<"vertical" | "inline">("inline");
  const [theme, setTheme] = useState<MenuTheme>("light");

  const changeMode = (value: boolean) => {
    setMode(value ? "vertical" : "inline");
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <div className="flex items-center justify-start p-5 pl-7 gap-5  bg-white">
          <FontAwesomeIcon icon="fa-solid fa-users" />
          <h1> alisa</h1>
        </div>
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode={mode}
          theme={theme}
          items={items}
        />
      </div>
      <div className="flex flex-col items-start justify-end  bg-white">
        <div className="flex justify-start items-center p-5 gap-2 bg-white">
          <CalendarOutlined />
          <h1>Help & Support</h1>
        </div>
        <div className="flex justify-start items-center bg-white">
          <Menu style={{ width: 256 }} mode={mode} theme={theme} items={Configurations} />
        </div>
      </div>
    </div>
  );
}
