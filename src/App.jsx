
import './App.css';
import { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form';

function App() {

  // const [num, setNum] = useState(1);
  // const [username, setUsername] = useState('');

  const [items , setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
    //...items is the use state [items] in above
    //it will set data using state with a parameter (item)
  }

  const removeItem = (index) => {
    if(items.length > 0) {
      const updateItems = items.filter((_, i) => i !== index);
      setItems(updateItems);
    }
   }
 

  return (
    <>
    <Header />
     <main>

    <Form items = {items} onAddItem = {addItem} onRemoveItem = {removeItem}/>


{/*       
      <h1>{num}</h1>
      <button onClick = {() => setNum(currentNum => currentNum + 1)}>ADD</button>
      <br></br>


      <h1>{username}</h1>
      <input onChange={(e) => setUsername(e.target.value)}></input> */}
     </main>
    
     <Footer />
    </>
  );
}

export default App;
