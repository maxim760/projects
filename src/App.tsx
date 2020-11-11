import React from "react"
import { Header } from "./components"
import { Home, Cart } from "./pages"
import { Route, Switch, Redirect } from 'react-router-dom'


const App: React.FC = () => {


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Redirect to="/" exact />
        </Switch>
      </div>
    </div>
  )
}

export default App
