import { Heading } from './components/Heading';

import './styles/theme.css'
import './styles/global.css'

export function App() {
    return (
        <>
            <Heading attr={123} attr2="String">
                Olá mundo 1
            </Heading>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </>
    );
}