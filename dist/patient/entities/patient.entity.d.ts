import { Document } from 'mongoose';
export interface Patient extends Document {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}
