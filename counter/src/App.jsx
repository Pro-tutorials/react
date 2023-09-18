import { useState } from 'react';

import Card from './components/Card';
import Counter from './components/Counter';
import Wrapper from './components/Wrapper';
import Button from './components/Button';

import './App.css';

const App = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const resetHandler = () => {
        setCount(0);
    };

    const decrementHandler = () => {
        setCount((prevCount) => prevCount - 1);
    };

    return (
        <Card>
            <h1>Counter</h1>
            <Counter count={count} />
            <Wrapper>
                <Button
                    text="Decrement"
                    style="decrement"
                    clickHandler={decrementHandler}
                />
                <Button
                    text="reset"
                    style="reset"
                    clickHandler={resetHandler}
                />
                <Button
                    text="Increment"
                    style="increment"
                    clickHandler={incrementHandler}
                />
            </Wrapper>
        </Card>
    );
};

export default App;
