import { IconBrandGithub } from '@tabler/icons';
import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import Label from './components/Label';
import PlaceContentCenter from './components/PlaceContentCenter';

export default function Form() {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Sign Up</Card.Title>
        <form onSubmit={submit}>
          <Card.Body>
            <div className='mb-5 border rounded-lg p-4'>
              <p>name: {form.name || '----'}</p>
              <p>email: {form.email || '----'}</p>
            </div>
            <div className='mb-6'>
              <Label htmlFor='name' value={'Name'} />
              <Input value={form.name} onChange={onChange} name={'name'} id={'name'} />
            </div>
            <div className=''>
              <Label htmlFor='email' value={'Email'} />
              <Input value={form.email} onChange={onChange} name={'email'} id={'email'} />
            </div>
          </Card.Body>
          <Card.Footer>
            <Button className='bg-black'>
              <IconBrandGithub />
              Sign Up
            </Button>
          </Card.Footer>
        </form>
      </Card>
    </PlaceContentCenter>
  );
}
