import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import './App.css';

function App() {
    axios.interceptors.request.use(function(config: AxiosRequestConfig) {
        config.baseURL = process.env.REACT_APP_AXIOS_URL
        return config;
    });

    const [plot, setPlot] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get('/plots')
        .then((resp) => {
            setPlot(resp.data)
            setLoading(false);
        })
    }, [])

    return(
        <>
            {loading ?
            (
                <h1>Loading...</h1>
            )
            : (
                <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "auto",
                    paddingTop: "10vh",
                }}
                >
                    <Plot
                    data={plot.data}
                    layout={plot.layout}
                    />
                </div>

            )}
        </>
    );
}

export default App;
