import React from "react";
import ReactDOMServer from "react-dom/server";
import fs from "fs";
import styled from "styled-components";

import Header from "./app/components/common/Header";
import Footer from "./app/components/common/Footer";
import LoadingDotsIcon from "./app/components/common/LoadingDotsIcon";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.main`
  background-color: black;
  padding: 4rem 4.8rem 6.4rem;
  @media (max-width: 34em) {
    padding: 2rem 1rem;
  }
`;

// this file generates default HTML content before the site loads
function Shell() {
  return <></>;
}

const startOfHTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="keywords" content="Kenji Peralejo, Software Engineer, Data Scientist">
      <meta name="author" content="Kenji Peralejo">
      <meta
      name="description"
      content="Kenji Peralejo: Software Engineer | Data Scientist"
    />
      <title>Kenji Peralejo</title>
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300,400,400i,700,700i&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
      <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossorigin="anonymous"></script>
    </head>
    <body>
      <div id="app">`;

const endOfHTML = `</div>
    </body>
  </html>`;

const fileName = "./app/index-template.html";
const writeStream = fs.createWriteStream(fileName);

writeStream.write(startOfHTML);

// Add React generated HTML
const myStream = ReactDOMServer.renderToPipeableStream(<Shell />, {
  onAllReady() {
    myStream.pipe(writeStream);
    // End the stream with the final bit of our HTML
    writeStream.end(endOfHTML);
  }
});
