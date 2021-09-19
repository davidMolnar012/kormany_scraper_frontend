
function NoutFound() {
    return (
        <div
        style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "20vh",
            color: "white"
        }}
        >
            <div
            style={{fontSize: "3rem", marginBottom: "10vh"}}
            >
                Ez az oldal nem létezik.
            </div>
            <div>
                <button
                type="button"
                onClick={() => window.location.href = "/"}
                style={{
                    background: "#ff6b12",
                    borderRadius: "5px",
                    color: "white",
                    fontSize: "1.5rem",
                    padding: ".8rem",
                }}
                >Vissza a főoldalra
                </button>
            </div>
        </div>

    )
}

export default NoutFound;
