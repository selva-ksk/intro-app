interface List {
    text: string;
    checked: boolean;
  }
  
type ToggleList = (selectedList: List) => void;

type AddList = (text: string) => void;