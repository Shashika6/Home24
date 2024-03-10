import React, { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { Menu, ChevronsLeft } from "react-feather";
import { LOADING_STATE } from "../../constants/localization";
import {
  PageContainer,
  ToggleButton,
  GridContainer,
  HeaderContainer,
  SidebarContainer,
  ContentContainer,
  ProductsContainer,
  FooterContainer,
} from "./Layout.style";

type LayoutProps = {
  children: React.ReactNode;
  loading: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, loading }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <PageContainer>
      <ToggleButton showSidebar={showSidebar} onClick={toggleSidebar}>
        {showSidebar ? <ChevronsLeft /> : <Menu />}
      </ToggleButton>
      <GridContainer showSidebar={showSidebar}>
        <HeaderContainer role="header">
          <Header />
        </HeaderContainer>
        {loading ? (
          <>{LOADING_STATE}</>
        ) : (
          <>
            <SidebarContainer role="navigation" showSidebar={showSidebar}>
              <Sidebar />
            </SidebarContainer>

            <ContentContainer>
              <ProductsContainer>{children}</ProductsContainer>
            </ContentContainer>

            <FooterContainer role="contentinfo">
              <Footer />
            </FooterContainer>
          </>
        )}
      </GridContainer>
    </PageContainer>
  );
};

export default Layout;
