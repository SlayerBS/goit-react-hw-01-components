import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={styles["friend-list"]}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
