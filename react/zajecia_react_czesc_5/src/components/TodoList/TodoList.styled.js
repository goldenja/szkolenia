import styled from '@emotion/styled';

export const List = styled.ul`
  width: 600px;
  padding: 0;
  margin-top: 20px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 24px;
  list-style: none;
`;

export const ListItem = styled.li`
  border: 1px solid black;
`;
