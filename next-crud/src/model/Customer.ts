class Customer {
    #id: string; //Atributos privados. Recurso do javascript
    #name: string;
    #age: number;

    constructor({ name, age, id = null }: { name: string, age: number, id?: string | null }) {
        this.#name = name;
        this.#age = age;
        this.#id = id;
    }

    static EmptyCustomer() {
        return new Customer({ name: '', age: 0 });
    }

    get id() {
        return this.#id;
    }
    get name() {
        return this.#name;
    }
    get age() {
        return this.#age;
    }
}

export default Customer;