import Item from '../models/item';


function getItems(req, res) {
    let query = Item.find({});
    query.exec((err, items) => {
        if(err) res.send(err);
        res.json(items);
    });
}


function postItems(req, res) {
    let newItem = new Item(req.body);
    newItem.save((err,item) => {
        if(err) {
            res.send(err);
        }
        else {
            res.json({message: "Item successfully added!", item });
        }
    });
}


export default {getItems,postItems}