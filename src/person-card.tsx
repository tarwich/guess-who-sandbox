import styled from 'styled-components';
import { Card } from './card';
import { DeleteIcon } from './components/delete-icon';
import { Gender } from './components/gender';
import { RandomIcon } from './components/random-icon';

export type PersonCardProps = {};

const PersonCardBase = styled(Card)`
  /* width: 120px; */
  background-color: #eee;
  display: grid;
  grid-template-columns: 1em 1fr 1em;
  grid-template-rows: 1em 1fr 1em;
  gap: 0;

  img {
    grid-area: 1 / 1 / 4 / 4;
    max-width: 100%;
  }

  ${Gender} {
    grid-area: 1 / 3 / 1 / 4;
    place-self: start end;
    display: none;
  }

  ${DeleteIcon} {
    grid-area: 1 / 3 / 1 / 4;
    place-self: center;
  }

  ${RandomIcon} {
    grid-area: 3 / 1 / 4 / 4;
    place-self: center;
  }
`;

export const PersonCard: React.FC<PersonCardProps> = (props) => {
  return <PersonCardBase>{props.children}</PersonCardBase>;
};
