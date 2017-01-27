import {Booking} from "./booking";
import {ModuleManager} from "./ModuleManager";
import {LatLon} from "../util/LatLon";
import {CurrentTime} from "../util/CurrentTime";
/**
 * Created by Isaiah on 2017-01-26.
 */

export class User{

  public id: string;
  public email: string;
  public password: string;
  public currentBooking: Booking;
  public pastBookings: Booking[];
  public location: LatLon;

  private ModuleManager = ModuleManager.getInstance();

  constructor(id: string){
    this.id = id;
    this.pastBookings = [];
    this.currentBooking = null;
  }

  public getUserInfo() {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      currentBooking: this.currentBooking,
      pastBookings: this.pastBookings
    }
  }

  public createBooking(){
    this.currentBooking = this.ModuleManager.reserveSelectedModule(this);
  }

  public completeBooking(){
    if (this.currentBooking !== null){
      this.currentBooking.completeBooking((new CurrentTime).getTime());
    }
    else {
      throw new Error('No booking has been made');
    }
  }

  public changeEmail(newEmail: string){
    this.email = newEmail;
  }

  public changePassword(newPassword: string){
    this.password = newPassword;
  }

  public getCurrentBooking(): Booking{
    return this.currentBooking;
  }



}
