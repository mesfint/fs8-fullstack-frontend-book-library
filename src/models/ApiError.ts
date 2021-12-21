export type ApiError = {
    statusCode: number;
    message: string;
    source?: Error & {
        errors: Record<string, {message: string}> 
    };
    stack?: string | undefined;
}