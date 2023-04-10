import React, { useState } from 'react';
import { Button } from '@ui/buttons';
import { Input } from '@ui/input';
import { axiosInstance } from 'src/config/axiosInstance';
import { setAccessToken } from 'src/contexts/useAuthStore';

const Login = () => {
  const [value, setValue] = useState({ email: '', password: '' });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post(
        'auth/signin',
        {
          email: 'agba@gmail.com',
          password: 'ade123',
        },
        { withCredentials: true }
      );
      setAccessToken(data.accessToken);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto flex min-h-screen items-center justify-center">
        <form
          className="w-96 max-w-full space-y-4 rounded bg-gray-500 p-8 px-10"
          onSubmit={handleSubmit}
        >
          <Input
            name="email"
            onChange={handleChange}
            placeholder="email"
            value={value.email}
          />
          <Input
            name="password"
            onChange={handleChange}
            placeholder="password"
            value={value.password}
          />
          <Button block>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
