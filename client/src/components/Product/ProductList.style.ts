import styled from "@emotion/styled";

export const ProductListWrapper = styled.div`
padding: 10px 32px 32px;
`;

export const ProductHeading = styled.h3`
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
`;

export const ProductCount = styled.div`
  font-size: 20px;
  margin-left: 4px;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 26px;
`;
