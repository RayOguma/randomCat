import {connection} from "next/server";
import {fetchImage} from "./fetch-image";
import {CatImage} from "./cat-image";

export default async function Home() {
  //asyncキーワードはこの関数が非同期処理を行うことを示す
  //※「非同期処理」・・・あるタスクが完了するのを待たずにその間に別のタスクを実行できる処理方式
  //ファイルの読み込みやネットワーク通信の処理でプログラムの効率と応答性を高める
  await connection(); //ビルド時にfetchImageの結果が固定されないようにする
  //「await」・・・非同期処理が終わるまで一時停止することができる
  const image = await fetchImage();

  return <CatImage url={image.url} />;
    
}
