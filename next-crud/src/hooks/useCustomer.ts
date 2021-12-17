import { useEffect, useState } from "react";
import CustomerCollection from "../backend/CustomerColletion";
import Customer from "../model/Customer";
import ICustomerRepository from "../repositories/CustomerRepository";
import useTableOrForm from "./useTableOrForm";

const useCostumer = () => {
    const repo: ICustomerRepository = new CustomerCollection();    

    const [customer, setCustomer] = useState<Customer>(Customer.EmptyCustomer());
    const [customers, setCustomers] = useState<Customer[]>([]);

    const {        
        formVisible,
        tableVisible,
        showForm,
        showTable
    } = useTableOrForm();


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

    const createCustomer = () => {
        setCustomer(Customer.EmptyCustomer());
        showForm();
    }

    return {
        createCustomer,
        saveCustomer,
        onCustomerDeleted,
        onCustomerSelected,
        findAll,
        customer,
        customers,
        showTable,
        tableVisible,
        formVisible
    }
}

export default useCostumer;