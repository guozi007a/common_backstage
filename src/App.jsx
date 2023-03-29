import { useState } from "react";

const App = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return <>
        <h3>hello react!</h3>
        <button
            onClick={handleClick}
        >You click it {count} times.</button>
    </>
}

export default App;