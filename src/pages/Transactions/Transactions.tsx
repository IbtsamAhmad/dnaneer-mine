//import { Table } from "antd";
// import type { ColumnsType } from "antd/es/table";
import { ReactComponent as TransactionsIcon } from "assets/svgs/TransactionsIcon.svg";
import DashboardLayout from "components/DashboardLayout/DashboardLayout";
import Table from "components/Table/Table";
import "./transactions.scss";


// interface MyData {

// }

const Transactions = () => {
interface MyData {
    key: string;
    title: string;
    ref: string;
    date: string;
    amount: string;
    type: string;
    status: string;
}

const data: MyData[] = [
  {
    key: "1",
    title: "Distrbution fees",
    ref: "BNB39043",
    date: "Feb 23, 2023",
    amount: "400,000 SAR",
    type: "Investment",
    status: "Active",
  },
  {
    key: "2",
    title: "VAT Charges",
    ref: "BNB39043",
    date: "Feb 23, 2023",
    amount: "400,000 SAR",
    type: "Withdraw",
    status: "Closed",
  },
    {
      key: "3",
      title: "Investment Returns",
      ref: "BNB39043",
      date: "Feb 23, 2023",
      amount: "400,000 SAR",
      type: "Deposited",
      status: "Coming soon",
    },
    {
      key: "4",
      title: "Distrbution fees ",
      ref: "BNB39043",
      date: "Feb 23, 2023",
      amount: "400,000 SAR",
      type: "Withdraw",
      status: "Active",
    },
];

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Ref Number",
    dataIndex: "ref",
    key: "ref",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "address",
    render: (text: string, record: MyData) => (
      <div>
        {record.status === "Active" ? (
          <p className="status active-status"> {record.status}</p>
        ) : record.status === "Closed" ? (
          <p className="status closed-status"> {record.status}</p>
        ) : (
          <p className="status coming-status"> {record.status}</p>
        )}
      </div>
    ),
  },
];

// const data: MyData[] = [
//   {
//     key: "1",
//     title: "Distrbution fees",
//     ref: "BNB39043",
//     date: "Feb 23, 2023",
//     amount: "400,000 SAR",
//     type: "Investment",
//     status: "Active",
//   },


// ];
  return (
    <DashboardLayout>
      <div className="transactions-container">
        <div className="banner">
          <div>
            <h1>Transactions</h1>
            <h4>Maximize your investments today!</h4>
          </div>
          <TransactionsIcon />
        </div>
        <Table columns={columns} dataSource={data}  />;
      </div>
    </DashboardLayout>
  );
};

export default Transactions;
