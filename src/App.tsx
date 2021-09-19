import axios, { AxiosRequestConfig } from 'axios';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import Home from './Components/Home/Home';
import './App.css';
import About from './Components/About/About';
import NoutFound from './Components/NoutFound/NoutFound';

function App() {
    axios.interceptors.request.use(function(config: AxiosRequestConfig) {
        config.baseURL = process.env.REACT_APP_AXIOS_URL
        return config;
    });

    return(
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route path="*" component={NoutFound} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
