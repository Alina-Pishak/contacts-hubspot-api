import styled from "styled-components";

export const ContactOperationsContainer = styled.section`
  padding-top: 15px;
  padding-bottom: 20px;
  @media (min-width: 1440px) {
    padding-top: 48px;
    padding-bottom: 40px;
  }
`;

export const ContactOperationsTitle = styled.h2`
  margin-bottom: 24px;
  @media (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const ContactOperationsList = styled.ul``;

export const ContactOperationsItem = styled.li`
  display: flex;
  gap: 6px;
  align-items: center;
  border: 1px solid #1a1f39;
  border-radius: 12px;
  padding: 10px;
  background: linear-gradient(
    180deg,
    rgba(10, 14, 36, 0.9) 0%,
    rgba(10, 14, 36, 0.9) 100%
  );
  margin-bottom: 8px;
  cursor: pointer;
  color: var(--color-primary);
  stroke: var(--color-primary);
  transition: var(--transition-dur-and-func);
  &:last-child {
    margin-bottom: 0;
  }
  &:hover,
  &:focus {
    color: var(--color-hover);
    stroke: var(--color-hover);
  }
  @media (min-width: 1440px) {
    padding: 20px;
    gap: 12px;
    margin-bottom: 12px;
  }
`;

export const ContactOperationsItemIcon = styled.svg`
  stroke: inherit;
`;

export const ContactOperationsItemIconArrow = styled(ContactOperationsItemIcon)`
  margin-left: auto;
`;

export const ContactOperationsItemText = styled.p`
  font-family: var(--second-family);
  font-size: 16px;
  line-height: 140%;
  color: inherit;
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;
