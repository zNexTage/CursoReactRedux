class StringBuilder {
    #value;

    constructor(value = '') {
        this.#value = value;
    }

    append(value) {
        this.#value = this.#value.concat(value);
    }

    toString() {
        return this.#value;
    }
}


export default StringBuilder;