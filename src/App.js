import React,{useState,useCallback, useMemo} from 'react';
import './App.css';
import DemoList from './components/Demo/Demo/DemoList';
import Button from './components/Demo/UI/Button/Button';

function App() {
const [listTitle,setListTitle]=useState('My list');
const[Order,changeOrder]=useState(true);
let buttontext;
if(Order===true)
{
buttontext="Show descending order";
}
else
{
  buttontext="Show ascending order";
}

const changeTitleHnadler=useCallback(()=>{
setListTitle('New Title');
},[]);
const orderHandler=()=>
{
changeOrder(prev=>!prev);
}

const listItems=useMemo(()=>[5,3,2,10,20],[]);

return (
  <div className='app'>
    <DemoList title={listTitle} order={Order} items={listItems} />
  <Button onClick={changeTitleHnadler}>Change List Title</Button>
  <Button onClick={orderHandler}>{buttontext}</Button>
  </div>
  );
}

export default App;
