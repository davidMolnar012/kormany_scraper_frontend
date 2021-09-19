import axios, { AxiosRequestConfig } from 'axios';
import {BrowserRouter as Router, Route} from "react-router-dom";


import Home from './Components/Home/Home';
import './App.css';

function App() {
    axios.interceptors.request.use(function(config: AxiosRequestConfig) {
        config.baseURL = process.env.REACT_APP_AXIOS_URL
        return config;
    });

    // Add routing when it becomes necessary
    return(
        <>
            <Router>
                <Route exact path="/" component={Home} />
            </Router>
        </>
    );
}

export default App;
