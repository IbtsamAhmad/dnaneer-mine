import { Drawer } from "antd";
import { useState } from "react";
import IndividualForms from "../IndividualForms";
import Button from "components/Button/Button";
const App = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={showDrawer} className="activate-btn" block>
        Activate Now
      </Button>
      <div className="institute-drawer-container">
        <Drawer
          className="institute-drawer-container"
          title={false}
          placement="right"
          onClose={onClose}
          open={open}
          closable={false}
        >
          <IndividualForms setOpen={setOpen}/>
        </Drawer>
      </div>
    </>
  );
};
export default App;
