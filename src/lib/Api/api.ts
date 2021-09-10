import axios from "axios";

export async function getPlot() {
    const resp = await axios.get("/plots");
    return resp.data;
}