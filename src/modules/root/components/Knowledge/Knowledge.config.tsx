import { ToolData } from './Knowledge.contracts'

import { ReactComponent as Css } from '../../../../assets/icons/Css.svg'
import { ReactComponent as Docker } from '../../../../assets/icons/Docker.svg'
import { ReactComponent as Figma } from '../../../../assets/icons/Figma.svg'
import { ReactComponent as Firebase } from '../../../../assets/icons/Firebase.svg'
import { ReactComponent as Git } from '../../../../assets/icons/Git.svg'
import { ReactComponent as Github } from '../../../../assets/icons/Github.svg'
import { ReactComponent as Gitlab } from '../../../../assets/icons/Gitlab.svg'
import { ReactComponent as GraphQl } from '../../../../assets/icons/GraphQl.svg'
import { ReactComponent as Illustrator } from '../../../../assets/icons/Illustrator.svg'
import { ReactComponent as JS } from '../../../../assets/icons/Js.svg'
import { ReactComponent as Lightroom } from '../../../../assets/icons/Lightroom.svg'
import { ReactComponent as NextJs } from '../../../../assets/icons/NextJs.svg'
import { ReactComponent as NodeJs } from '../../../../assets/icons/NodeJs.svg'
import { ReactComponent as Photoshop } from '../../../../assets/icons/Photoshop.svg'
import { ReactComponent as PhpStorm } from '../../../../assets/icons/PhpStorm.svg'
import { ReactComponent as React } from '../../../../assets/icons/React.svg'
import { ReactComponent as Sass } from '../../../../assets/icons/Sass.svg'
import { ReactComponent as TS } from '../../../../assets/icons/Ts.svg'
import { ReactComponent as VueJs } from '../../../../assets/icons/Vue.svg'
import { ReactComponent as Xd } from '../../../../assets/icons/Xd.svg'

export enum ToolName {
  Vue = 'vue',
  React = 'react',
  NextJs = 'nextJs',
  TS = 'ts',
  JS = 'js',
  GraphQl = 'graphQl',
  Sass = 'sass',
  Css = 'css',
  NodeJs = 'nodeJs',
  Firebase = 'firebase',
  Docker = 'docker',
  GitHub = 'gitHub',
  Git = 'git',
  GitLab = 'gitLab',
  PhpStorm = 'phpStorm',
  Figma = 'figma',
  Photoshop = 'photoshop',
  Xd = 'xd',
  Illustrator = 'illustrator',
  Lightroom = 'lightroom'
}

export enum KnowledgeContext {
  Coding = 'coding',
  Drawing = 'drawing',
  Analytics = 'analytics',
  Ecommerce = 'ecommerce',
  Marketing = 'marketing',
  Others = 'others'
}

export enum OtherContextItemName {
  SeoOptimization = 'seoOptimization',
  CMS = 'cms',
  GoogleAnalytics = 'googleAnalytics',
  GoogleAds = 'googleAds',
  FacebookAds = 'facebookAds',
  GoogleMerchantCenter = 'googleMerchantCenter',
  XmlProductFeeds = 'xmlProductFeeds',
  WebsiteAnalytics = 'websiteAnalytics',
  Magento = 'magento',
  AdobePremierePro = 'adobePremierePro',
  Criteo = 'criteo',
  Awin = 'awin',
  Freshmail = 'freshmail',
  Sendinblue = 'sendinblue'
}

export const toolsKnowledgeRegistry: Record<string, ToolData> = {
  [ToolName.Vue]: {
    content: <VueJs />,
    context: KnowledgeContext.Coding,
    alt: 'Frontend developer | Web developer | Vue.js'
  },
  [ToolName.React]: {
    content: <React />,
    context: KnowledgeContext.Coding,
    alt: 'Frontend developer | Web developer | React.js'
  },
  [ToolName.NextJs]: {
    content: <NextJs />,
    context: KnowledgeContext.Coding,
    alt: 'Frontend developer | Web developer | Next.js'
  },
  [ToolName.TS]: {
  content: <TS />,
    context: KnowledgeContext.Coding,
    alt: 'Frontend developer | Web developer | TypeScript'
  },
  [ToolName.JS]: {
    content: <JS />,
    context: KnowledgeContext.Coding,
    alt: 'Frontend developer | Web developer | JavaScript'
  },
  [ToolName.GraphQl]: {
    content: <GraphQl />,
    context: KnowledgeContext.Coding,
    alt: 'Frontend developer | Web developer | GraphQL'
  },
  [ToolName.Sass]: {
    content: <Sass />,
    context: KnowledgeContext.Coding,
    alt: 'Frontend developer | Web developer | Sass | Scss'
  },
  [ToolName.Css]: {
    content: <Css />,
    context: KnowledgeContext.Coding,
    alt: 'Frontend developer | Web developer | Css'
  },
  [ToolName.NodeJs]: {
    content: <NodeJs />,
    context: KnowledgeContext.Coding,
    alt: 'Fullstack developer | Web developer | Node.js'
  },
  [ToolName.Firebase]: {
    content: <Firebase />,
    context: KnowledgeContext.Coding,
    alt: 'Frontend developer | Web developer | Firebase | Google Firebase'
  },
  [ToolName.Docker]: {
    content: <Docker />,
    context: KnowledgeContext.Coding,
    alt: 'Frontend developer | Web developer | Docker'
  },
  [ToolName.GitHub]: {
    content: <Github />,
    context: KnowledgeContext.Coding,
    alt: 'Frontend developer | Web developer | GitHub'
  },
  [ToolName.Git]: {
    content: <Git />,
    context: KnowledgeContext.Coding,
    alt: 'Frontend developer | Web developer | Git'
  },
  [ToolName.GitLab]: {
    content: <Gitlab />,
    context: KnowledgeContext.Coding,
    alt: 'Frontend developer | Web developer | GitLab'
  },
  [ToolName.PhpStorm]: {
    content: <PhpStorm />,
    context: KnowledgeContext.Coding,
    alt: 'Frontend developer | Web developer | PHP Storm code editor'
  },
  [ToolName.Figma]: {
    content: <Figma />,
    context: KnowledgeContext.Drawing,
    alt: 'Graphics Designer | Web Designer | UI | UX | Figma'
  },
  [ToolName.Photoshop]: {
    content: <Photoshop />,
    context: KnowledgeContext.Drawing,
    alt: 'Graphics Designer | Web Designer | UI | UX | Adobe Photoshop'
  },
  [ToolName.Xd]: {
    content: <Xd />,
    context: KnowledgeContext.Drawing,
    alt: 'Graphics Designer | Web Designer | UI | UX | Adobe Xd'
  },
  [ToolName.Illustrator]: {
    content: <Illustrator />,
    context: KnowledgeContext.Drawing,
    alt: 'Graphics Designer | Web Designer | UI | UX | Adobe Illustrator'
  },
  [ToolName.Lightroom]: {
    content: <Lightroom />,
    context: KnowledgeContext.Drawing,
    alt: 'Graphics Designer | Web Designer | UI | UX | Adobe Lightroom'
  },

  // --------- Ecommerce
  [OtherContextItemName.CMS]: {
    content: 'Content Management Systems',
    context: KnowledgeContext.Ecommerce,
    alt: 'CMS | Content Management Systems | Customs | Magento | Wordpress'
  },
  [OtherContextItemName.GoogleAnalytics]: {
    content: 'Google Analytics',
    context: KnowledgeContext.Ecommerce,
    alt: 'Google Analytics | Website analytics | GA4'
  },
  [OtherContextItemName.WebsiteAnalytics]: {
    content: 'Website Analytics',
    context: KnowledgeContext.Ecommerce,
    alt: 'Website Analytics | Website analytics configuration'
  },
  [OtherContextItemName.Magento]: {
    content: 'Magento',
    context: KnowledgeContext.Ecommerce,
    alt: 'Magento | Magento GraphQL | Magento administration'
  },
  [OtherContextItemName.GoogleMerchantCenter]: {
    content: 'Google Merchant Center',
    context: KnowledgeContext.Ecommerce,
    alt: 'Google Merchant Center | Google product feeds'
  },
  [OtherContextItemName.XmlProductFeeds]: {
    content: 'XML Product Feeds',
    context: KnowledgeContext.Ecommerce,
    alt: 'XML product feeds'
  },

  // --------- Marketing
  [OtherContextItemName.SeoOptimization]: {
    content: 'SEO Optimization',
    context: KnowledgeContext.Marketing,
    alt: 'SEO | SEO Optimization | Web SEO | Search Engine Optimization'
  },
  [OtherContextItemName.GoogleAds]: {
    content: 'Google Ads',
    context: KnowledgeContext.Marketing,
    alt: 'Google Ads'
  },
  [OtherContextItemName.FacebookAds]: {
    content: 'Facebook Ads',
    context: KnowledgeContext.Marketing,
    alt: 'Facebook Ads'
  },
  [OtherContextItemName.Awin]: {
    content: 'Awin Affiliate Marketing',
    context: KnowledgeContext.Marketing,
    alt: 'Awin | Awin Affiliate Marketing'
  },
  [OtherContextItemName.Criteo]: {
    content: 'Criteo',
    context: KnowledgeContext.Marketing,
    alt: 'Criteo | Criteo retargeting ads | Criteo tracking implementation'
  },
  [OtherContextItemName.Freshmail]: {
    content: 'Freshmail',
    context: KnowledgeContext.Marketing,
    alt: 'Freshmail | Freshmail mailing campaigns'
  },
  [OtherContextItemName.Sendinblue]: {
    content: 'Sendinblue',
    context: KnowledgeContext.Marketing,
    alt: 'Sendinblue | Sendinblue mailing campaigns'
  },

  // --------- Others
  [OtherContextItemName.AdobePremierePro]: {
    content: 'Adobe Premiere Pro',
    context: KnowledgeContext.Others,
    alt: 'Adobe Premiere Pro | Video editing'
  },
}
