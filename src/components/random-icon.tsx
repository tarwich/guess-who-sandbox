import styled from 'styled-components';

export const RandomIcon = styled.span`
  background: hsl(224, 22%, 56%);
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
    background: hsl(224, 22%, 46%);
    box-shadow: 0 0 0 1px #ccc, 0 0 0 2px #ccc;
  }
`;

RandomIcon.defaultProps = {
  children: '🎲',
};
