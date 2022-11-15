import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTwitter,
} from '@tabler/icons';
import clsx from 'clsx';

export default function App() {
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
        <Button className={'bg-black'} onClick={() => console.log('Github')}>
          <IconBrandGithub className='w-5 h-5 stroke-1' />
          Github
        </Button>
      </div>
    </div>
  );
}

function Button(props) {
  const { className = 'bg-blue-600', children, text, type = 'submit' } = props;
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded'
      )}
    >
      {text || children}
    </button>
  );
}
