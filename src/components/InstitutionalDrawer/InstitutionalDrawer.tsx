import {  Drawer } from "antd";
import { useState } from "react";
import InstitutionalForms from "../InstitutionalForms";
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
      {/* <div className="institute-drawer-container"> */}
      <Drawer
        className="institute-drawer-container"
        title={false}
        placement="right"
        onClose={onClose}
        open={open}
        closable={false}
      >
        <InstitutionalForms setOpen={setOpen} />
      </Drawer>
      {/* </div> */}
    </>
  );
};
export default App;
