import UserContext from '../utils/UserContext';
import UserClass from './UserClass';

const About = () => {

    return(
        <div className='m-4 p-4'>
            <h1 className='my-2 text-3xl text-red-600'>About</h1>
            <div className='text-2xl flex items-center'>
                Current LoggedIn User :
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className='ml-2'>{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            {/* <UserClass name="Bhargav Talpada" location="Rajkot, Gujarat, India" contact="72039 13274" email="bhargavtalpada2004@gmail.com"   /> */}
        </div>
    )
}

export default About;