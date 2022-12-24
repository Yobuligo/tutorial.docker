import { IIdGenerator } from "./IIdGenerator";
class IdGeneratorDefault implements IIdGenerator {
  private id = 0;

  next(): string {
    this.id++;
    return this.id.toString();
  }
}

export const next = (): string => {
  return IdGenerator.next();
};

export const IdGenerator: IIdGenerator = new IdGeneratorDefault();
