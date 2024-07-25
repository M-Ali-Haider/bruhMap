import ChangePasswordSVG from "@/assets/profileOptions/changePassword";
import DeleteAccountSVG from "@/assets/profileOptions/deleteAccount";
import DownloadProfileSVG from "@/assets/profileOptions/downloadProfile";
import PreviewProfileSVG from "@/assets/profileOptions/previewProfile";
import ShareProfile from "@/assets/profileOptions/shareProfile";

interface ProfileOption {
  title: string;
  svg: React.ComponentType; // assuming you're using React
}

export const profileOptions: ProfileOption[] = [
  { title: "Change Password", svg: ChangePasswordSVG },
  { title: "Preview Profile", svg: PreviewProfileSVG },
  { title: "Share Profile", svg: ShareProfile },
  { title: "Download Profile", svg: DownloadProfileSVG },
  { title: "Delete Account", svg: DeleteAccountSVG },
];
