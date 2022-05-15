import React from 'react';
import { ListItem } from './ListItem';

interface Props {
  list: List[];
  toggleList: ToggleList;
}

export const ListComponent: React.FC<Props> = ({ list, toggleList }) => {
  return (
    <ul>
      {list.map((data) => (
        <ListItem key={data.text} list={data} toggleList={toggleList} />
      ))}
    </ul>
  );
};