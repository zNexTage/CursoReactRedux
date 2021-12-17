import React, { useEffect, useState } from 'react';

const Mega = props => {
    const [numeros, setNumeros] = useState([]);
    const [totalNumeros, setTotalNumeros] = useState(0);



    const gerarNumAletorio = (max) => {
        const min = 1;

        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const gerarNumerosMega = () => {
        const numerosAux = [];

        console.log("Iniciano a geração dos números da Mega Sena");

        for (let i = 1; i <= totalNumeros; i++) {
            let numeroAleatorio = gerarNumAletorio(totalNumeros);
            console.log(`O número aleatório: ${numeroAleatorio} foi gerado.`);

            while (numerosAux.includes(numeroAleatorio)) {
                console.log(`O número aleatório: ${numeroAleatorio} já tinha sido adicionado ao array, portanto será gerado um novo.`);
                numeroAleatorio = gerarNumAletorio(totalNumeros);
                console.log(`Foi gerado um novo número: ${numeroAleatorio}`);
            }

            console.log(`O número ${numeroAleatorio} foi adicionado ao array`);
            numerosAux.push(numeroAleatorio);
        }

        console.log(`O estado da aplicação foi atualizado com os números aletórios gerados...`);
        setNumeros([...numerosAux]);
    }

    return (
        <div>
            <label htmlFor="txtTotalNumeros">Informe a quantidade máxima de números a ser gerado: </label>
            <input type="text" id="txtTotalNumeros"
                onChange={(event) => setTotalNumeros(event.target.value)}
                value={totalNumeros} />
            <button onClick={gerarNumerosMega}>Gerar números</button>
            <hr />
            {numeros.length > 0 &&
                <>
                    <h1>
                        O números sorteados são:
                    </h1>
                    <p>
                        {numeros.map((numero) => `${numero} `)}
                    </p>
                </>
            }
        </div>
    )
}

export default Mega;