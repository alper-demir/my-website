import CardProfile from './components/pages/CardProfile'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Skills from './components/pages/Skills'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import CommunicationPortal from './components/projects/CommunicationPortal'
import InstagramClone from './components/projects/InstagramClone'
import RecipeApp from './components/projects/RecipeApp'
import ImageScaling from './components/projects/ImageScaling'
import ValorantAPI from './components/projects/ValorantAPI';
import WeatherApp from './components/projects/WeatherApp';
import Mp3Player from './components/projects/Mp3Player';
import ColorChangerReact from './components/projects/ColorChangerReact'
import ColorChangerVanilla from './components/projects/ColorChangerVanilla'
import Gallery from './components/pages/Gallery';
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <CardProfile /> },
        { path: '/home', element: <CardProfile /> },
        { path: '/skills', element: <Skills /> },
        {
          path: '/projects',
          element: <Projects />,
          children: [
            { path: 'communication-portal', element: <CommunicationPortal /> },
            { path: 'instagram-clone', element: <InstagramClone /> },
            { path: 'recipe-app', element: <RecipeApp /> },
            { path: 'image-scaling', element: <ImageScaling /> },
            { path: 'valorant-api', element: <ValorantAPI /> },
            { path: 'weather-app', element: <WeatherApp /> },
            { path: 'mp3-player', element: <Mp3Player /> },
            { path: 'color-changer-react', element: <ColorChangerReact /> },
            { path: 'color-changer-vanillajs', element: <ColorChangerVanilla /> },
          ]
        },
        { path: '/about', element: <About /> },
        { path: '/gallery', element: <Gallery /> },
      ]
    }
  ])

  return (

    <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
