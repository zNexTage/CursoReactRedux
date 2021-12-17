import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import useCostumer from '../hooks/useCustomer';

export default function Home() {
  const {
    onCustomerSelected,
    createCustomer,
    onCustomerDeleted,
    saveCustomer,
    customer,
    customers,
    showTable,
    tableVisible
  } = useCostumer();

  return (
    <div className={`
    flex h-screen justify-center items-center 
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout title='Cadastro Simples'>
        {tableVisible ? (
          <>
            <div className={`flex justify-end`}>
              <Button
                color='green'
                onClick={createCustomer}
                className={`mb-4`}>
                Novo Cliente
              </Button>
            </div>
            <Table
              onCustomerSelected={onCustomerSelected}
              onCustomerDeleted={onCustomerDeleted}
              customers={customers} />
          </>
        ) :
          <Form
            onSaveClick={saveCustomer}
            customer={customer}
            onCancelClick={showTable}
          />
        }

      </Layout>
    </div>
  )
}
