const handler = (req, res) => {
    const id = req.query.id;

    res.status(200).json({
        id,
        nome: `Maria ${id}`,
        email: 'maria@email.com'
    })
}

export default handler;