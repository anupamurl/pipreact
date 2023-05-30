import * as mongoose from 'mongoose';
export declare const PatientSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    plandate: mongoose.Types.DocumentArray<{
        mealplan: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            type?: string;
            mealhtml?: string;
            time?: string;
        }>;
        guideline: mongoose.Types.DocumentArray<{
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
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    plandate: mongoose.Types.DocumentArray<{
        mealplan: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            type?: string;
            mealhtml?: string;
            time?: string;
        }>;
        guideline: mongoose.Types.DocumentArray<{
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
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    plandate: mongoose.Types.DocumentArray<{
        mealplan: mongoose.Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            type?: string;
            mealhtml?: string;
            time?: string;
        }>;
        guideline: mongoose.Types.DocumentArray<{
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
    _id: mongoose.Types.ObjectId;
}, never>>;
