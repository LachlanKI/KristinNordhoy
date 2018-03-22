// website by yuk - yuk.digital - yukenquiries@gmail.com

const spicedPg = require('spiced-pg');
let db;
if (process.env.DATABASE_URL) {
    db = spicedPg(process.env.DATABASE_URL);
} else {
    const garbage = require('./garbage_file.json');
    db = spicedPg(`postgres:${garbage.user}:${garbage.pass}@localhost:5432/kn-images`);
}

function getImages(x) {
    return db.query('SELECT * FROM images WHERE type = $1',
                    [x]).then(y => {
                        y.rows.sort((a, b) => {
                            return a.position - b.position
                        });
                        return y.rows;
                    }).then(z => z);
}

module.exports.getImages = getImages;
