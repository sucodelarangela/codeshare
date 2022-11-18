// import database so our app understands we have firebase
import { app } from 'firebase/config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth';
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cancelled, setCancelled] = useState(false); // CLEANUP

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) return;
  }

  // REGISTER NEW USER
  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.error(error.message);
      console.error(typeof error.message);

      let sysErrMsg;

      if (error.message.includes('Password')) {
        sysErrMsg = 'A senha precisa conter, pelo menos, 6 caracteres.';
      } else if (error.message.includes('email-already')) {
        sysErrMsg = 'E-mail já cadastrado.';
      } else {
        sysErrMsg = 'Ocorreu um erro. Tente novamente mais tarde.';
      }

      setLoading(false);
      setError(sysErrMsg);
    }
  };

  // LOG OUT
  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  // LOG IN
  const login = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      let sysErrMsg;

      if (error.message.includes('user-not-found')) {
        sysErrMsg = 'Usuário não encontrado.';
      } else if (error.message.includes('wrong-password')) {
        sysErrMsg = 'Senha incorreta.';
      } else {
        sysErrMsg = 'Ocorreu um erro. Tente novamente mais tarde.';
      }

      setError(sysErrMsg);
      setLoading(false);
    }
  };

  // CLEANUP
  useEffect(() => {
    setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login
  };
};
