import { observable, action } from "mobx";

export interface IStore {
  test: string;
  change(): void;
}

export default class Store implements IStore {
  @observable test = "test";
  @action change() {
    this.test = "hello";
  }
}
