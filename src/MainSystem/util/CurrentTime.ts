export class CurrentTime {

  constructor() {

  }

  public getTime() {
    let d = new Date();
    let result: string = d.getHours().toString() + ':' + d.getMinutes() + ':' + d.getSeconds();
    return result;
  }
}

