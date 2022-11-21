import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from '@tabler/icons';
import Button from './components/Button';

const App = () => {
  const type = 'button';
  const onClick = () => console.log('Twitter');
  return (
    <div className='bg-slate-900 grid place-content-center min-h-screen'>
      <div className='flex gap-x-2'>
        <Button {...{ type, onClick }} className={'bg-sky-600'}>
          <IconBrandTwitter className='w-5 h-5 stroke-1' />
          Twitter
        </Button>
        <Button onClick={() => console.log('Facebook')} type='button'>
          <IconBrandFacebook className='w-5 h-5 stroke-1' />
          Facebook
        </Button>
        <Button className={'bg-yellow-600'} onClick={() => console.log('Github')}>
          <IconBrandGithub className='w-5 h-5 stroke-1' />
          Github
        </Button>
      </div>
    </div>
  );
};

export default App;
