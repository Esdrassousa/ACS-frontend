import React, { Component } from 'react'
import {BrowserRouter, Route, Switch , Redirect} from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Cadastro from './pages/Cadastro'
import NewCadastro from './pages/NewCadastro'
import Casos from './pages/Casos'
import NewFmily from './pages/New_Family'

function isauthe(){
   const token = localStorage.getItem('token') 
   if(token){
       return true
   }
   
}

//Validação do token

const  PrivateRoute = ({component:Component, ... rest})=>(
    <Route  {...rest}  render={props=> (
      isauthe()  ? (
          <Component{...props}/>
      ):(
          <Redirect to={{pathname:'/' , state:{from : props.location}}}/>
      )
    )} />
    
)

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}></Route>
                <Route path="/register" component={Register}></Route>
                <PrivateRoute path='/cadastro' component={Cadastro}></PrivateRoute>
                <PrivateRoute path= "/membro/new" component={NewCadastro}></PrivateRoute>
                <PrivateRoute path= '/membro/casos' component={Casos}></PrivateRoute>
                <PrivateRoute path='/familia' component={NewFmily}></PrivateRoute>
            </Switch>
        </BrowserRouter>
    )
}