import styled from "styled-components";

export const FieldsContainer = styled.section`
  padding-bottom: 15px;
  padding-top: 10px;
  @media (min-width: 1440px) {
    padding-bottom: 48px;
    padding-top: 20px;
  }
`;

export const FieldsTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 20px;
  @media (min-width: 1440px) {
    font-size: 18px;
    margin-bottom: 40px;
  }
`;

export const Table = styled.table`
  padding: 24px;
  border-radius: 14px;
  width: 100%;
  background-color: var(--color-background);
`;

export const TableWrapper = styled.div`
  background: linear-gradient(
    152.67deg,
    #11183c -5.94%,
    #e7e9f5 55.4%,
    #343958 82.96%
  );
  padding: 1px;
  border-radius: 14px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Th = styled.th`
  font-family: var(--primary-font);
  font-weight: 400;
  font-size: 12px;
  color: var(--color-secondary);
  text-align: left;
  padding-bottom: 12px;
  width: 290px;
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const Tr = styled.tr`
  &:last-child {
    td {
      border: none;
      padding-bottom: 0;
    }
  }
`;

export const Td = styled.td`
  font-weight: 400;
  font-size: 12px;
  border-bottom: 1px solid #1a1f39;
  padding: 12px 0;
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const TdLast = styled.td`
  border-bottom: none;
  padding: 0;
`;

export const ResponsiveWrapper = styled.div`
  overflow-x: auto;
`;
