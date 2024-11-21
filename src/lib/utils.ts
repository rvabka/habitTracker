type ClassValue = string | number | boolean | undefined | null;
type ClassArray = ClassValue[];
type ClassObject = { [key: string]: any };
type ClassInput = ClassValue | ClassArray | ClassObject;

export function cn(...inputs: ClassInput[]): string {
  return inputs
    .flat()
    .filter(Boolean)
    .map((input) => {
      if (typeof input === 'string') return input;
      if (typeof input === 'object' && input !== null) {
        return Object.entries(input)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ');
      }
      return '';
    })
    .join(' ')
    .trim();
}