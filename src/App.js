import "./App.css";
import logo from "./logo.png";
import {products} from "./backend/db/products.js"
function App() {
  return (
    <div className="App">
      <h3>testing mockbee API</h3>
      <div>{products.map(({author,title,price,categoryName})=>(
        <div>
        <li key={author}>author :{author}</li>
        <p key={title}>titile: {title}</p>
        <p key={price}>price : {price}</p>
        <p key={categoryName}>Category: {categoryName}</p>
        <li key={author}>author :{author}</li>
        <p key={title}>titile: {title}</p>
        <p key={price}>price : {price}</p>
        <p key={categoryName}>Category: {categoryName}</p>
        <li key={author}>author :{author}</li>
        <p key={title}>titile: {title}</p>
        <p key={price}>price : {price}</p>
        <p key={categoryName}>Category: {categoryName}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
