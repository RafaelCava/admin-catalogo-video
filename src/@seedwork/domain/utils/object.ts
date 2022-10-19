export function deepFreeze<T>(obj: T) {
  if(obj === null || obj === undefined) {
    return obj
  }
  const propNames = Object.getOwnPropertyNames(obj);

  for (let name of propNames) {
    const value = obj[name as keyof T];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(obj);
}
