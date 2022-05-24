import styled from 'styled-components';

export const Gender = styled.div<{ gender: 'male' | 'female' }>`
  color: ${(props) => (props.gender === 'male' ? 'blue' : 'salmon')};
  font-family: sans-serif;
  font-weight: 900;
  font-size: 1.5em;

  :after {
    content: '${(props) => (props.gender === 'male' ? '♂' : '♀')}';
    display: inline-block;
    transform: ${(props) => (props.gender === 'male' ? 'rotate(45deg)' : '')};
  }
`;
