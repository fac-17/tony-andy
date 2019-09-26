import React from "react"

const Clock = ({seconds, setSeconds, active, setActive}) => {

    function toggle() {
        setActive(!active)
    }

    React.useEffect(() => {
        let interval = null;
        if (active) {
            interval = setInterval(()=> {
                setSeconds(seconds => seconds - 1)
            }, 1000)
        }    else if (!active && seconds !== 0) {
        clearInterval(interval)
    }
    return() => clearInterval(interval)
}, [active, seconds])

return (
    <div>{seconds}</div>
)
}

export default Clock;