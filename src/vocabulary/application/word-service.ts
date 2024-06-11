import { IWordService, Word, WordReadOnly } from '@/vocabulary/domain/word'
import { Converter } from '@/vocabulary/application/converter'
import { IWordRepository } from '@/vocabulary/infrastructure/word-repository'
import { TranslationReadOnly } from '@/vocabulary/domain/translation'
import { InsertWordType, SelectWordType } from '@/vocabulary/application/schema'

export class WordService implements IWordService {
  constructor(
    private readonly wordRepository: IWordRepository,
    private readonly converter: Converter<
      WordReadOnly,
      InsertWordType,
      SelectWordType
    >,
  ) {}

  async getWords(userId: string) {
    const response = await this.wordRepository.getWords(userId)
    return response.map((word) => this.converter.toDomain(word))
  }

  async getWordById(id: string, userId: string) {
    const res = await this.wordRepository.getWordById(id, userId)
    if (!res) return undefined
    return this.converter.toDomain(res)
  }

  async addWord(word: Word, userId: string) {
    const _word = this.converter.toPersistence(word, userId)
    const created = await this.wordRepository.addWord(_word)
    return this.converter.toDomain(created)
  }

  async addTranslation(
    wordId: string,
    translation: Word,
  ): Promise<TranslationReadOnly> {
    throw new Error('Method not implemented.')
  }

  async deleteWord(id: string, userId: string) {
    return this.wordRepository.deleteWord(id, userId)
  }
}
