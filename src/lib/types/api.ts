export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PATCH = 'patch',
    PUT = 'put',
    DELETE = 'delete'
}

export type OnSuccess<Response> = (response: Response) => void
export type OnError = () => void
