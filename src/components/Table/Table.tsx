import React from 'react'
import { Table } from "antd"
import "./Table.scss"

interface TableProps {
  style?: React.CSSProperties;
  columns: any;
  dataSource:any;
  pagination?: boolean;
}

const AppTable = ({ dataSource, columns,pagination}: TableProps): JSX.Element => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      bordered={false}
      pagination={pagination}
    />
  );
};

export default AppTable;