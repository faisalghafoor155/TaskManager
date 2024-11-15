/** @format */

import { useNavigate } from "react-router-dom";

function NotificationPanel({ notifications }) {
  const navigate = useNavigate();

  const handleNotificationClick = (notification) => {
    navigate("/inbox", { state: { notification } });
  };

  return (
    <div className="p-4 space-y-4">
      {notifications && notifications.length > 0 ? (
        notifications.map((notification, index) => (
          <div
            key={index}
            onClick={() => handleNotificationClick(notification)}
            className="cursor-pointer p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h4 className="font-semibold text-lg">
              {notification.task?.title}
            </h4>
            <p className="text-gray-500 mt-2">{notification.text}</p>
          </div>
        ))
      ) : (
        <p>No notifications</p>
      )}
    </div>
  );
}

export default NotificationPanel;
