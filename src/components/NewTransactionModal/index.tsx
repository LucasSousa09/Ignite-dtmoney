import Modal from "react-modal"

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean,
  onCloseNewTransactionModal: () => void
}

export function NewTransactionModal({ isNewTransactionModalOpen, onCloseNewTransactionModal }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={onCloseNewTransactionModal}
    >
      <h2>Cadastrar transação</h2>
    </Modal>
  )
}