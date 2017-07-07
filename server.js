import express from 'express';
import body_parser from 'body-parser';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import bodyParser from 'body-parser';
import config from 'config';
import item from './src/routes/item';
import morgan from 'morgan';

const app = express(),
      port = process.env.PORT || 8081,
      db = mongoose.connection,
	  options = {
        useMongoClient: true
	  };

mongoose.Promise = bluebird;
mongoose.connect(config.DBHost, options);
db.on('error', console.error.bind(console,'db connection error:'));

if(config.util.getEnv('NODE_ENV') !== 'test'){
	app.use(morgan('combined'));
}

app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));


app.get("/", (req, res) => res.json({message: "You have arrived!"}));

app.route("/item")
	.get(item.getItems)
    .post(item.postItems);

app.listen(port, () => {
    console.log("Server listening on port:" + port);
});

export default app;





