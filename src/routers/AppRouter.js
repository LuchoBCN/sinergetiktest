import React, { useState }  from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nom from '../pages/Nom'
import Ubicacio from '../pages/Ubicacio'
import Tipus from '../pages/Tipus'
import Composicio from '../pages/Composicio'
import Humitat from '../pages/Humitat'
import Aire from '../pages/Aire'
import Elmeusemafor from '../pages/Elmeusemafor'
import Semaforperespais from '../pages/Semaforperespais'
import Landing from '../pages/Landing'
import PageNoyFound from '../pages/PageNoyFound'
import NavbarComponent from '../components/NavbarComponent'
import { UserContext } from '../context/UserContext'
import Temperatura from '../pages/Temperatura'
import Login from '../pages/Login'

export default function AppRouter() {
    const [value, setValue] = useState("Otro valor");

    return (
        <UserContext.Provider value={{value, setValue}}>
        <div>
            <Router>
                <NavbarComponent />
                <Switch>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/nom">
                        <Nom></Nom>
                    </Route>
                    <Route path="/ubicacio">
                        <Ubicacio></Ubicacio>
                    </Route>
                        <Route path="/tipus">
                            <Tipus></Tipus>
                        </Route>
                    <Route path="/composicio">
                        <Composicio></Composicio>
                    </Route>
                    <Route path="/humitat">
                        <Humitat></Humitat>
                    </Route>
                    <Route path="/temperatura">
                        <Temperatura></Temperatura>
                    </Route>
                    <Route path="/aire">
                        <Aire></Aire>
                    </Route>
                    <Route path="/elmeusemafor">
                        <Elmeusemafor></Elmeusemafor>
                    </Route>
                    <Route path="/semaforperespais">
                        <Semaforperespais></Semaforperespais>
                    </Route>
                    <Route exact path="/">
                        <Landing></Landing>
                    </Route>
                    <Route path="*">
                        <PageNoyFound></PageNoyFound>
                    </Route>

                </Switch>
            </Router>
        </div>
        </UserContext.Provider>
    )
}
