import styled from 'styled-components';

export type BoxProps = {
  grid?: boolean;
  flex?: boolean;

  horizontal?: boolean;
  vertical?: boolean;
};

// width: ${(props) => (props.grid ? '100%' : 'auto')};
export const Box = styled.div<BoxProps>`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  width: 100%;
  gap: var(--spacing);

  ${(props) => {
    if (props.flex) {
      return `
        flex-direction: ${props.horizontal ? 'row' : 'column'};
        flex-wrap: ${props.horizontal ? 'wrap' : 'nowrap'};
      `;
    }
    if (props.grid) {
      return `
        grid-auto-flow: ${props.horizontal ? 'column' : 'row'};
      `;
    }
  }}
`;
