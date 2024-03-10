import styled from "@emotion/styled";

export const SidebarWrapper = styled.nav`
  padding: 32px;
  border-radius: 8px;
`;

export const SidebarHeading = styled.h3`
  align-items: center;
  margin-bottom: 12px;
  margin-top: 12px;
  padding-inline-start: 8px;
  font-weight: 600;
`;

export const SidebarCategories = styled.ul`
  list-style-type: none;
`;

export const SidebarCategory = styled.li`
overflow-wrap: break-word;
width: 150px;
  margin-bottom: 8px;
  &:hover {
    background-color: #E5E4E2;
  }
`;

export const SidebarCategoryLabel = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: #000000;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;