

import {ModuleManager} from "../model/ModuleManager";
import {Module} from "../model/module";
import {LatLon} from "../util/LatLon";
import {User} from "../model/user";
import {Booking} from "../model/booking";
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
  let user = new User('temp');

  beforeEach(function () {
    moduleManager.clearModules();
    moduleManager.addModules(modules);
  });

  afterEach(function () {
  });

  it("Should only have a single instance of the ModuleManager", function () {
    let mm = ModuleManager.getInstance();
    chai.expect(moduleManager).to.equal(mm);
    console.log(new Date().getTime())
  });

  it("Should have the correct amount of modules", function () {
    chai.expect(moduleManager.getModules().length).to.equal(10)
  });

  it("Should be able to select a module", function () {
    let selected = moduleManager.getModules()[0];
    moduleManager.setSelected(moduleManager.getModules()[0]);
    chai.expect(selected).to.equal(moduleManager.getSelectedModule())
  });

  it("Should be able to book a slot in a module", function () {
    moduleManager.setSelected(moduleManager.getModules()[1]);
    let selected = moduleManager.getModules()[1];
    chai.expect(moduleManager.getSelectedModule()).to.equal(selected);
    user.createBooking();
    user.completeBooking();
    chai.expect(user.pastBookings.length).to.equal(1);
    console.log(user.pastBookings[0])
  });

  it("Should not be able to book a slot in full module", function () {
    moduleManager.setSelected(moduleManager.getModules()[0]);
    let selected = moduleManager.getModules()[0];
    chai.expect(moduleManager.getSelectedModule()).to.equal(selected);
    try{
      user.createBooking();
      fail('Should not get here');
    }
    catch (err){
      chai.expect(err.message).to.equal('Module is Full');
    }
  });

  it("Should decrease module size upon booking and increase after completion", function () {
    moduleManager.setSelected(moduleManager.getModules()[1]);
    let selected = moduleManager.getModules()[1];
    chai.expect(moduleManager.getSelectedModule()).to.equal(selected);
    user.createBooking();
    chai.expect(moduleManager.getSelectedModule().size).to.equal(0);
    user.completeBooking();
    chai.expect(moduleManager.getSelectedModule().size).to.equal(1);

  });


});


