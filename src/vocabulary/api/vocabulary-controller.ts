import { Request, Response } from 'express'
import { IWordService } from '@/vocabulary/domain/word'

export function VocabularyController(wordService: IWordService) {
  async function getWords(req: Request, res: Response) {
    const { userId } = req.params
    try {
      const words = await wordService.getWords(userId)
      return res.status(200).json({ data: words })
    } catch (error) {
      console.error(error)
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  }

  async function addWord(req: Request, res: Response) {
    const { userId } = req.params
    const { text, language } = req.body
    try {
      const result = await wordService.addWord(
        {
          text,
          language,
        },
        userId,
      )
      return res.status(201).json({ data: result })
    } catch (error) {
      console.error(error)
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  }

  async function getWord(req: Request, res: Response) {
    const { userId, wordId } = req.params
    try {
      const data = await wordService.getWordById(wordId, userId)
      return res.status(200).json({ data })
    } catch (error) {
      console.error(error)
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  }

  // update word in the vocabulary
  function updateWord(req: Request, res: Response) {}

  // delete word from the vocabulary
  function deleteWord(req: Request, res: Response) {}

  return {
    getWords,
    addWord,
    getWord,
    updateWord,
    deleteWord,
  }
}
