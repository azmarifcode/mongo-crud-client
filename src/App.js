import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser';
import Home from './Components/Home';
import Update from './Components/Update';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            loader: () => fetch('http://localhost:5000/users'),
        },
        {
            path: 'users/add',
            element: <AddUser />,
        },
        {
            path: '/update/:id',
            element: <Update />,
            loader: ({ params }) =>
                fetch(`http://localhost:5000/users/${params.id}`),
        },
    ]);
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
