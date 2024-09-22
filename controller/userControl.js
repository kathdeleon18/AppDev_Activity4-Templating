const main = {
    index:(req, res) => {
        res.render('index');
    },
    bini:(req, res) => {
        res.render('bini');
    },
    kath:(req, res) => {
        res.render('kath');
    },
    besas:(req, res) => {
        res.render('besas');
    },
    deleon:(req, res) => {
        res.render('deleon');
    },
}

module.exports = main;