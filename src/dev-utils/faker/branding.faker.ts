
import { BrandingItemsListProps } from '../../modules/root/components/BrandingItemsList'
import { BrandExperienceItemData } from '../../modules/shared/components/BrandsExperience'

export const exampleBranding = (): BrandingItemsListProps => {
  return {
    items: [
      {
        id: 'wartosc-dodana',
        caption: 'Wartość Dodane PODCAST',
        captionDetails: '(en. Add Value PODCAST)',
        image: require('../../assets/branding/wartosc-dodana-podcast.jpg'),
        targetLink: {
          target: 'https://google.com' // TODO
        },
        hasOwnPage: true
      },
      {
        id: 'forpro-under-armour-rush',
        caption: 'ForPro Under Armour "Rush" Campaign Cover',
        image: require('../../assets/branding/under-armour-rush.jpg'),
        targetLink: {
          target: 'https://google.com' // TODO
        },
        hasOwnPage: true
      },
      {
        id: 'forpro-adidad-worn-out-shoes',
        caption: 'ForPro Adidas "Worn-out Shoes Return" Campaign',
        image: require('../../assets/branding/worn-out-shoes.jpg'),
        targetLink: {
          target: 'https://google.com' // TODO
        },
        hasOwnPage: true
      },
      {
        id: 'forpro-nike-react-flyknit',
        caption: 'ForPro Nike React Infinity Flyknit 2 Campaign',
        image: require('../../assets/branding/react-flyknit.jpg'),
        targetLink: {
          target: 'https://google.com' // TODO
        },
        hasOwnPage: true
      },
      {
        id: 'forpro-back-to-school',
        caption: 'ForPro Back To School Campaign',
        image: require('../../assets/branding/back-to-school.jpg'),
        targetLink: {
          target: 'https://google.com' // TODO
        },
        hasOwnPage: true
      },
      {
        id: 'photo-editorials',
        caption: 'Photo editorials',
        image: require('../../assets/branding/photo-editorials.jpg'),
        targetLink: {
          target: 'https://google.com' // TODO
        },
        hasOwnPage: true
      }
    ]
  }
}

export const exampleBrandingBrandsExperienceItems = (): Array<BrandExperienceItemData> => {
  return [
    { label: 'Nike', target: 'https://www.nike.com/pl/' },
    { label: 'Adidas', target: 'https://adidas.com/' },
    { label: 'Under Armour', target: 'https://www.underarmour.eu/' },
    { label: 'On Running', target: 'https://www.on-running.com/' },
    { label: 'ForPro', target: 'https://www.forpro.pl/' },
    { label: 'Lirene', target: 'https://lirene.pl/' },
    { label: 'Anystar', target: 'https://anystar.io/' },
    { label: 'Hypemeapp', target: 'https://www.google.com/search?q=hypemeapp' },
    { label: 'RSI Sport', target: 'https://rsisport.pl/' },
    { label: 'Pharmaceris', target: 'https://pharmaceris.com/' },
    { label: 'Dr Irena Eris', target: 'https://sklep.drirenaeris.com/' },
    { label: 'Lodz Grand Theatre', target: 'https://www.operalodz.com/' },
    { label: 'Mikulik', target: 'https://www.instagram.com/mikulikpl/?hl=en' },
    { label: 'Eventage', target: 'https://www.eventage.pl/' },
  ]
}
