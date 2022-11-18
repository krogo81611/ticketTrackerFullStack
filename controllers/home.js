const ticketList = require('../models/ticketList')

module.exports = {
    getIndex : async (req, res) => {
        try {
            const tickets = await
            ticketList.find()
            res.render("index.ejs", { ticketList: tickets });
        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    },
    createTask: async (req, res) => {
        const todoTask = new TodoTask(
            {
                title: req.body.title,
                content: req.body.content
            });
        try {
            await todoTask.save();
            console.log(todoTask)
            res.redirect("/");
        } catch (err) {
            if (err) return res.status(500).send(err);
            res.redirect("/");
        }
    }
}