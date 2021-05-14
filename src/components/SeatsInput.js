import {useState} from "react";

export default function SeatsInput({buyer, setBuyer, cpf, setCpf}) {

    return (
        <>
            <h2>Nome do Comprador:</h2>
            <input type="text" onChange={(e) => {setBuyer(e.target.value)}} value={buyer} placeholder="Digite seu nome" />

            <h2>CPF do comprador:</h2>
            <input type="number" onChange={(e) => {setCpf(e.target.value)}} value={cpf} placeholder="Digite seu CPF" />
        </>
    );
}

