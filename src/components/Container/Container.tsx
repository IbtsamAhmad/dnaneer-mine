import  "./container.scss";
// console.log("classes", classes)

const Container = ({ children }) => {
  return <div className="container-layout"> {children}</div>;
};

export default Container;
