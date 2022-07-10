/* eslint-disable import/no-mutable-exports */
import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import HotpepperModule from "../store/hotpepper";

let hotpepperStore: HotpepperModule;

function initialiseStores(store: Store<any>): void {
  hotpepperStore = getModule(HotpepperModule, store);
}
export { initialiseStores, hotpepperStore };
