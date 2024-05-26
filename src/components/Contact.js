import UserContext from '../utils/UserContext';
import User from './User'

const Contact = () => {
    
    return(
        <div className='m-4 p-4'>
            <h1 className='my-2 text-3xl text-red-600 text-center'>Contact</h1>
            <form className='flex flex-col justify-center items-center m-3'>
                <input type='text' className='border border-black m-2 p-2 text-lg' placeholder='Enter Your Name' />
                <input type='text' className='border border-black m-2 p-2 text-lg' placeholder='Enter Your Email' />
                <input type='text' className='border border-black m-2 p-2 text-lg' placeholder='Enter Your Number' />
                <input type='text' className='border border-black m-2 p-2 text-lg' placeholder='Enter Your Message' />
                <button className='border border-green-500 bg-green-500 rounded-lg m-2 px-5 py-2 text-white text-lg'>Submit</button>
            </form>
            {/* <User name="Bhargav" location="Rajkot, Gujarat, India" contact="72039 13274" email="bhargavtalpada2004@gmail.com" /> */}
        </div>
    )
}

export default Contact;