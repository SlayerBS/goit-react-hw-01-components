import React from "react";
import PropTypes from "prop-types";

import styles from "./FriendListItem.module.css";

const FriendListItem = ({ isOnline, avatar, name }) => (
  <>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt={name} />
    <p className={styles.name}>{name}</p>
  </>
);
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
