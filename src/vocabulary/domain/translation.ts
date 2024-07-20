export interface Translation {
  language: string
  translation: string
  description?: string
}

export interface TranslationReadOnly extends Translation {
  id: string
  wordId: string
}
