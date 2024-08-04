import { Main } from '../pages';
import { Users } from '../pages/Users/users';
import loginRoutes from './loginRoutes';
import ProtectedRoutes from './ProtectedRoutes';

export const routesConfig = () => [
    {
        path: '/',
        element: (
            <ProtectedRoutes>
                <Main />
            </ProtectedRoutes>
        ),
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
    ...loginRoutes,
    {
        path: '/*',
        element: <>Page not found</>
    }
];
