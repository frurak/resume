
import BrandingView from './views/Branding/Branding.view'
import InformationView from './views/Information/Information.view'
import NotFoundView from './views/NotFound.view'
import WebDesignView from './views/WebDesign/WebDesign.view'
import WebDevelopmentView from './views/WebDevelopment/WebDevelopment.view'
import { RouteConfig, RouteTargetType } from './contracts/routes.contracts'

export enum RouteName {
  Information = 'information',
  Branding = 'branding',
  WebDesign = 'webDesign',
  WebDevelopment = 'webDevelopment'
}

export const rootRoutes: Array<RouteConfig> = [
  {
    path: '/',
    name: `root.${RouteName.Information}`,
    element: <InformationView />,
    targetType: RouteTargetType.Internal,
    meta: {
      title: 'Information',
      description: 'Filip Rurak | Information'
    }
  },
  {
    path: '/branding',
    name: `root.${RouteName.Branding}`,
    element: <BrandingView />,
    targetType: RouteTargetType.Internal,
    meta: {
      title: 'Branding',
      description: 'Filip Rurak | Branding'
    }
  },
  {
    path: '/web-design',
    name: `root.${RouteName.WebDesign}`,
    element: <WebDesignView />,
    targetType: RouteTargetType.Internal,
    meta: {
      title: 'Web Design',
      description: 'Filip Rurak | Web Design'
    }
  },
  {
    path: '/web-development',
    name: `root.${RouteName.WebDevelopment}`,
    element: <WebDevelopmentView />,
    targetType: RouteTargetType.Internal,
    meta: {
      title: 'Web Development',
      description: 'Filip Rurak | Web Development'
    }
  },
  {
    path: '*',
    name: 'notFound',
    element: <NotFoundView />,
    targetType: RouteTargetType.Internal,
    meta: {
      title: 'Page Not Found',
      description: 'Page not found'
    }
  }
]
