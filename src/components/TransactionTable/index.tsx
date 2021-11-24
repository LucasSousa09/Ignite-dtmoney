import { useEffect } from "react";
import { Container } from "./styles";

import { api } from "../../services/api";

export function TransactionTable() {
    useEffect(() => {
        api('transactions')
            .then(response => console.log(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th className="title">Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/21</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-1.100,00</td>
                        <td>Casa</td>
                        <td>17/02/21</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}