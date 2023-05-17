import { Button, Drawer } from "antd";
import { useState } from "react";
import InstitutionalForms from "../InstitutionalForms";
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
      <Button type="primary" onClick={showDrawer}>
        Complete your Profile Institute
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
