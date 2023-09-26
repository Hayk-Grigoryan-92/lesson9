import './App.scss';
import bgImg from './assets/images/bgimg.png'
import { RandomBox } from './assets/components/randomBox';
import { Template1 } from './assets/components/template1';

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${bgImg})`}}>
          <RandomBox/>
    </div>
  );
}

export default App;
