import { title } from "process";

const AddressColumns = [
  {
    title: <button className="bg-blue-600 rounded-full text-white w-6 h-6 justify-center items-center"> + </button>,
    dataIndex: 'logo',
    key: 'logo',
    width: 80,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 200,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 300,
  },
  {
    title: 'Main',
    dataIndex: 'main',
    key: 'main',
    width: 100,
  },
]


    const AddressData = [
        {
        key: '1',
        logo: 'Logo',
        name: 'Head Office',
        address: 'fatmawati raya no 1, Jakarta Selatan',
        main: <input type="checkbox" />
,
        },
        {
        key: '2',
        logo: 'Logo',
        name: 'Branch Office',
        address: 'ciawi no 2, Bogor',
        main: <input type="checkbox" />
,
        },
        
    ];

    const ContactColumns = [
    {
      title: <button className="bg-blue-600 rounded-full text-white w-6 h-6 justify-center items-center"> + </button>,
        dataIndex: 'key',
        key: 'key',
    },
    {
      title: 'Name',    
        dataIndex: 'name',
        key: 'name',
    },
    {
      title: 'Job position',    
        dataIndex: 'jobPosition',
        key: 'jobPosition',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    { title: 'main',
    dataIndex: 'main',
    key: 'main',
    }
    

    ]

    const ContactData = [
        {
        key: '1',
        logo: 'Logo',
        name: 'Head Office',
        address: 'fatmawati raya no 1, Jakarta Selatan',
        main: <input type="checkbox" />,
        jobPosition: 'Manager',
        email: '9gM4d@example.com',
        phone: '08123456789',
        mobile: '08123456789'
,
        },
        {
        key: '2',
        logo: 'Logo',
        name: 'Branch Office',
        address: 'ciawi no 2, Bogor',
        main: <input type="checkbox" />,
        jobPosition: 'Manager',
        email: '9gM4d@example.com',
        phone: '08123456789',
        mobile: '08123456789'
,
        },
        
    ]

    export {AddressColumns, AddressData, ContactColumns, ContactData};