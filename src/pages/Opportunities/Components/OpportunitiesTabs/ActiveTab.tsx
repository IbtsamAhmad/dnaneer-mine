import { Divider } from "antd";
import RadioOptions from "../RadioOptions/RadioOptions";
import OpportuniesList from './OpportunitiesList';
import LoadMore from "../LoadMore/LoadMore";
const ActiveTab = () => {
  return (
    <>
      <RadioOptions />
      <Divider />
      <OpportuniesList />
      <LoadMore />
    </>
  );
};

export default ActiveTab;
