"use client";
import React, { use } from "react";
import { Button, Modal, Tabs, TabsProps, Table, Tag  } from "antd";
import { AddressColumns, AddressData, ContactColumns, ContactData } from "@/data/data";

export default function ModalPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (key: string) => {
    console.log(key);
  };



     const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Address',
    children: <div>
      <Table columns={AddressColumns} dataSource={AddressData} />
    </div>,
  },
  {
  key: '2',
  label: 'Contact',
  children: (
    <div className="w-full overflow-x-auto">
      <Table
  size="middle"
  bordered
  columns={ContactColumns}
  dataSource={ContactData}
  pagination={false}
/>

    </div>
  ),
},
  {
    key: '3',
    label: 'Groups',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Material list',
    children: 'Content of Tab Pane 4',
  },
  {
    key: '5',
    label: 'Others',
    children: 'Content of Tab Pane 5',
  },
];

  return (
    <div className="flex justify-center items-center" >
      <Button type="primary" onClick={showModal}>
        New Supplier
      </Button>
      <Modal
        title="New Supplier"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
        cancelText="Cancel"
        width={740}
      >
        <div className="flex flex-col justify-start items-start ">
          <div className="flex  justify-evenly items-center w-full gap-3">
            <div className="flex flex-col justify-center items-center w-full p-4 bg-white rounded-lg shadow-md">
              <div className="flex  items-center gap-6">
                {/* Logo */}
                <div className="flex justify-center items-center w-16 h-16 bg-gray-200 rounded-full">
                  <h1 className="text-lg font-bold text-gray-600">Logo</h1>
                </div>

                {/* Supplier Info */}
                <div className="flex flex-col gap-4 text-sm text-gray-700">
                  {/* Supplier Name */}
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-500">
                      Supplier Name
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-md border text-gray-800">
                      PT setroom indonesia
                    </span>
                  </div>

                  {/* Nickname */}
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-500">Nickname</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-md border text-gray-800">
                      setroom
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange}  />;
          </div>
        </div>
      </Modal>
    </div>
  );
}
