import React, { Suspense, lazy } from 'react';

//Стили
import './style/mainStyle.scss';
import { Wrapper } from './style/style';
//

//pages
import Header from './loyout/header/header';
import Footer from './loyout/footer/footer';
const Main = lazy(() => import('./pages/main/main.jsx'));
//

export default function App(){
    return(
        <Wrapper>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Main />
            </Suspense>
            <Footer />
        </Wrapper>
    );
}