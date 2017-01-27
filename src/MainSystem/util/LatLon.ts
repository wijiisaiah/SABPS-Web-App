/**
 * Created by Isaiah on 2017-01-26.
 */

export class LatLon{
  private lat: number;
  private lon: number;

  public constructor (lat: number, lon: number){
    this.lat = lat;
    this.lon = lon;
  }

  public getLatitude(){
    return this.lat;
  }

  public getLongitude(){
    return this.lon;
  }


}

