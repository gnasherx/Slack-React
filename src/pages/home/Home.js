import React from "react";
import Workspaces from "../../components/Workspaces";
import Channels from "../../component/Channels";
import Input from "../../components/Input";
import Messages from "../../components/Messages";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div className="app-layout">
      <div className="workspace ">
        <Workspaces />
      </div>
      <div className="channels ">
        <Channels />
      </div>
      <div className="header ">
        <Header />
      </div>
      <div className="messages ">
        <ul className="message-list">
          <Messages />
        </ul>
      </div>
      <div className="input ">
        <Input />
      </div>
    </div>
  );
};

export default Home;
