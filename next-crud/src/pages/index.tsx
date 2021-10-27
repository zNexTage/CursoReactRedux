import { useEffect, useState } from 'react'
import CustomerCollection from '../backend/CustomerColletion'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Customer from '../model/Customer'
import ICustomerRepository from '../repositories/CustomerRepository'
import styles from '../styles/Home.module.css'

export default function Home() {
  const repo: ICustomerRepository = new CustomerCollection();

  const [visible, setVisible] = useState<'table' | 'form'>('table');

  const [customer, setCustomer] = useState<Customer>(Customer.EmptyCustomer());
  const [customers, setCustomers] = useState<Customer[]>([]);


  const findAll = () => {
    repo.findAll()
      .then(customers => {
        setCustomers(customers);
        showTable();
      })
      .catch(err => {
        console.log(err);
        alert('Ocorreu um erro....');
      });
  }

  useEffect(() => { findAll(); }, []);

  const onCustomerSelected = (customer: Customer) => {
    setCustomer(customer);
    showForm();
  }

  const onCustomerDeleted = async (customer: Customer) => {
    await repo.delete(customer);
    findAll();
  }

  const saveCustomer = async (customer: Customer) => {
    await repo.save(customer);
    findAll();
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
