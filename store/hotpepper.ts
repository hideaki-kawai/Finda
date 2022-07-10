import { Module, Action, Mutation } from "vuex-module-decorators";
import { Hotpepper } from "~/types/hotpepper";
import BaseStoreModule from "../store/baseStore";
import axios from "axios";
// const axios = require("axios");

@Module({
  name: "hotpepper",
  stateFactory: true,
  namespaced: true,
})
export default class HotpepperModule extends BaseStoreModule {
  /**
   * 店舗情報
   */
  private restaurants: Hotpepper[] = [];

  /**
   * 店舗の検索条件
   */
  private currentFormItem?: any;

  /**
   * 店舗情報一覧取得
   */
  public get getRestaurants() {
    return this.restaurants;
  }

  /**
   * 店舗の一覧件数取得
   */
  public get getRestaurantsCount() {
    return this.getRestaurants.length;
  }

  /**
   * 店舗一覧のセッター
   */
  @Mutation
  private setRestaurants(restaurants: any) {
    this.restaurants = restaurants;
  }

  /**
   * 店舗一覧読み込み
   */
  @Action
  async loadRestaurantList(formItem: any) {
    this.currentFormItem = formItem;
    const param: {} = {
      params: formItem,
    };
    console.log(param);
    // API通信
    // const res = await this.store.$axios
    // const res = await this.$axios
    //   .$get("http://webservice.recruit.co.jp/hotpepper/gourmet/v1/", param)
    //   .catch((e: any) => {
    //     return e.response;
    //   });
    // if (!res.data.errors) {
    //   this.setRestaurants(res.data);
    // }
  }
}
