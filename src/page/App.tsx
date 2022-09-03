import { ReactElement } from 'react';
import { Footer } from '../components/layout/footer';
import { Header } from '../components/layout/header';
import { HomePage } from './HomePage';

const App = (): ReactElement => {

  return (
    <div className='flex flex-col h-screen'>
      <Header/>
      <main className='mb-auto h-10 bg-transparent flex-grow overflow-auto p-2'>
        <HomePage/>
      </main>
      <Footer/>
    </div>

  )
}

export default App;
