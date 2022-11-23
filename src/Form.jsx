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
  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Sign Up</Card.Title>
        <Card.Body>
          <div className='mb-5 border rounded-lg p-4'>
            <p>name: {form.name || '----'}</p>
            <p>email: {form.email || '----'}</p>
          </div>
          <div className='mb-6'>
            <Label htmlFor='name' value={'Name'} />
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} name={'name'} id={'name'} />
          </div>
          <div className=''>
            <Label htmlFor='email' value={'Email'} />
            <Input value={form.email} onChange={(e) => setForm((form) => ({ ...form, email: e.target.value }))} name={'email'} id={'email'} />
          </div>
        </Card.Body>
        <Card.Footer>
          <Button className='bg-black'>
            <IconBrandGithub />
            Sign Up
          </Button>
        </Card.Footer>
      </Card>
    </PlaceContentCenter>
  );
}
