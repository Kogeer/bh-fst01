const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./prepare', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the prepare database.');
});
const caseNum = process.argv[2];
const details = process.argv[3];

db.serialize(() => {
    switch (caseNum) {
        case '1':
            db.all(`SELECT nominee, ceremony FROM awards WHERE ceremony = ${details} AND category like '%Act%'`, (err, rows) => {
                if (err) {
                    console.log(err)
                    return
                }

                console.log(`Azoknak a színészeknek a nevei, akiket az ${details}. díjátadón jelöltek:`)
                rows.forEach(row => console.log(`- Ceremony:${row.ceremony}. Nominee:${row.nominee}`));
            })
            break;

        case '2':
            db.all(`SELECT nominee, ceremony, win FROM awards WHERE ceremony = ${details} AND win = 'True' AND category like '%Act%';`, (err, rows) => {
                if (err) {
                    console.log(err)
                    return
                }

                console.log(`Azoknak a színészeknek a nevei, akiket az ${details}. díjátadón díjat is kaptak:`)
                rows.forEach(row => console.log(`- Ceremony:${row.ceremony} Nominee:${row.nominee} Win:${row.win}`));
            })
            break;

        case '3':
            db.all(`SELECT nominee, year_award FROM awards WHERE year_award BETWEEN 19${details} AND 19${Number(details) + 9} AND category like '%Act%' GROUP BY nominee;`, (err, rows) => {
                if (err) {
                    console.log(err)
                    return
                }

                console.log(`Az 19${details}-es években jelölt színészek nevei:`)
                rows.forEach(row => console.log(`- Year awarded:${row.year_award} Nominee:${row.nominee}`));
            })
            break;

        case '4':
            db.all(`SELECT DISTINCT a.year_award, a.win, a.nominee FROM awards a JOIN awards b ON a.nominee = '${details}' AND a.win = 'True' AND b.nominee = '${details}' AND b.year_award = a.year_award - 1 AND b.win = 'False';`, (err, rows) => {
                if (err) {
                    console.log(err)
                    return
                }

                console.log(`Azoknak az éveknek a listája, amikor ${details} úgy nyert díjat, hogy a megelőző évben is jelölték, de akkor nem nyert:`)
                rows.forEach(row => console.log(`- Year award:${row.year_award} Win:${row.win} Nominee:${row.nominee}`));
            })
            break;

    }
})
