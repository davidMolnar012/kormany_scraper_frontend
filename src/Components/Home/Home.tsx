import { CircularProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';


import { getPlot } from '../../lib/Api/api';
import "./Home.css";


function Home() {

    const [plot, setPlot] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const [layout, setLayout] = useState<any>();

    useEffect(() => {
        getPlot().then(response => {
            setPlot(response.data)
            setLayout(setGraphXY(response.layout))
            console.log(response.layout)
            setLoading(false)
        })
    }, [])

    function setGraphXY(layout: any) {
        if (window.innerWidth > 900) {
            layout.height = 500;
            layout.width = 900;
        }
        return layout;
    }

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
                    data={plot}
                    layout={layout}
                    />
                )}
            </div>
        </div>
    )
}

export default Home;
