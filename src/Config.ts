export interface Config {
    data: { [ k: string ]: any; };
    method: "GET" | "POST" | "get" | "post",
    url: string;
}
