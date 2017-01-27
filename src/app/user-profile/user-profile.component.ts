import { Component, OnInit } from '@angular/core';
import {User} from "../../MainSystem/model/user";
import {ModuleManager} from "../../MainSystem/model/ModuleManager";
import {Module} from "../../MainSystem/model/module";
import {LatLon} from "../../MainSystem/util/LatLon";

@Component({
  selector: 'sabps-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private user: User = new User('TestUser');
  private mm = ModuleManager.getInstance();

  constructor() {
    this.user.changeEmail('wijiisaiah@gmail.com');
    this.mm.addModule(new Module(100, new LatLon(12, 123), 'TestModule'));
    this.mm.setSelected(this.mm.getModules()[0]);
    this.mm.getSelectedModule().setAddress('6196 University Blvd');
    this.user.createBooking();
    this.user.completeBooking();
    this.user.createBooking()
  }

  ngOnInit() {
  }

}
