export const blankCanvasMessage: string = "Tambahkan Komponen Disini";

export function isNumeric(value: any): boolean {
  if (typeof value !== "string") {
    return false;
  }
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
}

export function stringToInt(value: string): number | null {
  const parsedValue = parseInt(value, 10); // Parse as base 10

  if (isNaN(parsedValue)) {
    return null; // Return null if parsing fails
  }

  return parsedValue;
}

export function reorderList(list: any[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}
