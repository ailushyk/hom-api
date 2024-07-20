import { Word } from '@/vocabulary/domain/word'

import { SelectWordType } from '@/vocabulary/application/schema'
import { Translation } from '@/vocabulary/domain/translation'

export interface IWordRepository {
  addWord(data: Word): Promise<SelectWordType>
  getWordById(id: string, userId: string): Promise<SelectWordType | undefined>
  getWords(userId: string): Promise<SelectWordType[]>
  deleteWord(wordId: string, userId: string): Promise<void>
  updateWord(
    wordId: string,
    userId: string,
    data: Word,
  ): Promise<SelectWordType>
  addTranslation(
    wordId: string,
    userId: string,
    translation: string,
  ): Promise<Translation>
}
