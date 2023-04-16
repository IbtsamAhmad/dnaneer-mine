import { Divider } from "antd";
import OpportunitiesCard from "../OpportunitiesCard/OpportunitiesCard";
import AppInput from "components/RadioGroup/RadioGroup";
import { Radio } from "antd";

const options = [
  { label: "All", value: "all" },
  { label: "24 months", value: "24-m" },
  { label: "12 months", value: "12-m" },
];

const ActiveTab = () => {
  return (
    <div>
      <div className="opportunites-radio" style={{ padding: "0 29px" }}>
        <Radio.Group className="radio-group">
          {options.map((el) => {
            return (
              <Radio.Button className="radio-button" value={el.value} key={el.value}>
                {el.label}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </div>

      <Divider />
      <div style={{ padding: "0 29px" }}>
        <OpportunitiesCard />
        <br />
        <OpportunitiesCard />
        <br />
        <OpportunitiesCard />
        <br />
        <OpportunitiesCard />
        {/* <br/> */}
      </div>
    </div>
  );
};

export default ActiveTab;
