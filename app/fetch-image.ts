"use server";

import {CAT_API_KEY} from "./env";

type Image = {
    url: string;
};
//レスポンスに含まれる画像情報の型をImageとして定義
//url以外の定義が必要なら追加すればいいだけ

export async function fetchImage(): Promise<Image>{ //fetchImage関数の戻り値をPromise<Image>として型注釈
    const res = await fetch("https://api.thecatapi.com/v1/images/search",
        {headers: {"x-api-key": CAT_API_KEY},}
    );
    const images = await res.json();　//https://developer.mozilla.org/ja/docs/Web/API/Response/json
    console.log("fetchImage: 画像情報を取得しました",images);
    return images[0];
}