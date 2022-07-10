import { VuexModule, Mutation, config } from "vuex-module-decorators";
config.rawError = true;

export default class BaseStoreModule extends VuexModule {
  message: string = "";

  public get getError() {
    return this.message;
  }

  @Mutation
  protected setInitError() {
    this.message = "";
  }

  @Mutation
  protected setError(error: any) {
    if (Array.isArray(error.message)) {
      this.message = error.message[0];
    } else {
      const err: string[] = Object.values(error.message);
      this.message = err[0][0];
    }
  }
}
