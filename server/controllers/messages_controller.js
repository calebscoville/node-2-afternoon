let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => req.body;
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send(messages);
},

update: (req, res) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateID)
    let message = messages[messageIndex];

    messages(messageIndex) = {
        id: message.id,
        text: text ||
    }
}