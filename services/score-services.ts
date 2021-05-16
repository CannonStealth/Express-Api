import scores from "../interface/scores-schema"
import { Document } from "mongoose"

export default class {
    static async create(name: string, points: number): Promise<void> {
        await new scores({
        name,
        points
    }).save()
    }
    
    static async read(name: string): Promise<Document<Object, string | number> | null> {
        const results = await scores.findOne({ name })
        if (!results) return null;
        return results;
    }

    static async readAll(): Promise<Document<Object, string | number>[] | null> {
        const results = await scores.find()
        if (!results) return null;
        return results;
    }

    static async deleteAll(): Promise<void> {
        await scores.deleteMany()
    }
}