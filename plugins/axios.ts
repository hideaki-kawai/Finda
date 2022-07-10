// import { AxiosError } from "axios";

// export default function ({ $axios, error, $cognito }) {
//   $axios.onError((axiosError: AxiosError) => {
//     const res = axiosError.response;
//     const status = res?.status ?? 500;
//     const messages = res.data.errors.message;

//     if (status === 500 || status === 404) {
//       // システムエラーと404の場合は共通エラーページへ
//       error({
//         statusCode: status,
//         message: messages,
//       });
//     } else if (status === 401) {
//       sessionStorage.clear();
//       // $cognito.CognitoUserが残らないようログアウト時と同様にwindow.location.hrefでリダイレクトする。
//       window.location.href = "/";
//     }
//   });
//   $axios.onRequest(async (config) => {
//     if (!$cognito.accessTokenFromSessionStorage) {
//       return config;
//     }

//     const now = Date.now();
//     const lastApiCallDate = parseInt(
//       sessionStorage.getItem("lastApiCallDate") ?? now.toString()
//     );
//     sessionStorage.setItem("lastApiCallDate", now.toString());

//     const expirationDate = now - $cognito.expiration * 1000;
//     if (lastApiCallDate > expirationDate) {
//       // 直近1時間以内にAPIリクエストがある場合のみアクセストークン更新を実施する。
//       try {
//         await $cognito.getSessionAsync();
//       } catch {
//         // 例外が発生した場合はアクセストークンを更新しない。
//       }
//     }

//     $axios.setToken($cognito.accessTokenFromSessionStorage);
//     return config;
//   });
// }
