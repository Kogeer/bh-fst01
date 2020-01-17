const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./prepare', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the prepare database.');
  });

db.serialize(() => {

    db.all('SELECT nominee, ceremony FROM awards WHERE ceremony = 5 AND category like \'%Act%\';', (err, rows) => {
        if (err) {
            console.log(err)
            return
        } 

        console.log(`Azoknak a színészeknek a nevei, akiket az 5. díjátadón jelöltek:`)
        rows.forEach(row => console.log(`- ${row.nominee}`));
    })

    db.all('SELECT nominee, year_award FROM awards WHERE year_award BETWEEN 1950 AND 1959 AND category like \'%Act%\';', (err, rows) => {
        if (err) {
            console.log(err)
            return
        } 

        console.log(`Az 1950-es években jelölt színészek nevei:`)
        rows.forEach(row => console.log(`- ${row.nominee}`));
    })

})