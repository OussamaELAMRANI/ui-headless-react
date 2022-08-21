import Button from './ui/Button'

function App() {

  return (
    <>
      <h1 className='text-center text-5xl my-4'>Vite + React</h1>
      <div className="card">
        <Button variant='primary'>Button text</Button>
        <Button variant='secondary'>Button text</Button>
        <Button variant='success'>Button text</Button>
        <Button variant='warning'>Button text</Button>
        <Button variant='danger'>Button text</Button>
        <Button variant='danger' pill>Button text</Button>
        <Button variant='primary' pill withIcon>
          <>
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
            Button text
          </>
          </Button>
      
      </div>
    </>
  )
}

export default App
