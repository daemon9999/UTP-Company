import { createBrowserRouter } from "react-router-dom"
import Home from "src/pages/home"
import MainLayout from "src/pages/main-layout"
import Team from "src/pages/team"
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'team',
                element: <Team/>
            }
        ]
    }
])

export default appRouter