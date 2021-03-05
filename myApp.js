const app= require("express")();
const PORT= process.env.PORT || 3000;
app.get("",(req,res) => {
    res.send("Hello World! This API is awesome");
});

app.listen(PORT,()=>{
    console.log(`App up at port ${PORT}`);
});