import { useState, useEffect } from "react";


interface forAllplayer {
    players: string
}

export default function Allplayers(props: forAllplayer) {

    const [pv, setPv] = useState(20);
    const hpoff = pv < 0

    useEffect(() => {
        if (pv > 100) {
            setPv((pv) => pv = 100);
        }
    }, [pv])

    function addPv1() {
        return setPv(() => pv+1);
    }

    function removePv1() {
        return setPv(() => pv-1);
    }

    function addPv5() {
        return setPv(() => pv+5);
    }

    function removePv5() {
        return setPv(() => pv-5);
    }

    function reset() {
        return setPv((pv) => pv = 20);
    }

    return(
        <>
        <div className="bg-div">
            <p className="text-name-player">{props.players}</p>

            <p className="text-life-player">{pv} / 100</p>

            <div className="container-button">
                <button disabled={hpoff} onClick={addPv1} className="button-life-power">+1</button>
                <button disabled={hpoff} onClick={removePv1}  className="button-life-power">-1</button>
            </div>

            <div className="container-button">
                <button disabled={hpoff} onClick={addPv5} className="button-life-power">+5</button>
                <button onClick={reset} className="button-life-power">Reset</button>
                <button disabled={hpoff} onClick={removePv5} className="button-life-power">-5</button>
            </div>
        </div>
        </>
    )
}