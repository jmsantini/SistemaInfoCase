import {IdGenerator} from "../gateway/IdGenerator";
import {v4} from "uuid";

export class UuidGenerator implements IdGenerator{
    public generate(): string {
        return v4()
    }
}