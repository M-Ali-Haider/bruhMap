import InstagramSVG from "@/assets/instagram";
import LinkedInSVG from "@/assets/linkedin";
import FacebookSVG from "@/assets/profileFacebook";

export const profileDetails: {
  name: string;
  src: string;
  email: string;
  socials: {
    svg: any;
    href: string;
  }[];
} = {
  name: "Alex Smith",
  src: "adminPfp.jpg",
  email: "Alex@example.com",
  socials: [
    { svg: FacebookSVG, href: "https://www.facebook.com/shaheer6261" },
    {
      svg: InstagramSVG,
      href: "https://www.instagram.com/shaheer_ul_islam1/",
    },
    { svg: LinkedInSVG, href: "https://www.linkedin.com/in/shaheer6261/" },
  ],
};
