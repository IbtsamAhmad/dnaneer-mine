
import { ReactComponent as Coins } from "assets/svgs/Coins.svg";
import "./empty.scss";

const Empty = () => {
  return (
    <div className="empty-container">
      <Coins />
      <h1>There are no available opportunities now</h1>
      <p>check again later</p>
    </div>
  );
}

export default Empty