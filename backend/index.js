import mysql from 'mysql2';
import express from 'express';
import cors from 'cors';
const app = express()
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1playclarinetF0818!',
    database: 'practice'
})
db.connect(err => {
  if (err) console.error("MySQL error:", err);
  else console.log("Connected to MySQL!");
});

app.listen(8080, () => {
    console.log('Connected to backend!')
});


app.get('/', (req, res) => {
    res.json("Hello!")
})

app.get('/home', (req,res) => {
    db.query("SELECT * FROM Products", (err, data) => {
        if(err) return res.json(err)    
        return(res.json(data))
    });
});

app.post('/create', (req, res) => {
    const q = "INSERT INTO products (`name`, `image`, `description`, `price`, `category`) VALUES (?)"
    const {name, image, description, price, category} = req.body;
    const values = [name, image, description, price, category]
    db.query(q, [values], (err, data) => {
        if (err) return err
        return res.json("Product created!: ", data)
    })

});