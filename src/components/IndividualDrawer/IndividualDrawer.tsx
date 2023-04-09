import { Button, Drawer } from "antd";
import { useState } from "react";
import IndividualForms from "../../pages/Signup/SingupComponents/IndividualForms";
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
        Complete your Profile Individual
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
