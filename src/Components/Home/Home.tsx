import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';


import { getPlot } from '../../Api/api';


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
        </div>
    )
}

export default Home;
