import React, { useState } from 'react';
import './theme.css';

interface Props {
  addList: AddList;
}

export const AddListForm: React.FC<Props> = ({ addList }) => {
  const [text, setText] = useState('');

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        type="submit"
        className='button-add button-shadow'
        onClick={(e) => {
          e.preventDefault();
          addList(text);
          setText('');
        }}
      >
        Add Skills
      </button>
    </form>
  );
};