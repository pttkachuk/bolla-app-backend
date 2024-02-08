const getCurrent = async (req, res) => {
    const { name, login } = req.user;
    res.json({
        name, login,
    })
};

module.exports = getCurrent;