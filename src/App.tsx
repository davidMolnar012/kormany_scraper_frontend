import axios, { AxiosRequestConfig } from 'axios';
import Home from './Components/Home/Home';

function App() {
    axios.interceptors.request.use(function(config: AxiosRequestConfig) {
        config.baseURL = process.env.REACT_APP_AXIOS_URL
        return config;
    });

    // Add routing when it becomes necessary
    return(
        <>
            <Home />
        </>
    );
}

export default App;
