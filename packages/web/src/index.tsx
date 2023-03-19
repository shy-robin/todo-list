import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import { ConfigProvider, theme } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/reset.css";

dayjs.locale("zh-cn");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: { colorPrimary: "#fff" },
        algorithm: theme.darkAlgorithm,
        components: {
          Button: {
            colorPrimary: "#ddd",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
