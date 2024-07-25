"use client";
import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ChatBoxHeader from "./header";
import ChatBoxContent from "./content";
import { Message, messages } from "@/utils/messages";
import ChatboxInput from "./chatboxInput";

const ContactUsChatBox = () => {
  const [chatMessages, setChatMessages] = useState(messages);
  const chatContentRef = useRef<HTMLDivElement | null>(null);
  const sendANewMessage = (message: Message) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
  };
  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <>
      <Box
        sx={{
          boxShadow: "0px 0px 14px 0px #00000040",
          borderRadius: "30px",
          flex: "1 1 0%",
          transition: "width 0.3s cubic-bezier(0.76,0,0.24,1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <ChatBoxHeader />
        <ChatBoxContent
          chatContentRef={chatContentRef}
          messages={chatMessages}
        />
        <ChatboxInput sendANewMessage={sendANewMessage} />
      </Box>
    </>
  );
};

export default ContactUsChatBox;
