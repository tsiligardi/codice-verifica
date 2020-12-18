const express= require("express")
const app= new express()
const bodyparser= require("body-parser")

app.use(express.static(__dirname + "/public"))
app.use(bodyparser.json()) //trasforma il json in una scritta

fetch("url",{
	method: "POST",
	headers: {
		"content-type": "application/json"
	},
	body:{
		"chiave":"valore"
	}
})//fa una chiamata in post
app.post("/nome"(req,ses)=>{
res.send("ciao"+req.body.chiave)})

port=8080
app.get("/",(req,res)=>{
	res.send("corso ti saluta")
})
app.listen(port,()=>console.log(`server in ascolto sulla porta ${port}`))
