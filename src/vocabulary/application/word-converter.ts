import { Word, WordReadOnly } from '@/vocabulary/domain/word'
import { Converter } from '@/vocabulary/application/converter'
import {
  insertWordSchema,
  InsertWordType,
  SelectWordType,
} from '@/vocabulary/application/schema'

export function wordConverter(): Converter {
  return {
    toDomain(word: SelectWordType): WordReadOnly {
      return {
        id: word.id,
        userId: word.userId,
        text: word.text,
        language: word.language,
        // @ts-ignore
        translations: word.translations || [],
      }
    },
    toPersistence(obj: Partial<Word>, userId: string): InsertWordType {
      return insertWordSchema.parse({
        ...obj,
        userId,
      })
    },
  }
}
