import { useContext } from "react";
import { Container } from "./styles";

import { TransactionsContext } from "../../TransactionsContext";



export function TransactionTable() {
    const transactions = useContext(TransactionsContext)

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
                    {
                        transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {transaction.type === 'withdraw' && " - "}
                                    {
                                        new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(transaction.amount)
                                    }
                                </td>
                                <td>yarn {transaction.category}</td>
                                <td>
                                    {
                                        new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))
                                    }
                                </td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </Container>
    )
}