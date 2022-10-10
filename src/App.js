// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import QuizInfo from './components/QuizInfo/QuizInfo';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: ([
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => fetch(`https://openapi.programming-hero.com/api/quiz`)

        },
        {
          path: '/topics',
          element: <Topics></Topics>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quiz/:Id',
          element: <QuizInfo></QuizInfo>,
          loader: async ({ params }) => {
            console.log(params)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.Id}`)
          }
        }
      ])
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
