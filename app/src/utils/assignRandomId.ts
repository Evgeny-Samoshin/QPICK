import { generateRandomId } from "./generateRandomId";

export const assignRandomId = (obj: object) => (
  {
    ...obj,
    id: generateRandomId(),
  }
)