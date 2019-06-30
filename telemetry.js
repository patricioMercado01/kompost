const telemetry = require('superagent');

var token ;

  

telemetry

  .post('http://endor.ceisufro.cl:8080/api/auth/login')
  .send({ username:"kom1@kom.com", password:"0000"})
  .set("Content-Type", "application/json")
  .set("Accept", "application/json")
  .end((err, res) => {
    // Calling the end function will send the request
    try {
     //this.token = res.body.token;
     console.log(res.body.token);
        
      
    } catch (err) {
      console.error(err);
    }
  });


function gteTelemetry(token){
  const
}





console.log(getToken());
