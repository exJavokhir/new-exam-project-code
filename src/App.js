import { useState }from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
}from 'react-router-dom'

import './assets/styles/main.scss'



import {
  Home,
  SingleProduct,
  TopProduct,
  Auth,
  Chat
}from './pages'

function App() {
  const [ 
    token, SetToken
]=useState(window.localStorage.getItem('sessionToken'))
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/product" component={SingleProduct}/>
            <Route exact path="/topproduct" component={TopProduct}/>
          </Switch>

          {
            token ? (
              <Switch>
                <Route path="/chat" component={Chat}/>
              </Switch>
            ):(
              <Switch>
                 <Route  path="/auth" render={() => <Auth SetToken={SetToken} token={token}/>}/>
              </Switch>
            )
          }
        </Router>
    </div>
  );
}

export default App;
