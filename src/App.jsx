import Header from './components/Header'
import TitleAnamnese from './components/TitleAnamnese'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import ButtonSubmit from './components/ButtonSubmit'


function App() {
  return (
    <>
      <div className='bg-slate-900'>
        <Header/>
        <div className='py-14 px-44'>
          <TitleAnamnese/>
          <div className='flex flex-row gap-6'>
            <div>
              <Sidebar />
            </div>
            <div>
              <Content />
            </div>
          </div>
            <ButtonSubmit />

          
        </div>
        
      </div>
    </>
  )
}

export default App
