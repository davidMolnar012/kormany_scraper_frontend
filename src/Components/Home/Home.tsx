import { CircularProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';


import { getPlot } from '../../Api/api';
import "./Home.css";


function Home() {

    const [plot, setPlot] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getPlot().then(response => {
            setPlot(response)
            setLoading(false)
        })
    }, [])

    return (
        <div>
            <div className="home-container">
                {loading ?
                (
                    <CircularProgress />
                )
                : 
                (
                    <Plot
                    data={plot.data}
                    layout={plot.layout}
                    />
                )}
            </div>
        </div>
    )
}

export default Home;
