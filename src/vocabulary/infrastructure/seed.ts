import { db } from '@/config/database'
import { languages } from '@/vocabulary/infrastructure/schema/languages-schema'

async function main() {
  console.log('Seed script is running...')
  await db.insert(languages).values([
    {
      code: 'en',
      name: 'English',
    },
  ])
  console.log('Seed script is done!')
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
