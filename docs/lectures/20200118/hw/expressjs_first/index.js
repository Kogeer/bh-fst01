const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('users');
const exphbs = require('express-handlebars');

const app = express();
const port = 5000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/addUsers', (req, res) => {
    res.sendFile('/home/koge/Desktop/Braininghub/homeworks/2020/expressjs_first/static/users.html')
});

app.post('/adding', (req, res) => {
    const { usrname, email, pw } = req.body;
    res.send(`${usrname},${email},${pw}`);
    db.serialize(() => {
        db.run(`INSERT INTO redcurrants VALUES(?,?,?);`, [usrname, email, pw]);
        db.all(`SELECT * FROM redcurrants;`, (err, rows) => {
            if (err) { console.log(err) }
            rows.forEach(row => console.log(row));
        });
    })
});

app.get('/users', (req, res) => {
    db.serialize(() => {
        db.all(`SELECT * FROM redcurrants;`, (err, rows) => {
            if (err) { console.log(err) }
            res.render('users', {rows: rows});
        });
    });
})




app.listen(port, () => {
    console.log(`This app listening on port ${port}`);

    db.serialize(function () {
        db.run("CREATE TABLE IF NOT EXISTS redcurrants (username TEXT, email TEXT, password TEXT);");
    });
})