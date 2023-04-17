import { Button, Drawer } from "antd";
import { useState } from "react";
import IndividualForms from "../IndividualForms";
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
      <Button
        type="primary"
        onClick={showDrawer}
        className="activate-btn"
        block
        style={{ borderRadius: "56px" }}
      >
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
          <IndividualForms setOpen={setOpen} />
        </Drawer>
      </div>
    </>
  );
};
export default App;
