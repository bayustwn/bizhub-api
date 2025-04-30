import { Context } from "hono";
import {ContentfulStatusCode} from "hono/dist/types/utils/http-status";

export const responses = (
    ctx: Context,
    status: ContentfulStatusCode,
    success: boolean,
    message: string,
    data?: any
) => {
    if (data){
        return ctx.json({
            success,
            message,
            data
        }, status);
    }else{
        return ctx.json({
            success,
            message,
        }, status);
    }
};

export const serverError = (ctx: Context, message = "Server Error!") => {
    return responses(ctx, 500, false, message);
};