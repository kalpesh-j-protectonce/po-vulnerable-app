
const agent = require('@protectonce/agent');

module.exports = function(app, db) {

  // Load products by ID: http://localhost:4300/api/product/id/$id
  // example: http://localhost:4300/api/product/id/15

  app.get('/api/product/product_property/colour/red', (req, res) =>{
    if(req.query.name ) {
      req.protectonce.reportSignup(req.query.name);
  }
    res.status(200).send("in colour and its red");
  });

  app.get('/api/product/', (req, res) =>{
    if(req.query.name ) {
      req.protectonce.reportSignup(req.query.name);
  }
    res.status(200).send("in product");
  });

  app.get('/api/product/details', (req, res) =>{
    if(req.query.name ) {
      req.protectonce.reportSignup(req.query.name);
  }
    res.status(200).send("in product details");
  });

  app.get('/api/product/details/colours', (req, res) =>{
    if(req.query.name ) {
      req.protectonce.reportSignup(req.query.name);
  }
    res.status(200).send("in colour and its red");
  });

  app.get('/api/user/user_property/address', (req, res) =>{
    if(req.query.name ) {
      req.protectonce.reportSignup(req.query.name);
  }
    res.status(200).send("In user property");
  });

  app.get('/api/organization/settings', (req, res) =>{
    if(req.query.name ) {
      req.protectonce.reportSignup(req.query.name);
  }
    res.status(200).send("In organizations settings");
  });

  app.get('/organization_settings/enable_mfa', (req, res) =>{
    if(req.query.name ) {
      req.protectonce.reportSignup(req.query.name);
  }
    res.status(200).send("In enable mfa");
  });

  app.get('/analytics/user_data', (req, res) =>{
    if(req.query.name ) {
      req.protectonce.reportSignup(req.query.name);
  }
    res.status(200).send("In analytics user data");
  });


  app.get('/organization/12/add_user', (req, res) =>{
    if(req.query.name ) {
      req.protectonce.reportSignup(req.query.name);
  }
    res.status(200).send("You can add users in organizations");
  });

};

/*
Added routes
/api/product/product_property/colour/red
/api/product/
/api/product/details
/api/product/details/colours
/api/user/user_property/address
/api/organization/settings
/organization_settings/enable_mfa
/analytics/user_data
/organization/12/add_user
*/