import { Message } from "@/utils/messages";
import { Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ChatBoxContent = ({
  chatContentRef,
  messages,
}: {
  chatContentRef: any;
  messages: Message[];
}) => {
  const isSidebarOpen = useSelector(
    (state: any) => state.sidebar.isSidebarOpen
  );
  return (
    <>
      <Box
        ref={chatContentRef}
        sx={{
          mt: "80px",
          px: "1.5rem",
          maxHeight: "422.4px",
          overflowY: "scroll",
          pt: "2.25rem",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        {messages.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: item.isChatOwner ? "end" : "start",
            }}
          >
            <Stack sx={{ alignItems: item.isChatOwner ? "end" : "start" }}>
              <Box
                sx={{
                  bgcolor: item.isChatOwner ? "#ffffff" : "#89a0ff ",
                  color: item.isChatOwner ? "black" : "white",
                  maxWidth: isSidebarOpen ? "24rem" : "550px",
                  p: "0.75rem",
                  borderRadius: "20px",
                  border: "2px solid black",
                  position: "relative",
                  zIndex: 10,
                  transition: "all 0.3s cubic-bezier(0.76,0,0.24,1)",
                }}
              >
                <Box
                  sx={{ lineHeight: "24px", fontWeight: 500, mb: "0.25rem" }}
                >
                  {item.sentBy}
                </Box>
                <Box sx={{ lineHeight: "24px", fontSize: "15px" }}>
                  {item.text}
                </Box>
              </Box>
              <Box
                sx={{
                  clipPath: item.isChatOwner
                    ? "polygon(100% 0, 0 0, 100% 100%)"
                    : "polygon(100% 0, 0 0, 0 100%)",
                  bgcolor: "black",
                  width: "46px",
                  height: "2rem",
                  mt: "-1rem",
                }}
              ></Box>
            </Stack>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ChatBoxContent;
