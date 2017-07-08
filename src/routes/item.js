import Item from '../models/item';


const getItems = (req, res) =>{
    let query = Item.find({});
    query.exec((err, items) => {
        if(err) res.send(err);
        res.json(items);
    });
};


const postItem = (req,res) =>{
    let newItem = new Item(req.body);
    newItem.save((err,item) => {
        if(err) {
            res.send(err);
        }
        else {
            res.json({message: "Item successfully added!", item });
        }
    });
};


export default {getItems,postItem}