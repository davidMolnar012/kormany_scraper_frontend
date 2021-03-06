import "./About.css";

function About() {
    return (
        <div className="description-wrapper">
            <div className="description">
                <h3 className="description-header">
                    Szakmai leirás:
                </h3>
                <p>
                    A weboldal mögött egy algoritmus különböző kormány média oldalait olvassa,
                    majd ezeket összesitve generál egy grafikont az elmúlt napok legemlegetettebb témáiról.
                </p>
                <p>
                    A grafikonon egy egység az y tengelyen 1 emlitést jelent az adott szóból.
                </p>
                <p>
                    Később tervezek hozzáadni egyéb funkcionalitásokat az oldalhoz, jelenleg a szabadidőm a limitáló tényező az oldal fejlődésében.
                </p>
                <p>
                    Kapcsolat: ormis95@gmail.com
                </p>
                <h3 className="description-header">
                    Story:
                </h3>
                <p>
                    A kommunikáció jelenleg a bitek szintjén zajlik (Brüsszel 😠) ezért ez az oldal
                    a revolver médiát gúnyolja ki, követve régi foellenseg.hu mintáját,
                    amely már sajnos évek óta nem üzemel.
                </p>
                <p>
                    A weboldal létrehozója egyik oldallal sem szimpatizál. Az oldal azért jött létre, hogy a politikai kommunikáció
                    lezüllesztett állapotának tükröt tartson és kifigurázza azt.
                </p>
            </div>
        </div>
    )
}

export default About;
