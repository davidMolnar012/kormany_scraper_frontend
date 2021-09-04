import axios from 'axios';
import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import './App.css';

function App() {

    const [plot, setPlot] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // http://18.194.102.84:8080/plots
        axios.get("http://localhost:8080/plots")
        .then((resp) => {
            setPlot(resp.data)
            console.log(resp.data)
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
                <Plot
                data={plot.data}
                layout={plot.layout}
                />

            )}
        </>
    );
}

export default App;
