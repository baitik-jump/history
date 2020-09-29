import React, {useState} from 'react';
import { About } from './About';
import { Main } from './Main';


function App() {
  const [activePage, setActivePage] = useState(0);

  return(
    <div>
      { activePage === 0 && <Main onPageChange={setActivePage} /> }
      { activePage === 1 && <About/> }
    </div>
  );
}

export default App;
