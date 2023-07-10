import { FactsNumbersProps } from '../../modules/root/components/FactsNumbers'
import { BrandExperienceItemData } from '../../modules/shared/components/BrandsExperience'

export const exampleFactsNumbers = (): FactsNumbersProps => {
  return {
    items: [
      {
        heading: '3 years',
        description: 'coding experience'
      },
      {
        heading: '25',
        description: 'commercial projects'
      },
      {
        heading: 'Mid',
        description: 'seniority'
      }
    ]
  }
}

export const exampleWebDevelopmentBrandsExperienceItems = (): Array<BrandExperienceItemData> => {
  return [
    { label: 'Dr Irena Eris', target: 'https://sklep.drirenaeris.com/' },
    { label: 'Aelia Duty Free', target: 'https://aelia.pl/' },
    { label: 'Hypemeapp', target: 'https://www.google.com/search?q=hypemeapp' },
    { label: 'BNP Paribas', target: 'https://www.bnpparibas.pl/kariera/pl/' },
    { label: 'Anystar', target: 'https://anystar.io/' },
    { label: 'Pharmaceris', target: 'https://pharmaceris.com/' },
    { label: 'Ogen', target: 'https://ogen.pl/' },
    { label: 'Lirene', target: 'https://lirene.pl/' },
    { label: 'Defence24', target: 'https://defence24.pl/' },
    { label: 'ForPro', target: 'https://www.forpro.pl/' },
    { label: 'Shop TYTAN', target: 'https://shop.tytan.com/' },
    { label: 'TYTAN Wins', target: 'https://wins.tytan.com/' }
  ]
}
