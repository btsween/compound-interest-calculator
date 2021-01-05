import React from "react";
import TopNavigation from "./navigation/TopNavigation";
import styled from "styled-components";
import Footer from "./navigation/Footer";

import ContentCard from "./contentCard/ContentCard";

const PageBody = styled.div`
  flex: 1;
`;

function Home() {
  return (
    <div>
      <TopNavigation />
      <PageBody>
        <ContentCard />
        <ContentCard />
      </PageBody>
      <Footer />
    </div>
  );
}

export default Home;
