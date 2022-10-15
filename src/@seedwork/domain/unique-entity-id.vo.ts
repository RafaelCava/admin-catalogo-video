import InvalidUuidError from "../errors/invalid-uuid.error";
import { v4 as uuidv4 } from "uuid";
import { validate as uuidValidator } from "uuid";

export default class UniqueEntityId {
  constructor(public readonly id?: string) {
    this.id = id || uuidv4();
    this.validate()
  }

  private validate() {
    const isValid = uuidValidator(this.id);
    if (!isValid) {
      throw new InvalidUuidError();
    }
  }
}
