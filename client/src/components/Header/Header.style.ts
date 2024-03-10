import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 32px;
  border-bottom: 1px solid #f6f6f6;
  box-shadow: 0px 4px 4px #f6f6f6;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Logo = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

export const ActionWrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 16px;
    max-height: 50px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchField = styled.input`
  height: 40px;
  width: 400px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  text-indent: 16px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 140px;
  }
`;

export const SearchDropdown = styled.div`
  position: absolute;
  top: calc(100%);
  left: 0;
  z-index: 1;
  background-color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
`;

export const SearchResultProduct = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.border};
  }
`;

export const CartWrapper = styled.h3`
  cursor: pointer;
  display: flex;
  gap: 6px;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding-top: 6px;
  }
`;
