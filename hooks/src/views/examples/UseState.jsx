import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = (props) => {
    // const array = useState(0); //useState retorna um array
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <p className="text">{count}</p>
                <div>
                    <button onClick={() => setCount(count - 1)} className="btn">
                        -1
                    </button>

                    <button onClick={() => setCount(count + 1)} className="btn">
                        +1
                    </button>

                    <button onClick={() => setCount(current => current + 1000)} className="btn">
                        +1000
                    </button>
                </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <label htmlFor="txt">Digite aqui</label>
            <input type="text" id="txt" onChange={e => setName(e.target.value)} value={name} className="input" />
            <span className="text">
                {name}
            </span>
        </div>
    )
}

export default UseState
