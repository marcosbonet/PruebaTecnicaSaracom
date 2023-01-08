import './App.css';
import { Header } from './infrastructure/component/header';
import { ListPodcast } from './infrastructure/component/list.podcast';
import { AppRoutes } from './infrastructure/component/routes';

function App() {
    return (
        <>
            <Header>
                <AppRoutes />
            </Header>
        </>
    );
}

export default App;
