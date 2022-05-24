import styled from 'styled-components';
import { Box } from './box';

export const Card = styled(Box)`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border: 1px solid #e0e0e0;
`;

Card.defaultProps = {
  vertical: true,
  flex: true,
};
