import express from 'express';
const app = express();

/*
app.get("/", (req, res) => {
	res.send("Hello from LearningSource");
});*/

app.get("/about", (req, res) => {
	res.send("Solved errors");
 });
 

app.listen(3000, () => console.log("Server is listening on port 3000"));