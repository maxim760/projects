import React from "react"
import ReactDOM from "react-dom"
import "./scss/app.scss"
import App from "./App"
import { MemoryRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./redux/store"


import reportWebVitals from "./reportWebVitals"


ReactDOM.render(
  <React.StrictMode>
    <Router initialEntries={["/", "/cart"]}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
