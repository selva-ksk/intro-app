import React, { useState } from 'react';
import { ListComponent } from './components/ListComponent/ListComponent';
import { AddListForm } from './components/ListComponent/AddListForm';

const initialData: List[] = [
  {
    text: 'Java',
    checked: false,
  },
  {
    text: 'Python',
    checked: false,
  },
];

function App() {
  const [list, setList] = useState(initialData);

  const toggleList: ToggleList = (selectedList: List) => {
    const newList = list.map((data) => {
      if (data === selectedList) {
        return {
          ...data,
          checked: !data.checked,
        };
      }
      return data;
    });
    setList(newList);
  };

  const addList: AddList = (text: string) => {
    const newAddedList = { text, checked: false };
    setList([...list, newAddedList]);
  };

  return (
    <div className="flex-container">
      <h1>SKILLS</h1>
      <ListComponent list={list} toggleList={toggleList} />
      <AddListForm addList={addList} />
    </div>
  );
}

export default App;