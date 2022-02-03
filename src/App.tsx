import { Counter } from './features/counter/Counter';
import { Header, HeaderProps } from './features/pie-header/pie-header';
import './App.css';
import config from "./pieConfig.json";


const props: HeaderProps = {
  link: config.pieHomepage,
  title: config.header
}

function App() {
  return (
    <div className="App">
      <Header title={props.title} link={props.link}/>
      <Counter />
    </div>
  );
}

export default App;
