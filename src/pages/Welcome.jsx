import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import ContentFooter from '../components/ContentFooter';
import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

import welcome from '../assets/welcome.svg';
import Button from '../components/Button';
import Main from '../components/Main';

import { auth, provider } from '../firebase/config';
import { signInWithRedirect, getRedirectResult } from 'firebase/auth';

const Welcome = () => {
  // const navigation = useNavigate();

  const handleClickButton = () => {
    signInWithRedirect(auth, provider);
    // navigation('/end-register');
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then(result => {
        localStorage.setItem(
          'user',
          JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            userPhoto: result.user.photoURL
          })
        );
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header login="true" />
      <Main>
        <ContentNavigation />

        <ContentHeader
          title="Prove o que sabe com o DevQuiz! 🧠"
          subtitle="Te garanto que tu vai gostar de jogar hehe"
        />

        <ContentMain>
          <div className="flex">
            <img src={welcome} className="w-full sm:max-w-[37.5rem]" />
          </div>
        </ContentMain>

        <ContentFooter double="true">
          <Button
            icon="google"
            style="light"
            text="Continuar com Google"
            handleSubmit={handleClickButton}
          />
          <Button style="light" text="Já tenho uma conta" navigation="/login" />
          <Button
            style="dark"
            text="Bora cadastrar"
            icon="true"
            navigation="/register"
          />
        </ContentFooter>
      </Main>
      <Footer />
    </>
  );
};

export default Welcome;
