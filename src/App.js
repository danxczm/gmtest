import { Navigate, Route, Routes } from 'react-router';
// import Layout from './components/Layout';
import Items from './components/Items';
import ItemDetails from './components/ItemDetails';

function App() {
    return (
        <Routes>
            {/* <Route path="/" element={<Layout />}> */}
            <Route path="/" element={<Items />} />
            <Route path=":id" element={<ItemDetails />} />

            <Route path="*" element={<Navigate to="/" replace />} />
            {/* </Route> */}
        </Routes>
    );
}

export default App;
