const logEvent = (message, data = {}) => {
  const logs = JSON.parse(localStorage.getItem("appLogs") || "[]");
  logs.push({ time: new Date().toISOString(), message, ...data });
  localStorage.setItem("appLogs", JSON.stringify(logs));
};

export default logEvent;
