"use client";

import {useState} from "react";
import {fetchImage} from "./fetch-image";
import styles from "./page.module.css";

type CatImageProps = {
    url: string;
};

export function CatImage({url}: CatImageProps){
    const [imageUrl, setImageUrl] = useState(url);
    //imageUrlは状態変数で、現在の猫画像のURLを保持
    //setImageUrlは状態を更新するための関数です。この関数を呼び出すことでimageUrlの値を変更できます
    //imageUrlの状態が変わるとコンポーネントの再レンダリングが行われる

    const refreshImage = async () => {
        setImageUrl("");
        const image = await fetchImage();
        setImageUrl(image.url);
    };

    return(
        <div className={styles.page}>
            <button onClick = {refreshImage} className={styles.button}>
                他のにゃんこも見る
            </button>
            
            <div className={styles.frame}>
                {imageUrl && <img src={imageUrl} />} 
            </div>
        </div>//「条件付きレンダリング」↑
              //imageUrlが空文字列の場合、左辺が「偽」扱いとなり、右辺の<img>は評価されません。よって、何も表示されません。
              //imageUrlが空文字列でない場合、左辺が「真」扱いとなり、右辺の<img>が評価されます。よって、画像が表示されます。
    );
}