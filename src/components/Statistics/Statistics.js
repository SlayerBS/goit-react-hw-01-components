import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : ""}
      <ul className={styles["stat-list"]}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.item}
            style={{
              backgroundColor: colorRandomRgb(),
            }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function colorRandomRgb() {
  let x = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  let y = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  let z = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  return `rgb(${x}, ${y}, ${z})`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
