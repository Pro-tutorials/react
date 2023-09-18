import { useState } from 'react';
import { evaluate } from 'mathjs';

import Card from './components/Card';
import Screen from './components/Screen';
import Wrapper from './components/Wrapper';
import Button from './components/Button';

import './App.css';

const App = () => {
    const [value, setValue] = useState('');
    const btnData = [
        [1, 2, 3, '/'],
        [4, 5, 6, '*'],
        [7, 8, 9, '-'],
        ['.', 0, '=', '+']
    ];

    const clickBtnHandler = (val) => {
        if (val !== '=') {
            setValue((prevValue) => prevValue + '' + val);
        } else {
            try {
                setValue(evaluate(value).toString());
            } catch (err) {
                setValue('');
            }
        }
    };
    return (
        <Card>
            <h1>Calculator</h1>
            <Screen value={value} />
            <Wrapper>
                {btnData.map((row, index) => (
                    <div key={index} className="row">
                        {row.map((btn) => (
                            <Button
                                key={btn}
                                text={btn}
                                style={btn === '=' ? 'equal' : ''}
                                clickHandler={() => clickBtnHandler(btn)}
                            />
                        ))}
                    </div>
                ))}
            </Wrapper>
        </Card>
    );
};

export default App;
