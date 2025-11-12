export const CAT_API_KEY = process.env.CAT_API_KEY ?? "";

if(!CAT_API_KEY){
    console.warn("環境変数 CAT_API_KEY が設定されていません");
}

