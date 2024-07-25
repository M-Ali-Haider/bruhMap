import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from ".";
import { Box } from "@mui/material";

const SidebarNavLink = ({ item }: { item: NavLink }) => {
  const pathName = usePathname();
  return (
    <Link href={item.href} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          pl: "8px",
          py: "12px",
          borderTopLeftRadius: "12px",
          borderBottomLeftRadius: "12px",
          bgcolor: pathName === item.href ? "white" : "transparent",
          color: pathName === item.href ? "black" : "white",
          textTransform: "none",
        }}
      >
        {item.svg}
        <span>{item.name}</span>
      </Box>
    </Link>
  );
};

export default SidebarNavLink;
