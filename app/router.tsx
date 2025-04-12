import { HashRouter, Route, Routes } from 'react-router-dom';

import LawsMenuItems from './Pages/menuItems';

import NotFound from './Components/NotFound';

export default function Router() {
    return (
        <HashRouter>
            <Routes>
                {LawsMenuItems.map(
                    ({ path, element }, index) => {
                        if (!path) {
                            return null;
                        }
                        return index === 0
                            ? <Route key={index} index={true} path={path} element={element} />
                            :
                            <Route key={index} path={`/${path}`} element={element} />;
                    })}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </HashRouter>
    );
}
