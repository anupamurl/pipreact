/// <reference types="node_modules/mongoose/types/aggregate" />
/// <reference types="node_modules/mongoose/types/callback" />
/// <reference types="node_modules/mongoose/types/collection" />
/// <reference types="node_modules/mongoose/types/connection" />
/// <reference types="node_modules/mongoose/types/cursor" />
/// <reference types="node_modules/mongoose/types/document" />
/// <reference types="node_modules/mongoose/types/error" />
/// <reference types="node_modules/mongoose/types/expressions" />
/// <reference types="node_modules/mongoose/types/helpers" />
/// <reference types="node_modules/mongoose/types/middlewares" />
/// <reference types="node_modules/mongoose/types/indexes" />
/// <reference types="node_modules/mongoose/types/models" />
/// <reference types="node_modules/mongoose/types/mongooseoptions" />
/// <reference types="node_modules/mongoose/types/pipelinestage" />
/// <reference types="node_modules/mongoose/types/populate" />
/// <reference types="node_modules/mongoose/types/query" />
/// <reference types="node_modules/mongoose/types/schemaoptions" />
/// <reference types="node_modules/mongoose/types/schematypes" />
/// <reference types="node_modules/mongoose/types/session" />
/// <reference types="node_modules/mongoose/types/types" />
/// <reference types="node_modules/mongoose/types/utility" />
/// <reference types="node_modules/mongoose/types/validation" />
/// <reference types="node_modules/mongoose/types/virtuals" />
/// <reference types="node_modules/mongoose/types" />
/// <reference types="node_modules/mongoose/types/inferschematype" />
import { Mongoose } from 'mongoose';
export declare const patientProviders: {
    provide: string;
    useFactory: (mongoose: Mongoose) => import("mongoose").Model<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        plandate: import("mongoose").Types.DocumentArray<{
            mealplan: import("mongoose").Types.DocumentArray<{
                createdAt: NativeDate;
                updatedAt: NativeDate;
            } & {
                type?: string;
                mealhtml?: string;
                time?: string;
            }>;
            guideline: import("mongoose").Types.DocumentArray<{
                createdAt: NativeDate;
                updatedAt: NativeDate;
            } & {
                guidehtml?: string;
            }>;
            start?: Date;
            end?: Date;
            public?: boolean;
        }>;
        email?: string;
        name?: string;
        age?: number;
        complaints?: string;
        height?: number;
        phone?: string;
        weight?: number;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        plandate: import("mongoose").Types.DocumentArray<{
            mealplan: import("mongoose").Types.DocumentArray<{
                createdAt: NativeDate;
                updatedAt: NativeDate;
            } & {
                type?: string;
                mealhtml?: string;
                time?: string;
            }>;
            guideline: import("mongoose").Types.DocumentArray<{
                createdAt: NativeDate;
                updatedAt: NativeDate;
            } & {
                guidehtml?: string;
            }>;
            start?: Date;
            end?: Date;
            public?: boolean;
        }>;
        email?: string;
        name?: string;
        age?: number;
        complaints?: string;
        height?: number;
        phone?: string;
        weight?: number;
    }> & Omit<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        plandate: import("mongoose").Types.DocumentArray<{
            mealplan: import("mongoose").Types.DocumentArray<{
                createdAt: NativeDate;
                updatedAt: NativeDate;
            } & {
                type?: string;
                mealhtml?: string;
                time?: string;
            }>;
            guideline: import("mongoose").Types.DocumentArray<{
                createdAt: NativeDate;
                updatedAt: NativeDate;
            } & {
                guidehtml?: string;
            }>;
            start?: Date;
            end?: Date;
            public?: boolean;
        }>;
        email?: string;
        name?: string;
        age?: number;
        complaints?: string;
        height?: number;
        phone?: string;
        weight?: number;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        plandate: import("mongoose").Types.DocumentArray<{
            mealplan: import("mongoose").Types.DocumentArray<{
                createdAt: NativeDate;
                updatedAt: NativeDate;
            } & {
                type?: string;
                mealhtml?: string;
                time?: string;
            }>;
            guideline: import("mongoose").Types.DocumentArray<{
                createdAt: NativeDate;
                updatedAt: NativeDate;
            } & {
                guidehtml?: string;
            }>;
            start?: Date;
            end?: Date;
            public?: boolean;
        }>;
        email?: string;
        name?: string;
        age?: number;
        complaints?: string;
        height?: number;
        phone?: string;
        weight?: number;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        plandate: import("mongoose").Types.DocumentArray<{
            mealplan: import("mongoose").Types.DocumentArray<{
                createdAt: NativeDate;
                updatedAt: NativeDate;
            } & {
                type?: string;
                mealhtml?: string;
                time?: string;
            }>;
            guideline: import("mongoose").Types.DocumentArray<{
                createdAt: NativeDate;
                updatedAt: NativeDate;
            } & {
                guidehtml?: string;
            }>;
            start?: Date;
            end?: Date;
            public?: boolean;
        }>;
        email?: string;
        name?: string;
        age?: number;
        complaints?: string;
        height?: number;
        phone?: string;
        weight?: number;
    }>> & Omit<import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        plandate: import("mongoose").Types.DocumentArray<{
            mealplan: import("mongoose").Types.DocumentArray<{
                createdAt: NativeDate;
                updatedAt: NativeDate;
            } & {
                type?: string;
                mealhtml?: string;
                time?: string;
            }>;
            guideline: import("mongoose").Types.DocumentArray<{
                createdAt: NativeDate;
                updatedAt: NativeDate;
            } & {
                guidehtml?: string;
            }>;
            start?: Date;
            end?: Date;
            public?: boolean;
        }>;
        email?: string;
        name?: string;
        age?: number;
        complaints?: string;
        height?: number;
        phone?: string;
        weight?: number;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>>;
    inject: string[];
}[];
