import './App.css';
import SearchCard from './SearchCard';

function App() {
  const listUsers = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
    }
  ]

  const getDataFromChild = (inputValue) => {
    console.log('dapat data dari child', inputValue)
  }

  const props = {
    dataUsers: listUsers,
    getDataFromChild: getDataFromChild
  }

  return (
    <div className="App">
      <SearchCard {...props} />
    </div>
  );
}

export default App;
