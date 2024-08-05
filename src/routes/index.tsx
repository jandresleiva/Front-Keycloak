import { Main } from '../pages';
import { Test } from '../pages/Test';
import { Users } from '../pages/Users/users';
import { ErrorBoundary } from './ErrorBoundary';
//import loginRoutes from './loginRoutes';
import ProtectedRoutes from './ProtectedRoutes';

export const routesConfig = () => [
    {
        path: '/',
        element: (
            <ProtectedRoutes>
                <Main />
            </ProtectedRoutes>
        ),
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: 'users',
                element: <Users />
            },
            {
                path: 'clients',
                element: (
                    <>
                        <h1>Clients page</h1>
                    </>
                )
            }
        ]
    },
    //...loginRoutes,
    {
        path: '/test',
        element: <Test />
    },
    {
        path: '/*',
        element: <>Page not found</>
    }
];
