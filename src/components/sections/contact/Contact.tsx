import { Avatar, Stack, Typography } from "@mui/joy";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import details from "@/assets/Details";
import LinkCarousel from "./LinkCarousel";
import { Default, Mobile, useMobileMode } from "@/components/Responsive";

export default function Contact() {
  const mobile = useMobileMode();

  return (
    <Stack
      gap={3}
      marginBottom={mobile ? "7rem" : 0}
      sx={{
        zIndex: 1,
        textAlign: mobile ? "center" : "left",
        alignItems: mobile ? "center" : undefined,
      }}
    >
      <Mobile>
        <Avatar
          alt="Email"
          sx={{
            position: "relative",
            border: "none",
            outline: `2px solid #a084ca`,
            boxShadow: `0 0 40px 5px #a084ca44`,
            background: '#f8f6fc',
            color: '#a084ca',
            overflow: "visible",
            marginTop: "3rem",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-5rem",
              height: "5rem",
              width: "2px",
              background: `linear-gradient(to bottom, transparent, #a084ca)`
            },
          }}
        >
          <FiMail />
        </Avatar>
      </Mobile>
      <Typography level="h2" sx={{ position: "relative" }} id="contact">
        <Default>
          <Avatar
            alt="Email"
            sx={{
              position: "absolute",
              left: "-49px",
              top: "0",
              transform: "translateX(-50%)",
              border: "none",
              outline: `2px solid #a084ca`,
              boxShadow: `0 0 40px 5px #a084ca44`,
              background: '#f8f6fc',
              color: '#a084ca',
            }}
          >
            <FiMail />
          </Avatar>
        </Default>
        Get{" "}
        <Typography sx={{ color: '#a084ca', fontWeight: 700 }}>
          in touch
        </Typography>
      </Typography>

      <Typography
        level="h5"
        textColor="text.tertiary"
        sx={{
          maxWidth: "500px",
        }}
      >
        Feel free to{" "}
        <Typography textColor="text.primary">contact me</Typography> if you have
        any questions or suggestions. I am always open to new{" "}
        <Typography textColor="text.primary">
          ideas and opportunities
        </Typography>
        .
      </Typography>

      <LinkCarousel
        repeat={4}
        links={[
          {
            url: `mailto:${details.contact.email}`,
            icon: <FiMail />,
            title: "Email",
            color: "#a084ca",
          },
          {
            url: details.contact.linkedin,
            icon: <FaLinkedin />,
            title: "LinkedIn",
            color: "#b39ddb",
          },
          {
            url: details.contact.github,
            icon: <FaGithub />,
            title: "GitHub",
            color: "#7c43bd",
          },
        ]}
      />
    </Stack>
  );
}
