import { Divider } from "antd";
import RadioOptions from "../RadioOptions/RadioOptions";
import OpportuniesList from './OpportunitiesList';

const ActiveTab = () => {
  return (
    <>
      <RadioOptions />
      <Divider />
      <OpportuniesList/>
    </>
  );
};

export default ActiveTab;
