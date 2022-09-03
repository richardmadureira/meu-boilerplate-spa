import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from '../components/layout/footer';
import { Header } from '../components/layout/header';
import { HomePage } from './home';
import { NotFoundPage } from './not-found';

const App = (): ReactElement => {

  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='mb-auto h-10 bg-transparent flex-grow overflow-auto p-2'>
        <Routes>
          <Route path='home' element={<HomePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>

  )
}

export default App;
