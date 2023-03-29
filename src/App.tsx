import { useState } from "react";
import './app.less';

const App = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return <>
        <h3>hello react!</h3>
        <button
            className="btn"
            onClick={handleClick}
        >You click it {count} times.</button>
    </>
}

export default App;