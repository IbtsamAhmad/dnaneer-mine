import { useState, useEffect } from "react";
import OpportunitiesCard from "../OpportunitiesCard/OpportunitiesCard";
import { useRecoilValue } from "recoil";
import { opportunitiesListAtom } from "store/Opportunities";
import { getOpportunityList } from "services/Login";
import { Spin, message } from "antd";
import Empty from "components/Empty/Empty";

const OpportunistsList = () => {
  // const opportunitesList = useRecoilValue(opportunitiesListAtom);
  const [opportunityList, setOpportunityList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await getOpportunityList();
        if (data) {
          console.log("getOpportunityList", data.data[0]);
          setOpportunityList(data.data[0]);
        }
      } catch (error) {
        console.log("err", error.response.data.message);
        message.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Spin spinning={loading}>
        <div style={{ padding: "0 29px" }}>
          {opportunityList.length >= 1 ? (
            opportunityList.map((opportunity, index) => {
              // if (index === opportunityList.length - 1) {
              //   return (
              //     <div key={index}>
              //       <OpportunitiesCard id={index} opp />;
              //     </div>
              //   );
              // }
              return (
                <>
                  <div key={index}>
                    <OpportunitiesCard id={index} opportunity={opportunity} />
                  </div>
                  <br />
                </>
              );
            })
          ) : (
            <Empty />
          )}
        </div>
      </Spin>
    </>
  );
};

export default OpportunistsList;
