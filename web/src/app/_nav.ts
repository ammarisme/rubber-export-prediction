import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Forecast',
    url: '/forecast',
    icon: 'icon-speedometer',
    children: [
      {
        name: 'Forecast',
        url: '/forecast/forecast',
        icon: 'icon-puzzle'
      },
      {
        name: 'Adjust',
        url: '/forecast/forecast-adjust',
        icon: 'icon-speedometer'
      },
      {
        name: 'Explore',
        url: '/forecast/forecast-explore',
        icon: 'icon-speedometer'
      }
      ]
  },
  {
    name: 'Prospects',
    url: '/optimize',
    icon: 'icon-speedometer'
  },
  {
    name: 'Regions',
    url: '/forecast/forecast-adjust',
    icon: 'icon-speedometer'
  }
];
