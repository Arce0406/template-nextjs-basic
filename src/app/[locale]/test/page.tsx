import { headers } from "next/headers"

async function getApi() {
    const host = headers().get("host");
    console.log(host)
    const res = await fetch(`${host}/api`)
    return res.text()
}

export default async function TestPage() {
    const response = await getApi();
    return (<>{response}</>)
}