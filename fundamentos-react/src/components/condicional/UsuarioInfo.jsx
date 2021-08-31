import React from 'react';
import If, { Else } from "./If";

const UsuarioInfo = props => {
    const usuario = props.usuario || {};

    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>
                <Else>
                    Seja bem vindo <strong>amigão</strong>
                </Else>
            </If>
        </div>
    )
}

export default UsuarioInfo;