import Main from "../components/Main";
import Redux from "../components/Redux";
import Routing from "../components/Routing";
import SaSS from '../components/SaSS';

//* NavPaths builds the side bar based off of the components being imported in.  These are passed as props into the Navbar component where the links are set.

const navPath = [
    {
        component: <Main />,
        path: 'Main'
    },
    {
        component: <SaSS />,
        path: 'SaSS'
    },
    {
        component: <Redux />,
        path: 'Redux'
    },
    {
        component: <Routing />,
        path: 'Routing'
    },

];

export default navPath;