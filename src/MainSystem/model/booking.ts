import {User} from "./user";
import {Module} from "./module";
import {ModuleManager} from "./ModuleManager";
export class Booking{

  private user: User;
  private module: Module;
  private startTime: string;
  private endTime: string;
  private moduleManager = ModuleManager.getInstance();

  constructor(user: User, startTime:string){
    this.user = user;
    this.startTime = startTime;
    this.module = this.moduleManager.getSelectedModule();
  }

  public getBooking(){
    if (this.endTime === null && this.startTime !== null){
      this.endTime = 'User has not yet retrieved Bicycle';
    }
    return {
      user: this.user,
      module: {
        id: this.module.getID(),
        address: this.module.getAddress()
      },
      startTime: this.startTime,
      endTime: this.endTime
    };
  }

  public completeBooking(endTime: string){
    this.endTime = endTime;
    this.user.pastBookings.push(this);
    this.user.currentBooking = null;
    this.module.size++;
    this.module.updateModule();
  }
}
