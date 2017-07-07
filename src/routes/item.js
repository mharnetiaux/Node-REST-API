import Item from '../models/item';


function getItems(req, res) {
    let query = Item.find({});
    query.exec((err, items) => {
        if(err) res.send(err);
        //If no errors, send them back to the client
        res.json(items);
    });
}


function postItems(req, res) {
    //Creates a new book
    let newItem = new Item(req.body);
    //Save it into the DB.
    newItem.save((err,item) => {
        if(err) {
            res.send(err);
        }
        else { //If no errors, send it back to the client
            res.json({message: "Item successfully added!", item });
        }
    });
}


export default {getItems,postItems}