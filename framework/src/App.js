/* Import statements */
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import todo from "./pages/to-do/todo";
import albuns from "./pages/albuns/albuns";
import postagens from "./pages/postagens/postagens";
import './App.css';


export default function App() {
  return (
    <div className="container">
      <nav className="navbar"> 
      <a href="https://frwk.com.br/"><img src="./logof.png" className= "logo"></img></a>
       <ul className="App-link">
       
            <Link className="App-link" to="/"><button className="button">Menu inicial</button></Link>
          
          
            <Link className="App-link" to="/postagens"><button className="button">Postagens</button></Link>
          
          
            <Link className="App-link" to="/albuns"><button className="button">Álbuns</button></Link>
          
          
            <Link className="App-link" to="/todos"><button className="button">To-Do</button></Link>
          
        </ul>
      </nav>

      <div className="footer">
      <a>Desenvolvido por Deborah Vilas Boas S2</a>
      </div>

      <Route path="/postagens" component={postagens} />
      <Route path="/albuns" component={albuns} />
      <Route path="/todos" component={todo} />
    </div>
  );
}