import './App.css';
import './style.css'
import style from './Custom.module.css'
function App() {
  return (
    <div className="App">
      <h1 className='primary' >Style type 1 in React js</h1>
      <h1 style={{ color: 'red', backgroundColor: 'skyblue' }} >Style type 2 inline css React js</h1>
      <h1 className={style.success} >Style type 3 in module css React js</h1>


    </div >
  )

}

export default App;


/*
 new file -- style.css create 1  
.primary {
  background-color: black;
  color: skyblue;
}

/*
3.new file create and import this file
.success {
  color: gold;
  background-color: black;
}


*/


