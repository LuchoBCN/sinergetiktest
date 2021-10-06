import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nom from '../pages/Nom'
import Ubicacio from '../pages/Ubicacio'
import Tipus from '../pages/Tipus'
import Composicio from '../pages/Composicio'
import Humitat from '../pages/Humitat'
import Soroll from '../pages/Soroll'
import Luminocitat from '../pages/Luminocitat'
import Elmeusemafor from '../pages/Elmeusemafor'
import Semaforperespais from '../pages/Semaforperespais'
import Landing from '../pages/Landing'
import PageNoyFound from '../pages/PageNoyFound'
import NavbarComponent from '../components/NavbarComponent'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
export default function AppRouter() {
    return (
        <div>
            <Router>
                <NavbarComponent />
                <Switch>
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
                    <Route path="/soroll">
                        <Soroll></Soroll>
                    </Route>
                    <Route path="/luminocitat">
                        <Luminocitat></Luminocitat>
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
    )
}