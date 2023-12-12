import { useEffect, useState } from 'react';

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
import { signInWithPopup } from 'firebase/auth';

const Welcome = () => {
  const [user, setUser] = useState({});

  const handleClickButton = () => {
    signInWithPopup(auth, provider)
      .then(data => {
        setUser({
          name: data.user.displayName,
          email: data.user.email,
          userPhoto: data.user.photoURL
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

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
