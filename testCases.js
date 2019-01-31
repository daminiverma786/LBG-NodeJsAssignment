var assert = require('assert');
var request = require('request');
const chai =  require('chai');
const app = require('./server');
const chaiHttp = require('chai-http');
var should = chai.should();
const readStringFunction = require("./fileWithString.js");
chai.use(chaiHttp);

//test case for product of params
describe('Product of Params', function () {
          it("should generate the product", function(done){
            chai.request(app)
                .get('/product/3/5')
                .end(function(err, res){
                  res.should.have.status(200);
                  done();
                });
          });
});

//test case for writing file to disk
describe('File Test', function () {
  it("should create a new file", function(done){
    chai.request(app)
        .get('/writeFileContentToDisk?newFileContent=new file created successfully')
        .end(function(err, res){
          res.should.have.status(200);
          done();
        });
  });
});

//test case for non-repeating character in the string
describe("Test to find non-repeating character in a string",function(){
var value ;
var output;
  before(function () {
    value = 'Lorem Ipsum';
    output = readStringFunction.readString(value);
   });

    it('should find non-repeating character',function(done) {
      chai.request(app)
          .get('/stringValue?str=${value}')
          .end(function(err,res){
            res.should.have.status(200);
           done();
         });
    });
  });
