import { Router } from 'express'
import { VocabularyController } from '@/vocabulary/api/vocabulary-controller'
import { WordService } from '@/vocabulary/application/word-service'
import { wordRepositoryPg } from '@/vocabulary/infrastructure/word-repository-pg'
import { wordConverter } from '@/vocabulary/application/word-converter'

const vocabularyController = VocabularyController(
  // TODO: DI
  new WordService(wordRepositoryPg(), wordConverter()),
)

const router = Router()
router.get('/vocabulary/:userId', vocabularyController.getWords)
router.post('/vocabulary/:userId', vocabularyController.addWord)
router.get('/vocabulary/:userId/:wordId', vocabularyController.getWord)
router.put('/vocabulary/:userId/:wordId', vocabularyController.updateWord)
router.delete('/vocabulary/:userId/:wordId', vocabularyController.deleteWord)

export default router
