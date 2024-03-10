import React from "react";
import { useAppContext } from "../../context/AppContext";
import {
  CATEGORY_LABEL,
  NO_CATEGORIES_LABEL,
  ERROR_STATE,
} from "../../constants/localization";
import {
  SidebarWrapper,
  SidebarHeading,
  SidebarCategories,
  SidebarCategory,
  SidebarCategoryLabel,
} from "./SideBar.style";

const Sidebar: React.FC = () => {
  const { categories = [], error } = useAppContext();

  return (
    <SidebarWrapper aria-label="categories">
      <SidebarHeading>{CATEGORY_LABEL}</SidebarHeading>
      {error ? (
        <>{`${ERROR_STATE}${error}`}</>
      ) : categories?.length ? (
        <SidebarCategories>
          {categories.map(({ name, urlPath }) => (
            <SidebarCategory key={urlPath}>
              <SidebarCategoryLabel href={`/${urlPath}`}>
                {name}
              </SidebarCategoryLabel>
            </SidebarCategory>
          ))}
        </SidebarCategories>
      ) : (
        NO_CATEGORIES_LABEL
      )}
    </SidebarWrapper>
  );
};

export default Sidebar;
