import { CircularProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';


import { getPlot } from '../../lib/Api/api';
import "./Home.css";


function Home() {

    const [plot, setPlot] = useState<any>();
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [layout, setLayout] = useState<any>();

    useEffect(() => {
        getPlot().then(response => {
            setPlot(response.data);
            setLayout(setGraphXY(response.layout));
            console.log(response.layout);
        }).catch(error => {
            setErrorMessage("Hálózati hiba");
            console.error(error);
        }).finally(() => setLoading(false));
    }, []);

    window.addEventListener("orientationchange", () => {
        // Plot's layout hook does not refresh for some reason.
        // Pretty bad but works for now.
        window.location.reload();
    })

    // Arbitary values that looked relitvely good.
    function setGraphXY(layout: any) {
        if (window.innerWidth > 900) {
            layout.height = 500;
            layout.width = 900;
        } else if (window.innerWidth < 400) {
            layout.height = 400;
            layout.width = 650;
        } else { // between 400 and 900
            layout.height = 400;
            layout.width = window.innerWidth;
        }
        return layout;
    }

    return (
        <div>
            <div className="title-wrapper">
                <div className="title">
                    <h2>Mire kellett figyelni ezen a héten?</h2>
                    <h4>Ha épp nem tudnád mit/kit kell utálni, mi segítünk!</h4>
                    <h4 style={{marginTop: "4rem"}}>A hét legfontosabb témái:</h4>
                </div>
            </div>
            <div className="react-plot-container">
                {loading ?
                (
                    <CircularProgress />
                )
                : 
                (
                    errorMessage === "" ? 
                    (
                        <Plot
                        data={plot}
                        layout={layout}
                        />
                    )
                    :
                    (
                        <p style={{color: "red"}}>{errorMessage}</p>
                    )

                )}
            </div>
            <div className="rotate-tooltip">A grafikon fekvő tájolásban jobban látható.</div>

        </div>
    )
}

export default Home;
