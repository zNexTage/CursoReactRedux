import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Customer from '../Model/Customer'
import styles from '../styles/Home.module.css'

export default function Home() {
  const customers = [
    new Customer({ name: 'Ana', age: 34, id: '1' }),
    new Customer({ name: 'Bia', age: 45, id: '2' }),
    new Customer({ name: 'Carlos', age: 23, id: '3' }),
    new Customer({ name: 'Pedro', age: 54, id: '4' }),
  ]

  const onCustomerSelected = (customer: Customer) => {

  }

  const onCustomerDeleted = (customer: Customer) => {

  }

  return (
    <div className={`
    flex h-screen justify-center items-center 
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout title='Cadastro Simples'>
        <div className={`flex justify-end`}>
          <Button
            color='green'
            className={`mb-4`}>
            Novo Cliente
          </Button>
        </div>
        <Form customer={customers[1]} />
        <Table
          onCustomerSelected={onCustomerSelected}
          onCustomerDeleted={onCustomerDeleted}
          customers={customers} />
      </Layout>
    </div>
  )
}
