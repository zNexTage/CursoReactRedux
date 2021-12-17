import Customer from "../model/Customer";

interface ICustomerRepository {
    save(customer: Customer): Promise<Customer>;
    delete(customer: Customer): Promise<void>;
    findAll(): Promise<Array<Customer>>;
}

export default ICustomerRepository;