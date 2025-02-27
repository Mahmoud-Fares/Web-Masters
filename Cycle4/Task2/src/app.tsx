import { Route, Routes } from 'react-router-dom';

import { RootLayout } from '@/components/layout';
import { WelcomePage } from '@/components/welcome-page';
import { ResultPage } from '@/pages/result-page';

export default function App() {
   return (
      <RootLayout>
         <Routes>
            <Route path="/" element={<WelcomePage />} />

            <Route path="/result" element={<ResultPage />} />
         </Routes>
      </RootLayout>
   );
}
