import { Tabs } from "antd";
import ActiveTab from './ActiveTab';
const OpportuniesTabs = () => {
  const items = [
    {
      key: "1",
      label: "Active",
      children:<ActiveTab/>
      
    },
    {
      key: "2",
      label: "Comming Soon",
    },
    {
      key: "3",
      label: "Closed",
    },
  ];

  return <Tabs items={items} />;
};

export default OpportuniesTabs;
