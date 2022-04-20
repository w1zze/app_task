
import { Routes, Route } from 'react-router-dom';

import { Layout } from '../pages/Layout/Layout';
import { About_me } from '../pages/About_me/About_me';
import { Task } from '../pages/Task/Task';
import { NotFound } from '../pages/NotFound/NotFound';


const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<About_me />} />
                    <Route path='task' element={<Task />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;