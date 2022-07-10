/**
 * HotPepperAPIから取得した値の型を定義したインターフェース
 */
export interface Hotpepper {
  /**
   * 店名
   */
  name: string;
  /**
   * ジャンル
   */
  genre: string;
  /**
   * 小エリア
   */
  smallArea: object;
  /**
   * キャッチコピー
   */
  catch: string;
  /**
   * 喫煙可否
   */
  non_smoking: string;
  /**
   * 予算
   */
  budget: object;
  /**
   * 貸切可否
   */
  charter: string;
  /**
   * アクセス情報
   */
  access: string;
}
