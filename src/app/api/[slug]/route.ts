import {redirect} from "next/navigation";


export async function GET(request: Request, {params}: {params: {slug: string}}) {

    console.log(request.body)
    return new Response(params.slug)
}

export async function OPTIONS() {
    console.log("으아아아")
    return new Response(params.slug)
}