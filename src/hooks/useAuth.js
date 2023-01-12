// import database so our app understands we have firebase
// eslint-disable-next-line no-unused-vars
import { app } from 'firebase/config';
import { api } from 'api/api';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  reauthenticateWithCredential,
  EmailAuthProvider,
  deleteUser
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
        displayName: data.displayName,
        photoURL: data.photoURL
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
        sysErrMsg = 'E-mail já cadastrado. Faça seu login.';
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

  // DELETE USER = requer reautenticação
  const deleteAccount = async () => {
    checkIfIsCancelled();
    setLoading(true);

    try {
      const user = auth.currentUser;
      const userProvidedPassword = prompt('Insira sua senha para deletar sua conta');
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        userProvidedPassword
      );
      await reauthenticateWithCredential(user, credential);
      await deleteUser(user)
        .then(async () => {
          let id;
          await api.get('/authors')
            .then(res => {
              res.data.forEach(author => {
                if (author.name === user.displayName) {
                  id = author._id;
                }
              });
            });
          await api.delete(`/authors/${id}`);
          await api.delete(`/codes/byauthor/${id}`);
        });
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
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
    login,
    deleteAccount
  };
};
