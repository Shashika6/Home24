import styled from "@emotion/styled";

export const PageContainer = styled.div`
  position: relative;
`;

export const GridContainer = styled.div<{ showSidebar: boolean }>`
  background-color:  ${(props) => props.theme.colors.secondary};
  display: grid;
  grid-template-columns: 250px auto auto;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";

  @media (max-width: 768px) {
    grid-template-columns: ${(props) => (props.showSidebar ? "250px" : "20px")} auto auto;
  }
`;

export const StyledChild = styled.div``;

export const HeaderContainer = styled(StyledChild)`
  grid-area: header;
`;

export const SidebarContainer = styled(StyledChild)<{ showSidebar: boolean }>`
  grid-area: sidebar;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    margin: 0 0 0 8px;
    padding: 8px 0;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.showSidebar ? "grid" : "none")};
  }
`;

export const ContentContainer = styled(StyledChild)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  grid-column: span 2;
`;

export const FooterContainer = styled(StyledChild)`
  grid-area: footer;
  text-align: center;
`;

export const ProductsContainer = styled.div`
  > section[role="button"] {
    padding: 0.2em;
    background-color: lightgoldenrodyellow;
    border: 1px solid lightgray;
    cursor: pointer;
    text-align: center;
  }
`;

export const ToggleButton = styled.button<{ showSidebar: boolean }>`
  display: none; /* Hide the button by default */
  position: absolute;
  top: 170px;
  left: ${(props) => (props.showSidebar ? "250px" : 0)};
  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
  }
`;
