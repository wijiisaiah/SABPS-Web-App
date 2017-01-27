import {Module} from "./module";
import {error} from "util";
import {Booking} from "./booking";
import {User} from "./user";
import {CurrentTime} from "../util/CurrentTime";

export class ModuleManager{
  private modules: Module[];
  private static instance: ModuleManager;
  private selected: Module;

  constructor(){
    this.selected = null;
    this.modules = [];
  }

  /*
  Creates the single instance of the ModuleManager
  that will be used throughout the rest of the classes
   */
  public static getInstance(){
    if (ModuleManager.instance === undefined) {
      ModuleManager.instance = new ModuleManager();
    }
    return ModuleManager.instance;
  }
  /*
  Reserves the selected module
  - If size is < 0, sets Module availability to false
  - If there is no selected Module return an error (should not happen in the first place)
  - Otherwise decreases module size by 1 and reserve spot at module
   */
  public reserveSelectedModule(user: User) : Booking{
    let temp = this.getSelectedModule();
    if (temp === null){
      throw new Error('Please Select a Module');
    }
    else{
      if (temp.availability){
        temp.size = temp.size - 1;
        temp.updateModule();
        return new Booking(user, (new CurrentTime).getTime())
      }
      else{
        throw new Error('Module is Full')
      }
    }
  }

  /* Returns currently selected Module
   */

  public getSelectedModule(): Module{
    return this.selected;
  }

  /*
  Sets the selected Module
  - Will be called when user taps on a module
   */
  public setSelected(selected: Module){
      this.selected = selected;
  }

  /* Adds a module to the ModuleManager
   */

  public addModule(module: Module){
    this.modules.push(module);
  }

  /* Adds an array of modules to ModuleManager
   */
  public addModules(modules: Module[]){
    for (let m of modules){
      this.addModule(m);
    }
  }

  public clearModules(){
    this.modules = [];
  }

  public getModules(){
    return this.modules;
  }



}
