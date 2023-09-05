import './App.css';
import { Header } from './component/Header/Header';
import{Provider} from "./component/Context";




function App() {

  return (
    <div className="App">
     <Provider>
     <Header />
      
        <h1>Welcome to Mi isla RD, This site is comming soon</h1>
        <p> this web site is undercontruction</p>
     
       </Provider> 
     </div>
   
  );
}

export default App;


