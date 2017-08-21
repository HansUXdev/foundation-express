

module.exports = function(app) {
  // Registration
    app.get('/register', function(req, res){
        res.render('register');
    });
    app.post('/register', function(req, res){
      res.redirect('/login');
    });
  // Login
    app.get('/login', function(req, res){
      res.render('login');
    });
    app.post('/login', function(req, res){
      res.redirect('/admin');
    });
  // Admin Page
    app.get('/admin/admin', function(req, res){
      res.render('admin');
    });
  // Log out
    app.get('/logout', function(req, res){
        res.redirect('/');
    });
};
