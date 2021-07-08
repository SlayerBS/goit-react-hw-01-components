import React from "react";
import PropTypes from "prop-types";

import styles from "./TransactionHistory.module.css";

const TransactionsHistory = ({ items }) => (
  <table className={styles["transaction-history"]}>
    <thead>
      <tr className={styles["table-head"]}>
        <th className={styles["title-head"]}>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={styles.item}>
          <td className={styles.type}>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionsHistory;
