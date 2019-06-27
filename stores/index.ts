import { createContext } from "mobx-react-lite-context";
import UIStore, { IStore as IUIStore } from "./ui";

export interface IStore {
  ui: IUIStore;
}

export default createContext<IStore>({
  ui: new UIStore()
});
