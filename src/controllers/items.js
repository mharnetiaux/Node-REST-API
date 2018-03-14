import mongoose from 'mongoose';

const Item = mongoose.model('Items');

exports.list_all_items = function(req, res) {
    Item.find({}, function(err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.create_a_item = function(req, res) {
    const new_item = new Item(req.body);
    new_item.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.read_a_item = function(req, res) {
    Item.findById(req.params.itemId, function(err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.update_a_item = function(req, res) {
    Item.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.delete_a_item = function(req, res) {
    Item.remove({
        _id: req.params.taskId
    }, function(err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};