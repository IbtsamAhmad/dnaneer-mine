import OpportunitiesCard from "../OpportunitiesCard/OpportunitiesCard";
import { useRecoilValue } from "recoil";
import { opportunitiesListAtom } from "store/Opportunities";

const OpportuniesList = () => {
  const opportunitesList = useRecoilValue(opportunitiesListAtom);
  return (
    <div style={{ padding: "0 29px" }}>
      {opportunitesList.map((listItem, index) => {
        if (index === opportunitesList.length - 1) {
          return <OpportunitiesCard id={index} key={listItem} />;
        }
        return (
          <>
            <OpportunitiesCard id={index} key={listItem} />
            <br />
          </>
        );
      })}
    </div>
  );
};

export default OpportuniesList;
