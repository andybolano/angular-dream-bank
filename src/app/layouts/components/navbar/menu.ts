import { MenuItem } from './menu.model';

export const menu: MenuItem[] = [
    {
        id: 1,
        label: 'ACCOUNTS',
        isTitle: true
    },
    {
        id: 2,
        label: 'Account Summary',
        link: '/account-summary'
    },
    {
        id: 3,
        label: 'Accounts',
        link: 'javascript:;'
    },
    {
      id: 4,
      label: 'TRANSACTIONS',
      isTitle: true
  },
  {
      id: 5,
      label: 'Accounts Statements',
      link: 'javascript:;'
  },
]

