

import {ModuleManager} from "../model/ModuleManager";
import {Module} from "../model/module";
import {LatLon} from "../util/LatLon";
let chai = require('chai');



describe("Booking", function () {

  let moduleMaker = function(){

    let temp = [];
    for (let i = 0; i < 10; i++){
      let location = new LatLon(i, i);
      temp.push(new Module(i, location , 'ID: ' + i))
    }
    return temp;
  };

  let moduleManager: ModuleManager = ModuleManager.getInstance();
  let modules = moduleMaker();

  beforeEach(function () {
    moduleManager.clearModules();
    moduleManager.addModules(modules);
  });

  afterEach(function () {
  });

  it("", function () {

    chai.expect(true).to.equal(true);
  });




});


