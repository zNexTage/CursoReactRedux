import { useState } from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Customer from '../model/Customer'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [visible, setVisible] = useState<'table' | 'form'>('table');

  const [customer, setCustomer] = useState<Customer>(Customer.EmptyCustomer());


  const customers = [
    new Customer({ name: 'Ana', age: 34, id: '1' }),
    new Customer({ name: 'Bia', age: 45, id: '2' }),
    new Customer({ name: 'Carlos', age: 23, id: '3' }),
    new Customer({ name: 'Pedro', age: 54, id: '4' }),
  ]

  const onCustomerSelected = (customer: Customer) => {
    setCustomer(customer);
    showForm();
  }

  const onCustomerDeleted = (customer: Customer) => {

  }

  const saveCustomer = (customer: Customer) => {
    showTable();
  }

  const showForm = () => setVisible('form');

  const showTable = () => setVisible('table');


  const createCustomer = () => {
    setCustomer(Customer.EmptyCustomer());
    showForm();
  }

  return (
    <div className={`
    flex h-screen justify-center items-center 
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout title='Cadastro Simples'>
        {visible == 'table' ? (
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
