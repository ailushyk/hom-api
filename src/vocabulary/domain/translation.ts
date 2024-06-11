export interface Translation {
  wordId: string
  language: string
  translation: string
}

export interface TranslationReadOnly extends Translation {
  id: string
}
