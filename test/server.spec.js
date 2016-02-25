var mocha = require("mocha");
var chai = require("chai");
var supertest = require("supertest");

var expect = chai.expect;



describe("When I start my server", function(){
    var app = require("../server");
    var request = supertest.agent(app.listen());
    
    it("should return status 200", function(done) {
        request
            .get("/")
            .expect(200)
            .end(done);
    });
    
    it("should return 'Node at IdWeaver by Maxime!!!'", function(done) {
        request
            .get("/")
            .expect("Node at IdWeaver by Maxime!!!")
            .end(done);
    });
});