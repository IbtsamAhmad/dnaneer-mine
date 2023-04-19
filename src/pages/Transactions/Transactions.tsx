import React from 'react'
import { ReactComponent as TransactionsIcon } from "assets/svgs/TransactionsIcon.svg";
import DashboardLayout from "components/DashboardLayout/DashboardLayout";
import "./transactions.scss"

const Transactions = () => {
  return (
    <DashboardLayout>
      <div className="transactions-container">
        <div className="banner">
          <div>
            <h1>Transactions</h1>
            <h4>Maximize your investments today!</h4>
          </div>
          <TransactionsIcon />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Transactions



