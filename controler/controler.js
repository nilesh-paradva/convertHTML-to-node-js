const HomeController = (req, res) => {
    res.render("index");
};

const CalenderController = (req, res) => {
    res.render("calendar");
};

module.exports = { Home:HomeController, calandar:CalenderController };