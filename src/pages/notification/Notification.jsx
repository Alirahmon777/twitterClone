import React, { useState } from "react";
import "./notification.css";

const Notification = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "You have a new message" },
    { id: 2, message: "Your order has shipped" },
    { id: 3, message: "There was an error processing your payment" },
  ]);

  const dismissNotification = (id) => {
    setNotifications((prevState) =>
      prevState.filter((notification) => notification.id !== id)
    );
  };
  return (
    <div className="notification-page">
      <h1 className="notif-title">Notifications</h1>
      {notifications.length === 0 ? (
        <p className="notif-new">No new notifications</p>
      ) : (
        <ul className="notif-ul">
          {notifications.map((notification) => (
            <li className="notif-li" key={notification.id}>
              <span className="notif-span">{notification.message}</span>
              <button
                className="notif-btn"
                onClick={() => dismissNotification(notification.id)}
              >
                Dismiss
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;
