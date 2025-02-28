import {Suspense} from 'react'
import './i18n';
import 'src/assets/styles.css'
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
// import {WebLoading} from "shared/components/base/index.js";
import {Route, Routes} from "react-router-dom";
import {Page404} from "src/pages/index.js";
import {AppRoutes} from "src/routers/router.js";

function App() {
  const {t} = useTranslation();
  const {user} = useSelector((state) => state.auth);
  return (
    <div className="w-screen h-screen flex flex-col">
      <Suspense fallback={
        <div className={"flex h-screen items-center justify-center"}>
          {/*<WebLoading/>*/}
        </div>
      }>
        <Routes>
          <Route exact path={AppRoutes.error404.href} element={<Page404/>}/>
          <Route exact path="*" element={<Page404/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App
