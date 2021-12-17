import Customer from "../model/Customer";
import { Edit, Trash } from "./Icons";

interface ITableProps {
    customers: Array<Customer>
    onCustomerSelected?: (customer: Customer) => void
    onCustomerDeleted?: (customer: Customer) => void
}

const Table = (props: ITableProps) => {

    const shouldDisplayActions = props.onCustomerDeleted || props.onCustomerSelected;

    const THead = () => (
        <thead className={`
            text-gray-100
            bg-gradient-to-r from-purple-500 to-purple-800
        `}>
            <tr>
                <th className={`text-left p-4`}>
                    Código
                </th>
                <th className={`text-left p-4`}>
                    Nome
                </th>
                <th className={`text-left p-4`}>
                    Idade
                </th>
                <th className={`p-4`}>
                    Ações
                </th>
            </tr>
        </thead>
    )

    const actions = (customer: Customer) => (
        <td className='flex'>
            {props.onCustomerSelected &&
                <button
                    onClick={() => props.onCustomerSelected(customer)}
                    className={`flex justify-center items-center
                text-green-600 rounded-full p-2 m-1
                hover:bg-purple-50
            `}>
                    <Edit />
                </button>
            }
            {props.onCustomerDeleted && (
                <button
                    onClick={() => props.onCustomerDeleted(customer)}
                    className={`flex justify-center items-center
                text-red-500 rounded-full p-2 m-1
                hover:bg-purple-50
            `}>
                    <Trash />
                </button>
            )}
        </td>
    )

    const TBody = () => (
        <tbody>
            {props.customers.map((customer, index) =>
                <tr key={customer.id}
                    className={index % 2 == 0 ? 'bg-purple-200' : 'bg-purple-100'}
                >
                    <td className={`text-left p-4`}>
                        {customer.id}
                    </td>
                    <td className={`text-left p-4`}>
                        {customer.name}
                    </td>
                    <td className={`text-left p-4`}>
                        {customer.age}
                    </td>
                    {shouldDisplayActions && actions(customer)}
                </tr>
            )}
        </tbody>
    )

    return (
        <table className={`w-full rounded-xl overflow-hidden`}>
            <THead />
            <TBody />
        </table>
    )
}

export default Table;