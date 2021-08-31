import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';



const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [isEvenOrOdd, setIsEvenOrOdd] = useState(true);

    const calcFatorial = (number) => {
        if (number < 0) return -1
        if (number === 0) return 1;

        return calcFatorial(number - 1) * number;
    }

    const isEven = (number) => number % 2 === 0;

    //Quando number sofrer alteração a função passada para o useEffect será chamada.
    useEffect(() => {
        setFatorial(calcFatorial(Number.parseInt(number)));
        setIsEvenOrOdd(isEven(Number.parseInt(number)));
    }, [number]); //Efeito colateral    

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">
                        Fatorial:
                    </span>
                    <span className="text red">
                        {fatorial === -1 ? "Não existe" : fatorial}
                    </span>
                </div>
                <input value={number} onChange={e => setNumber(e.target.value)} type="number" className="input" />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">
                        O número {number} é
                    </span>
                    <span className="text red">
                        {isEvenOrOdd ? "Par" : "Impar"}
                    </span>

                </div>


            </div>

        </div>
    )
}

export default UseEffect
