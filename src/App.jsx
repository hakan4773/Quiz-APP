import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduce from './pages/Introduce';
import Quiz from './pages/Quiz';
import './index.css'
function App() {

  return (
<Router>
<Routes>
<Route path="/" element={<Introduce />}> </Route>

<Route path='/quiz/:difficulty/:amount' element={<Quiz />}>

</Route>
</Routes>
</Router>
     
  )
}

export default App
