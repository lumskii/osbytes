import styled from 'styled-components';
import{Link} from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "transparent" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#f9bc23" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 2px solid #f9bc23;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) =>
      primary ? "rgba(249, 188, 35, 0.34)" : "rgba(193, 187, 173, 0.62)"};
    color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  }
`;