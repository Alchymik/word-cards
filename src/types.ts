export type CardData = {
  id: number;
  word: string;
  partOfSpeech: string;
  definition: string;
  example: string;
  translation: string;
  actionLabel: string;
};

export type AuthState = {
  isAuthenticated: boolean;
  user: string | null;
  error: string | null;
};

export type FieldType =
  | 'text'
  | 'number'
  | 'textarea'
  | 'date'
  | 'select'
  | 'checkbox'
  | 'radio';

export interface ProfileField {
  name: string;
  label: string;
  type: FieldType;
  options?: string[];
  required?: boolean;
}

export type ProfileData = Record<string, any>;