import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const DeleteIcon = styled.span`
  background: hsl(0, 85%, 45%);
  color: white;
  border-radius: 50%;
  width: calc(var(--spacing) * 3);
  height: calc(var(--spacing) * 3);
  display: grid;
  place-items: center;
  box-shadow: 0 0 0 1px #ccc;
  cursor: pointer;
  user-select: none;

  :active {
    background: hsl(0, 85%, 35%);
    box-shadow: 0 0 0 1px #ccc, 0 0 0 2px #ccc;
  }
`;

DeleteIcon.defaultProps = {
  children: '✘',
};
