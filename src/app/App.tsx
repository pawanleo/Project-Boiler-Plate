import React,{lazy ,Suspense} from 'react';
import Loader from '../components/layout/Loader';

function App() {
    return (
      <Suspense fallback={<Loader/>}>

      </Suspense>
    );
  }
  
  export default App;