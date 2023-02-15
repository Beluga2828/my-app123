
import './App.css';
import FilterableTable from './Filterable';
import { useState } from 'react';
import Searchbar from './Components/searchbar';
import ProductsTable from './Components/producttable';
import Packinglist from './Components/conditions';
import List from './Components/maps';
import List1 from './Components/dataDisplay';
import Toolbar from './Components/evenyhandler';
import Toolbar1 from './Components/button';
import Form12 from './Components/form1';
import FilterableList from './Components/reducer_1';
import { Form5 } from './Components/form5';
import { Reduceer } from './Components/reducers';
import { Reducerex } from './Components/reducerex';
import { ReducerExample } from './Components/reducersss';
import { ContextApp } from './Components/context';




function App() {
 // const [filterText,setFilterText]=useState('');
 // const [inStockOnly,setInStockOnly]=useState(false);
  return (
    <div>
      {/* <main className='main'> 
    <FilterableTable>
       <Searchbar filterText={filterText} 
    inStockOnly={inStockOnly} onInstockOnly={setInStockOnly} onFilterText={setFilterText}/>
       <ProductsTable filterText={filterText} 
    inStockOnly={inStockOnly} products={PRODUCTS}/>
    </FilterableTable></main>
    <Packinglist />
      <List />
    <List1 />
    <Toolbar />
    <Toolbar1 />
    <Form12 />
    <Form5 />
    <Reduceer />
     <Reducerex />
    <FilterableList />*/}
   <ContextApp />
    </div>
  );
}

export default App;


const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];