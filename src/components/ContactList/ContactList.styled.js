import styled from "@emotion/styled";

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;
