"use client";

import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  SetStateAction,
  useState,
} from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUsers,
  faRightFromBracket,
  faBars,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LineChartOutlined } from "@ant-design/icons";

library.add(faUsers, faRightFromBracket, faBars, faTableList);

import { Select, Table, Tag } from "antd";
import ModalPage from "../Features/Modal/page";

export default function Dashboard() {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState("inactive");

  const handleChange = (value: SetStateAction<string>) => {
    setStatus(value);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (
        _: any,
        record: {
          alias: ReactNode;
          avatar: string | Blob | undefined;
          name:
            | string
            | number
            | bigint
            | boolean
            | ReactElement<unknown, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | Promise<
                | string
                | number
                | bigint
                | boolean
                | ReactPortal
                | ReactElement<unknown, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | null
                | undefined
              >
            | null
            | undefined;
          number:
            | string
            | number
            | bigint
            | boolean
            | ReactElement<unknown, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | Promise<
                | string
                | number
                | bigint
                | boolean
                | ReactPortal
                | ReactElement<unknown, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | null
                | undefined
              >
            | null
            | undefined;
        }
      ) => (
        <div className="flex items-center space-x-3">
          <div className="flex flex-col items-center justify-center">
            <img
              src={record.avatar}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>{record.alias}</div>
          </div>
          <div>
            <div className="font-semibold">{record.name}</div>
            <div className="flex gap-2 justify-center items-center">
              <div className=" text-sm text-blue-500">{record.number}</div>
              <div>{record.alias}</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "Address",
    },
    {
      title: "Contact",
      dataIndex: "Contact",
      key: "Contact",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "active" ? "green" : "red"}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Amanda Satya",
      number: "610202032",
      Contact: "lorem",
      alias: "[amanda]",
      Address: "amanda@example.com",
      status: "active",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      key: "2",
      name: "Budi Santoso",
      number: "210203032",
      Contact: "lorem",
      alias: "[amanda]",
      Address: "budi@example.com",
      status: "inactive",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      key: "3",
      name: "Citra Dewi",
      number: "310202032",
      Contact: "lorem",
      alias: "[amanda]",
      Address: "citra@example.com",
      status: "active",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <div className="flex flex-col w-4/5 h-screen bg-slate-200">
      <div className="flex justify-between p-2">
        <h1 className="p-2">Supplier list</h1>
        <div className="flex gap-2 bg-slate-300 p-2 justify-center items-center rounded-lg ">
          <FontAwesomeIcon icon="fa-solid fa-users" />
          <ModalPage />
        </div>
      </div>
      {/* supplier button section*/}
      <div className="flex justify-evenly gap-2 p-2 pl-4">
        <div className="flex flex-col p-4 bg-white rounded-lg w-1/4">
          <h1>total supplier</h1>
          <div className="flex justify-between items-start">
            <h1>1869</h1>
            <FontAwesomeIcon icon="fa-solid fa-users" />
          </div>
          <div className="flex gap-2">
            <LineChartOutlined />
            <h1 className="text-green-600">+1% vs last year</h1>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white rounded-lg w-1/4">
          <h1>new supplier</h1>
          <div className="flex justify-between items-start">
            <h1>1869</h1>
            <FontAwesomeIcon icon="fa-solid fa-users" />
          </div>
          <div className="flex gap-2">
            <LineChartOutlined />
            <h1 className="text-green-600">+1% vs last year</h1>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white rounded-lg w-1/4">
          <h1>avg cost per supplier</h1>
          <div className="flex justify-between items-start">
            <h1>1869</h1>
            <FontAwesomeIcon icon="fa-solid fa-users" />
          </div>
          <div className="flex gap-2">
            <LineChartOutlined />
            <h1 className="text-red-600">-1% vs last year</h1>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white rounded-lg w-1/4">
          <h1>blocked supplier</h1>
          <div className="flex justify-between items-start">
            <h1>1869</h1>
            <FontAwesomeIcon icon="fa-solid fa-users" />
          </div>
          <div className="flex gap-2">
            <LineChartOutlined />
            <h1 className="text-green-600">+1% vs last year</h1>
          </div>
        </div>
      </div>
      {/* search section*/}
      <div className="flex justify-between p-2">
        <div className="flex gap-2 p-2">
          <div>
            <input
              type="text"
              placeholder="Search customer"
              className="pl-2 p-2  rounded-lg bg-white text-black"
            />
          </div>
          <div className="flex flex-col space-y-2 w-48">
            <Select
              value={status}
              onChange={handleChange}
              className="w-full"
              options={[
                { value: "active", label: "🟢 Active" },
                { value: "inactive", label: "⚪ Inactive" },
              ]}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2 items-center bg-white p-2 rounded-lg">
            <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
            <button>export</button>
          </div>
          <div className="flex gap-2 items-center  p-2 rounded-lg">
            <FontAwesomeIcon icon="fa-solid fa-table-list" />
          </div>
          <div className="flex gap-2 items-center  p-2 rounded-lg">
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </div>
        </div>
      </div>
      {/* table section*/}
      <div className="p-2">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
        />
        ;
      </div>
    </div>
  );
}
