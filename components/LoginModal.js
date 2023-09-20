import React from 'react';
import Modal from 'react-modal';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

Modal.setAppElement('#__next'); // Setting the root element for the modal

const LoginModal = ({ isOpen, onRequestClose }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogin = () => {
    signIn('credentials', { callbackUrl: '/Login' });
    router.push('/login');
  };

  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-content">
        <h2>Only Authenticated Users can use drag and drop function</h2>
        <button onClick={handleLogin} className='bg-black text-white rounded-lg py-1 px-2 mt-3'>Login</button>
        </div>
    </div>
  );
};

export default LoginModal;