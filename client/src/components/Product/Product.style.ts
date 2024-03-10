import styled from "@emotion/styled";

export const ProductWrapper = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  overflow-wrap: break-word;
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  &:hover {
    box-shadow: 0 0 10px #808080;
    transform: scale(1.1);
  }
`;

export const ProductImageWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    min-height: 200px;
    justify-content: center;
  }
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const ProductDetails = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ProductName = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  cursor: default;
  min-height: 50px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ProductPrice = styled.div`
  font-size: 20px;
  color: #333;
  margin-bottom: 12px;
`;

export const AddToCartButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
  }

  &:active {
    font-weight: 800;
    opacity: 0.4;
  }
`;
