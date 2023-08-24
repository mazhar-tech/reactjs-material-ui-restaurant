import React from "react";
import Layout from "../Components/Layout/Layout";
import { Box, Typography } from "@mui/material";
const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15,
        textAlign: "center",
        p: 2,
        "& h4": { fontWeight: 'bold', my: 2, fontSize: "1.5rem" },

        "& p": {
          textAlign: "justify"
        },
        "@media(max-width:600px)": {
          mt: 0,
          fontSize:"1.5rem"
        }
      }}>
        <Typography variant="h4">
          Welcome To My Resturant
        </Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sit officiis, impedit voluptate vero ab explicabo,
          officia exercitationem laborum saepe ipsa debitis iusto obcaecati.
          Aliquam delectus facere odit, iusto voluptatem eligendi voluptas quaerat.
          Perferendis, incidunt, inventore expedita adipisci nemo sunt facilis itaque
          quod ipsum atque quaerat modi. Maxime facere assumenda, ullam consequuntur
          recusandae pariatur, ducimus consectetur, rem suscipit odit deleniti. Quidem,
          temporibus atque? Rem consequatur ipsa inventore veritatis velit expedita quas
          laudantium, accusamus sunt totam nesciunt, dolore iusto eos alias incidunt! Magnam
          illum ipsa ut odio aut dolorem perferendis ea. Eveniet esse repudiandae tenetur
          asperiores quos sunt officia recusandae omnis id.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sit officiis, impedit voluptate vero ab explicabo,
          officia exercitationem laborum saepe ipsa debitis iusto obcaecati.
          Aliquam delectus facere odit, iusto voluptatem eligendi voluptas quaerat.
          Perferendis, incidunt, inventore expedita adipisci nemo sunt facilis itaque
          quod ipsum atque quaerat modi. Maxime facere assumenda, ullam consequuntur
          recusandae pariatur, ducimus consectetur, rem suscipit odit deleniti. Quidem,
          temporibus atque? Rem consequatur ipsa inventore veritatis velit expedita quas
          laudantium, accusamus sunt totam nesciunt, dolore iusto eos alias incidunt! Magnam
          illum ipsa ut odio aut dolorem perferendis ea. Eveniet esse repudiandae tenetur
          asperiores quos sunt officia recusandae omnis id.</p>
      </Box>
    </Layout >
  );
};

export default About;
