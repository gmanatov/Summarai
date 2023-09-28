import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='logo' className='w-28 object-contain' />

            <button type='button' onClick={() => window.open('https://github.com/gmanatov')} className='black_btn'>GitHub</button>
        </nav>
        
        <h1 className='head_text'>Summarize Articles with AI!</h1>
        <h2 className='desc'>Save your time with Summarai by reading concise versions of articles!</h2>
    </header>
  )
}

export default Hero