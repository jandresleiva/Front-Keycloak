import { Main } from '../pages';
import { Profile } from '../pages/Main/Profile';
import { Test } from '../pages/Test';
import { Users } from '../pages/Users/users';
import { ErrorBoundary } from './ErrorBoundary';
import { NotFoundPage } from './NotFound';
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
                path: 'profile',
                element: <Profile />
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
    {
        path: '/test',
        element: <Test />
    },
    {
        path: '/*',
        element: <NotFoundPage />
    }
];
