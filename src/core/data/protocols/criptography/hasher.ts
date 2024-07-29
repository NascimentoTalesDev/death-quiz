export interface Hasher {
    hash(value: string): Promise<string>;
    compare(password: string, hash: string): Promise<boolean>;
} 