const Customers = (req, res) => {
    if (req.method === 'GET') {
        handleGet(req, res);
        return;
    } else {
        res.status(405).send('Method not allowed');
    }


}

const handleGet = (req, res) => {
    res.status(200).send({
        name: 'User',
        method: req.method,
        params: {
            ...req.query
        }
    });
}

export default Customers;