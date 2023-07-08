
import { faker } from '@faker-js/faker'

import { ExperienceProps } from '../../modules/root/components/Experience'

export const exampleExperience = (): ExperienceProps => {
  return {
    items: Array.from(Array(5)).map(() => {
      return {
        companyName: faker.word.words(2),
        companyWebsitePath: faker.internet.url(),
        dateFrom: faker.date.anytime().toLocaleDateString(),
        dateTo: faker.date.anytime().toLocaleDateString(),
        description: faker.lorem.paragraphs(2),
        descriptionExpanded: faker.lorem.paragraphs(4),
        id: faker.datatype.uuid(),
        roles: ['Frontend Developer', 'UI/UX Designer']
      }
    })
  }
}
