import {
  Translation,
  TranslationReadOnly,
} from '@/vocabulary/domain/translation'

export interface Word {
  text: string
  language: string
}

export interface WordReadOnly extends Word {
  id: string
  userId: string
  translations?: Translation[]
}

export interface IWordService {
  getWords(userId: string): Promise<WordReadOnly[]>
  getWordById(id: string, userId: string): Promise<WordReadOnly | undefined>
  addWord(word: Word, userId: string): Promise<WordReadOnly>
  addTranslation(
    wordId: string,
    userId: string,
    translation: Translation,
  ): Promise<TranslationReadOnly>
}
