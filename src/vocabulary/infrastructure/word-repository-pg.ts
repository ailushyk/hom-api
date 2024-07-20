import { Word } from '@/vocabulary/domain/word'
import { db } from '@/config/database'
import { words } from '@/vocabulary/infrastructure/schema/words-schema'
import { IWordRepository } from '@/vocabulary/infrastructure/word-repository'
import { and, eq } from 'drizzle-orm'
import { InsertWordType } from '@/vocabulary/application/schema'

export function wordRepositoryPg(): IWordRepository {
  return {
    getWords(userId: string) {
      return db.select().from(words).where(eq(words.userId, userId))
    },
    async getWordById(id: string, userId: string) {
      const [data] = await db
        .select()
        .from(words)
        .where(and(eq(words.id, id), eq(words.userId, userId)))
      return data
    },
    addWord: async (word: InsertWordType) => {
      // const re = await db.select().from(languages).execute()
      const [data] = await db.insert(words).values(word).returning()
      return data
    },
    updateWord(wordId: string, userId: string, data: Word) {
      throw new Error('Method not implemented.')
    },
    deleteWord(id: string, userId: string): Promise<void> {
      throw new Error('Method not implemented.')
    },
    addTranslation: async (
      wordId: string,
      userId: string,
      translation: string,
    ) => {
      throw new Error('Method not implemented.')
    },
  }
}
