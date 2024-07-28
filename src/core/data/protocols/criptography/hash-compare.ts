export interface HashCompare {
    hash(value: string): Promise<string>;
} 