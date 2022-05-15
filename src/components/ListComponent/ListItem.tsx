import React from 'react';

interface Props {
  list: List;
  toggleList: ToggleList;
}

export const ListItem: React.FC<Props> = ({ list, toggleList }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={list.checked}
        onClick={() => {
          toggleList(list);
        }}
      />
      <h4 style={{ textDecoration: list.checked ? 'line-through' : undefined }}>{list.text}</h4>      
    </li>
  );
};