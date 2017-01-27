
import {LatLon} from "../util/LatLon";
export class Module{

  public size: number;
  public location: LatLon;
  public address: string;
  public id: string;
  public availability: boolean;

  constructor(size: number, location: LatLon, id: string){
    this.size = size;
    this.location = location;
    this.id = id;
    this.availability = (this.size > 0);
  }

  setAddress(address: string){
    this.address = address;
  }

  getAddress(){
    return this.address;
  }

  getID(){
    return this.id;
  }

  updateModule(){
    this.availability = (this.size > 0);
  }

}
