import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Registration from "./pages/Registration";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import React from "react";

// const data = [
//   {
//     title:
//       "Biernacki: Białoruś? To jest dopiero początek wielkiego kryzysu migracyjnego",
//     intro:
//       "Gdybyśmy - nawet po cichu - przepuścili ludzi koczujących na granicy z Białorusią, w mediach społecznościowych pojawiłaby się informacja, że Polska stanowi dobry kanał tranzytowy na Zachód.",
//   },
//   {
//     title:
//       "Podniebne ewolucje, czyli weekendowe pokazy Lotos Gdynia Aerobaltic Airshow",
//     intro:
//       "Gdyńskie lotnisko w Kosakowie stanie się w ten weekend areną zapierających dech w piersiach, podniebnych akrobacji. Piloci śmigłowców, wojskowych odrzutowców oraz samolotów transportowych z całego świata, będą prezentować swoje maszyny na ziemi oraz umiejętności lotnicze w powietrzu.",
//   },
//   {
//     title:
//       "Kolejny kanał TVN zagrożony brakiem koncesji. KRRiT wstrzymuje się z decyzją",
//     intro:
//       "Tym razem sprawa dotyczy TVN 7. Stacja wystąpiła do Krajowej Rady Radiofonii i Telewizji o przedłużenie koncesji dla kanału już w grudniu ubiegłego roku. Na razie nie ma żadnej odpowiedzi ze strony KRRiT.",
//   },
// ];

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/register">
            <Registration/>
          </Route>
        </Switch>
        <Footer/>
    </Router>
    );
  }

export default App;
