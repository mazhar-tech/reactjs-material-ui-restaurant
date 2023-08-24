import React from "react";
import Layout from "../Components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import "../Styles/Contact.css";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          mx: "auto", // Center horizontally
          width: "80%", // Equal margins on both sides
          textAlign: "center",
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            fontSize: "1.5rem",
          },
        }}
      >
        <Typography variant="h4">Contact Us</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias a
          placeat, omnis nostrum doloremque dolorem natus quaerat esse totam
          labore assumenda, repellat nisi cupiditate, accusantium aut iure
          obcaecati? Laboriosam, eaque. Illo cumque laborum autem optio, maiores
          voluptas expedita qui saepe iste corrupti, eius deserunt ea inventore
          vel minus dolores mollitia odio repellat! Iusto explicabo obcaecati
          !
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          mx: "auto", // Center horizontally
          width: "80%", // Equal margins on both sides
          "@media (max-width:600px)": {
            width: "100%", // Full width on smaller screens
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ color: "white", backgroundColor: "black" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  {" "}
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1234567890
                  (Toll free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  {" "}
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} /> help@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  {" "}
                  <CallIcon sx={{ color: "green", pt: 1 }} /> +92-301-666-7374
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
