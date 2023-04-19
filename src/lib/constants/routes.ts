export interface RouteInfo {
  route: string;
  routeMatch: string;
  routeName: string;
}

export const routes: RouteInfo[] = [
  { route: '/', routeMatch: '', routeName: 'Home' },
  { route: '/about', routeMatch: 'about', routeName: 'About' },
  { route: '/projects', routeMatch: 'projects', routeName: 'Projects' },
  { route: '/games', routeMatch: 'games', routeName: 'Games' },
];
