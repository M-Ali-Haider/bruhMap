import ContactUsEmailSVG from "@/assets/ContactUs/email";
import ContactUsFacebookSVG from "@/assets/ContactUs/facebook";
import ContactUsInstagramSVG from "@/assets/ContactUs/instagram";
import ContactUsPhoneSVG from "@/assets/ContactUs/phone";

export interface ContactUsItem {
  type: String;
  svg: any;
  value: string;
}
export const contactUs: {
  type: string;
  svg: any;
  value: string;
}[] = [
  {
    type: "Email Address",
    svg: ContactUsEmailSVG,
    value: "example123@gmail.com",
  },
  { type: "Phone Number", svg: ContactUsPhoneSVG, value: "+123 87527493" },
  { type: "Facebook", svg: ContactUsFacebookSVG, value: "Lorem Ipsum" },
  {
    type: "Social Media",
    svg: ContactUsInstagramSVG,
    value: "@loremipsum12",
  },
];
