import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const sum = (a, b) => {
    const future = Date.now() + 2000;

    while (Date.now() < future) { }

    return a + b;
};

const UseMemo = (props) => {
    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [numberThree, setNumberThree] = useState(0);

    const result = useMemo(() => sum(numberOne, numberTwo), [numberOne, numberTwo]);

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <div className="center">
                <input
                    type="number"
                    className="input"
                    onChange={e => setNumberOne(Number.parseInt(e.target.value))}
                    value={numberOne} />

                <input
                    type="number"
                    className="input"
                    onChange={e => setNumberTwo(Number.parseInt(e.target.value))}
                    value={numberTwo} />

                <input
                    type="number"
                    className="input"
                    onChange={e => setNumberThree(Number.parseInt(e.target.value))}
                    value={numberThree} />

                <span className="text">
                    {result}
                </span>
            </div>

        </div>
    )
}

export default UseMemo
