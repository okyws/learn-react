import { IconBrandFacebook, IconUser } from '@tabler/icons';
import Button from './components/Button';
import Card from './components/Card';

const App = () => {
  const type = 'button';
  const onClick = () => console.log('Register');
  return (
    <div className='bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen'>
      <div className='max-w-screen-xl w-full flex gap-4'>
        <Card>
          <Card.Title>Hello React</Card.Title>
          <Card.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae suscipit corrupti expedita tenetur amet debitis iure. Maxime,
            dignissimos cumque distinctio maiores ipsum qui quas, exercitationem quae fugiat ad aut debitis.
          </Card.Body>
          <Card.Footer className=''>
            <Button {...{ type, onClick }} className='bg-indigo-500'>
              <IconUser />
              Register
            </Button>
            <h1 className='py-2'>OR</h1>
            <Button onClick={() => console.log('Facebook')} type='button'>
              <IconBrandFacebook />
              Login
            </Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Title>Hello React JS</Card.Title>
          <Card.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae suscipit corrupti expedita tenetur amet debitis iure. Maxime,
            dignissimos cumque distinctio maiores ipsum qui quas, exercitationem quae fugiat ad aut debitis.
          </Card.Body>
          <Card.Footer className=''>
            <Button {...{ type, onClick }} className='bg-indigo-500'>
              <IconUser />
              Register
            </Button>
            <h1 className='py-2'>OR</h1>
            <Button onClick={() => console.log('Facebook')} type='button'>
              <IconBrandFacebook />
              Login
            </Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Title>Hello React Native</Card.Title>
          <Card.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae suscipit corrupti expedita tenetur amet debitis iure. Maxime,
            dignissimos cumque distinctio maiores ipsum qui quas, exercitationem quae fugiat ad aut debitis.
          </Card.Body>
          <Card.Footer className=''>
            <Button {...{ type, onClick }} className='bg-indigo-500'>
              <IconUser />
              Register
            </Button>
            <h1 className='py-2'>OR</h1>
            <Button onClick={() => console.log('Facebook')} type='button'>
              <IconBrandFacebook />
              Login
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default App;
