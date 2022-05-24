import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Box } from './box';
import { AddPersonIcon } from './components/add-person-icon';
import { DeleteIcon } from './components/delete-icon';
import { Gender } from './components/gender';
import { RandomIcon } from './components/random-icon';
import { PersonCard } from './person-card';
import { Person } from './types/person';

const GlobalStyle = createGlobalStyle`
  iframe { display: none; }

  html {
    --spacing: 8px;
  }

  html, body, #root, .App {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .App {
    padding: var(--spacing);
  }
`;

const PersonGrid = styled(Box)`
  grid-template-columns: repeat(auto-fill, 150px);
  grid-auto-flow: dense;
  width: 100%;
  place-items: center;
`;
PersonGrid.defaultProps = {
  grid: true,
  horizontal: true,
};

export default function App() {
  const [persons, setPersons] = React.useState(
    new Array(20).fill(0).map(() => new Person())
  );

  const handleDelete = (person: Person) => {
    setPersons(persons.filter((p) => p !== person));
  };

  const handleAdd = () => {
    setPersons([...persons, new Person()]);
  };

  const handleRandomize = (person: Person) => {
    setPersons(
      persons.map((p) => {
        if (p === person) {
          return new Person();
        }
        return p;
      })
    );
  };

  return (
    <div className="App">
      <GlobalStyle />

      <PersonGrid>
        <AddPersonIcon onClick={handleAdd} />
        {persons.map((person, index) => (
          <PersonCard key={index}>
            <Gender gender={person.gender} />
            <img src={person.url} />
            <DeleteIcon onClick={() => handleDelete(person)} />
            <RandomIcon onClick={() => handleRandomize(person)} />
          </PersonCard>
        ))}
      </PersonGrid>
    </div>
  );
}
