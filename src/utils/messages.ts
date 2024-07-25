export interface Message {
  text: string;
  sentBy: string;
  sentAt: Date;
  isChatOwner: boolean;
}
export const messages: Message[] = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. Nullam vitae diam viverra, vehicula ligula vitae, eleifend mi. Suspendisse tempus eros eu ligula aliquam.",
    sentBy: "Me",
    sentAt: new Date("2023-03-02T09:00:00Z"),
    isChatOwner: true,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. Nullam vitae diam viverra, vehicula ligula vitae, eleifend mi. Suspendisse tempus eros eu ligula aliquam.",
    sentBy: "Christiana Adams",
    sentAt: new Date("2023-03-02T09:01:00Z"),
    isChatOwner: false,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. Nullam vitae diam viverra, vehicula ligula vitae, eleifend mi. Suspendisse tempus eros eu ligula aliquam.",
    sentBy: "Me",
    sentAt: new Date("2023-03-02T09:02:00Z"),
    isChatOwner: true,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. Nullam vitae diam viverra, vehicula ligula vitae, eleifend mi. Suspendisse tempus eros eu ligula aliquam.",
    sentBy: "Christiana Adams",
    sentAt: new Date("2023-03-02T09:03:00Z"),
    isChatOwner: false,
  },
];
