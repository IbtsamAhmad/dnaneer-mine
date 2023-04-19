import React from 'react'
import { Table } from "antd"
import "./Table.scss"

interface TableProps {
  style?: React.CSSProperties;
  columns: any;
  dataSource:any;
}

const AppTable = ({ dataSource, columns }: TableProps): JSX.Element => {
  return <Table columns={columns} dataSource={dataSource} bordered={false} />;
};

export default AppTable;