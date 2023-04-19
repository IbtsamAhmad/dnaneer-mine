import React from 'react'
import "./Table.scss"

interface TableProps = {
  style?: React.CSSProperties;
  columns: any;
  data:any
}

const AppTable = ({
  children,
  className,
  style
  data,
  columns
}: MessageProps): JSX.Element => {
  return <Table columns={columns} dataSource={data} />;
}

export default AppTable;