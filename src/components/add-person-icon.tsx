import styled from 'styled-components';

export const AddPersonIcon = styled.span`
  background: hsl(90, 55%, 60%);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  font-size: 50px;
  display: grid;
  place-items: center;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 0 0 1px #ccc;

  :active {
    background: hsl(90, 55%, 50%);
    box-shadow: 0 0 0 1px #ccc, 0 0 0 2px #ccc;
  }
`;

AddPersonIcon.defaultProps = {
  children: '✚',
};
