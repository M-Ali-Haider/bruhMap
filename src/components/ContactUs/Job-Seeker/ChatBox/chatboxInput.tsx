"use client";
import React, { useState } from "react";
import { Message } from "@/utils/messages";
import { Box, Button } from "@mui/material";
import styles from "./style.module.scss";
import SendMessageSVG from "@/assets/Chatbox/sendMessage";

interface ChatboxInputProps {
  sendANewMessage: (message: Message) => void;
}

const ChatboxInput = ({ sendANewMessage }: ChatboxInputProps) => {
  const [newMessage, setNewMessage] = useState("");
  const doSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMessage && newMessage.length > 0) {
      const newMessagePayload = {
        sentAt: new Date(),
        sentBy: "Me",
        isChatOwner: true,
        text: newMessage,
      };
      sendANewMessage(newMessagePayload);
      setNewMessage("");
    }
  };
  return (
    <>
      <Box
        component="form"
        onSubmit={(e) => doSendMessage(e)}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 20,
          mx: "0.75rem",
          my: "0.75rem",
          border: "1px solid black",
          overflow: "hidden",
          borderRadius: "999px",
          bgcolor: "#cecece",
        }}
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Write your Message Here"
          className={styles.formInput}
        />
        <Box sx={{ display: "flex", alignItems: "center", width: "3rem" }}>
          <Box
            component="button"
            type="submit"
            sx={{
              width: "22px",
              height: "21px",
              bgcolor: "transparent",
              border: "none",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "inherit",
                boxShadow: "none",
              },
            }}
          >
            <SendMessageSVG />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChatboxInput;
