import { Box } from "@mui/joy";
import { useMobileMode } from "@/components//Responsive";

export default function Divider() {
  const mobile = useMobileMode();
  return (
    <>
      <Box
        component="div"
        sx={{
          position: "relative",
          marginX: "50px",
          marginTop: "80px",
          marginBottom: ".5rem",
          height: "2px",
          width: "calc(100% - 100px)",
          background: "linear-gradient(to right, #7c43bd, #a084ca, #e1bee7)",
          "&::before": mobile
            ? {}
            : {
                content: '""',
                position: "absolute",
                left: "-80px",
                top: "-80px",
                height: "82px",
                width: "80px",
                borderBottomLeftRadius: "80px",
                border: "2px solid #7c43bd",
                borderRight: "none",
                borderTop: "none",
              },
          "&::after": mobile
            ? {}
            : {
                content: '""',
                position: "absolute",
                right: "-80px",
                bottom: "calc(-78px - 1rem)",
                height: "calc(80px + 1rem)",
                width: "80px",
                borderTopRightRadius: "80px",
                border: "2px solid #e1bee7",
                borderLeft: "none",
                borderBottom: "none",
              },
        }}
      />
      <Box
        component="div"
        sx={{
          position: "relative",
          marginX: "50px",
          marginBottom: "80px",
          marginTop: ".5rem",
          height: "2px",
          width: "calc(100% - 100px)",
          background: "linear-gradient(to right, #7c43bd, #a084ca, #e1bee7)",
          "&::before": mobile
            ? {}
            : {
                content: '""',
                position: "absolute",
                left: "-80px",
                top: "calc(-80px - 1rem)",
                height: "calc(82px + 1rem)",
                width: "80px",
                borderBottomLeftRadius: "80px",
                border: "2px solid #7c43bd",
                borderRight: "none",
                borderTop: "none",
              },
          "&::after": mobile
            ? {}
            : {
                content: '""',
                position: "absolute",
                right: "-80px",
                bottom: "-78px",
                height: "80px",
                width: "80px",
                borderTopRightRadius: "80px",
                border: "2px solid #e1bee7",
                borderLeft: "none",
                borderBottom: "none",
              },
        }}
      />
    </>
  );
}
