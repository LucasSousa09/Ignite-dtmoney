import Modal from "react-modal"
import { Container, RadioBox, TransactionTypeContainer } from "./styles"

import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { useState } from "react"

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean,
  onCloseNewTransactionModal: () => void
}

export function NewTransactionModal({ isNewTransactionModalOpen, onCloseNewTransactionModal }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit')

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={onCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button className="react-modal-close" type="button" onClick={onCloseNewTransactionModal}>
        <img src={closeImg} alt="Close button" />
      </button>

      <Container>

        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          type="text"
        />

        <input
          placeholder="Valor"
          type="number" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          type="text" />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}