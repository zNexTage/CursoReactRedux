import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = (strOne, strTwo) => {
    return strOne + strTwo;
}

const UseRef = props => {
    //Ex 01
    const [valueOne, setValueOne] = useState("");
    const count = useRef(0);

    //Ex 02
    const [valueTwo, setValueTwo] = useState("");
    const myInputOne = useRef(null);
    const myInputTwo = useRef(null);


    useEffect(() => {
        count.current = count.current + 1
        myInputTwo.current.focus();
    }, [valueOne]);

    useEffect(() => {
        count.current++;
        myInputOne.current.focus();
    }, [valueTwo]);

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">
                        Valor:
                    </span>
                    <span className="text">
                        {merge(valueOne, valueTwo)}
                        [
                        <span className="text red">
                            {count.current}
                        </span>
                        ]
                    </span>
                </div>

                <input
                    ref={myInputOne}
                    type="text"
                    className="input"
                    onChange={e => setValueOne(e.target.value)}
                    value={valueOne} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input
                    ref={myInputTwo}
                    type="text"
                    className="input"
                    value={valueTwo}
                    onChange={e => setValueTwo(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
