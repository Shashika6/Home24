import styled from "@emotion/styled";

export const CartWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  overflow-y: auto;
  height: auto;
  width: 300px;
  background-color: ${(props) => props.theme.colors.secondary};
  transition: right 0.4s ease-in-out;
  padding: 16px;
`;

export const CartHeader = styled.div`
  display: flex;
`;

export const CartHeading = styled.div`
  padding-inline-start: 4px;
  align-self: center;
  font-weight: 600;
`;

export const CartProductImageWrapper = styled.div`
  min-width: 70px;
`
export const CartProductIcon = styled.img`
  height: 50px;
  width: 50px;
  padding-inline-end: 20px;
`;

export const CartProduct = styled.div<{ isEven: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  gap: 8px;
  border-bottom: .25px solid ${(props) => props.theme.colors.border};
`;

export const CartProductName = styled.div`
  display:flex;
  font-size: 14px;
  align-items:center;
  font-weight: 500;
`;

export const CartProductPrice = styled.div`
  align-self: flex-end;
`;

export const CartTotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const CartTotalLabel = styled.div`
  font-weight: 600;
`;

export const CartTotalPrice = styled.div`
  font-weight: 600;
`;

export const CartCloseButton = styled.a`
  cursor: pointer;
  margin-left: auto;
`;

export const CartActionWrapper = styled.a`
  padding: 16px;
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const CartActionButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
  }

  &:active {
    opacity: 0.4;
  }
`;

export const CartActionSecondaryButton = styled(CartActionButton)`
  background-color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;