const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;
require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i1abc.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

client.connect((err) => {
	// const collection = client.db("test").collection("devices");
	// // perform actions on the collection object
	// const user = { name: "sohan" };
	// collection.insertOne(user).then(() => {
	// 	console.log("inserted success");
	// });
	// client.close();
});

async function run() {
	try {
		await client.connect();
		const database = client.db("Oleander_IT");
		const servicesDataCollection = database.collection("servicesData");
		const projectsDataCollection = database.collection("projectsData");

		// get services data
		app.get("/services", async (req, res) => {
			const services = servicesDataCollection.find({});
			const results = await services.toArray();
			res.send(results);
		});

		// get projects data
		app.get("/projects", async (req, res) => {
			const projects = projectsDataCollection.find({});
			const results = await projects.toArray();
			res.send(results);
		});

		console.log("Database connected");
	} finally {
		// await client.close();
	}
}

run().catch(console.dir);

app.get("/", (req, res) => {
	res.send("running db");
});

app.listen(port, () => {
	console.log("local host running", port);
});