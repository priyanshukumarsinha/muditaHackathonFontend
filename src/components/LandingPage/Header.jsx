import React from 'react';
import {
    Button,
    Navbar,
} from '../index.js';
import {
    poor
} from '../../assets';
import {
    FaInstagram,
    FaGithub
} from 'react-icons/fa';
import {
    CiLinkedin
} from 'react-icons/ci';

import Login from '../Login/Login.jsx';
import Signup from '../Signup/Signup.jsx';

import { logo } from '../../assets';
import { flow } from '../../assets';
import { ignore } from '../../assets';
const Header = () => {
    const [showLogin, setShowLogin] = React.useState(false);
    const [showSignup, setShowSignup] = React.useState(false);
    const [search, setSearch] = React.useState('');
    return (
        <header className='w-full bg-background relative flex flex-col justify-center items-center'>
            
            {showLogin && <Login setShowLogin={setShowLogin} search={search} setShowSignup={setShowSignup} />}
            {showSignup && <Signup setShowLogin={setShowLogin} search={search} setShowSignup={setShowSignup} />}

            <Navbar />

            <main className='h-[85%]'>
                <div className="main flex justify-between items-center px-40 py-10 h-full">
                    <div className="quote w-1/2">
                        <h1 className='text-6xl font-bold text-orange-300'>Hunger to Hope</h1>
                        <p className='text-md text-white/60 my-5'>Feed the need, clothe the cause, <span className=''>and join us in making a lasting impact.</span></p>
                        <div className="buttons flex gap-5 mt-28">
                            <Button text={'Donate'} onClick={() => { setShowLogin(true); setSearch('Organization / Company'); }} />
                            <Button text={'Login as Individual'} onClick={() => { setShowLogin(true); setSearch('Individual / Volunteer'); }} />
                            <Button text={'Login as NGO'} onClick={() => { setShowLogin(true); setSearch('NGO'); }} />
                        </div>
                        <div className="social flex gap-5 mt-10 text-orange-300 text-xl">
                            <a href="/"><FaInstagram /></a>
                            <a href="/"><CiLinkedin /></a>
                            <a href='/'><FaGithub /></a>
                        </div>
                    </div>
                    <div className="image w-1/2">
                        <img src={poor} alt="" />
                    </div>
                </div>
            </main>

            <section className='w-full bg-background text-white flex items-center py-20'>
                <div className='w-3/5 px-20'>
                    <h2 className='text-4xl font-bold mb-5 text-orange-300'>About Us</h2>
                    <p className='text-lg'>
                        We are Team Mudita, dedicated to transforming lives through our project, <strong>Hunger to Hope</strong>. Our mission is to serve as a bridge between companies or individuals with surplus resources and NGOs that support the poor and needy. Our primary focus is on addressing food insecurity, ensuring that excess food reaches those who need it the most.
                    </p>
                    <p className='text-lg mt-4'>
                        In simple terms, we take surplus resources from generous donors and distribute them to NGOs that are on the front lines of fighting hunger. By facilitating these connections, we aim to reduce waste and provide essential nourishment to vulnerable communities. Through <strong>Hunger to Hope</strong>, we strive to create a world where no one goes hungry and everyone has access to basic necessities.
                    </p>
                </div>
                <div className='w-2/5'>
                    <img src={logo} alt="Our Flow" className='w-100 h-100 object-cover' />
                </div>
            </section>

            <section className='w-full bg-background text-white flex items-center py-20'>
                <div className='w-3/5 px-20'>
                    <h2 className='text-4xl font-bold mb-5 text-orange-300'>Things not to ignore</h2>
                    <p className='text-lg'>
                        In 2019, the world wasted <strong>931 million tonnes of food while 690 million people went hungry</strong>, according to a UN report.
                    </p>
                    <p className='text-lg mt-4'>
                        Indian households waste nearly 50 kg of food per person per year, totaling <strong>69 million tonnes of food wasted in 2019.</strong>
                    </p>
                    <p className='text-lg mt-4'>
                        There is a significant disparity between the <strong>availability of surplus food and the prevalence of hunger</strong>, highlighting a severe inefficiency in resource distribution.
                    </p>
                    <p className='text-lg mt-4'>
                        Companies often burn or <strong>discard outdated stock</strong>, including food and clothing, to free up space, exacerbating the waste problem.
                    </p>
                    <p className='text-lg mt-4'>
                        Poor and needy individuals <strong>desperately require</strong> these wasted resources, creating an urgent need for a more effective redistribution system.
                    </p>
                </div>
                <div className='w-2/5'>
                    <img src={ignore} alt="Our Flow" className='w-100 h-100 object-cover' />
                </div>
            </section>

            <section className='w-full bg-background text-white flex items-center py-20'>
                <div className='px-20'>
                    <h2 className='text-4xl font-bold mb-5 text-orange-300'>Our Workflow</h2>
                    <img src={flow} alt="About Us" className="relative z-10 w-full h-full object-cover rounded-lg absolute top-3 left-3 right-3 bottom-3 border-4 border-[#E2C493] rounded-lg shadow-lg z-0" />
                    <p className='text-lg'>
                        <br>
                        </br>
                    Our "Hunger to Hope" project workflow includes user registration and login for individuals, companies, and NGOs. Each user type has a dedicated dashboard: individuals can donate items and volunteer, companies can donate, sponsor events, and earn reputation points, while NGOs can conduct events, receive donations, and manage volunteers.
                    </p>
                </div>
            </section>

            <section className='w-full bg-background text-white flex items-center py-20'>
                <div className='px-20'>
                    <h2 className='text-4xl font-bold mb-5 text-orange-300'>Past Memories</h2>
                    <img src={flow} alt="About Us" className="relative z-10 w-full h-full object-cover rounded-lg absolute top-3 left-3 right-3 bottom-3 border-4 border-[#E2C493] rounded-lg shadow-lg z-0" />
                    <p className='text-lg'>
                        <br>
                        </br>
                    Our "Hunger to Hope" project workflow includes user registration and login for individuals, companies, and NGOs. Each user type has a dedicated dashboard: individuals can donate items and volunteer, companies can donate, sponsor events, and earn reputation points, while NGOs can conduct events, receive donations, and manage volunteers.
                    </p>
                </div>
            </section>

            <section className='w-full bg-background text-white flex items-center py-20'>
                <div className='px-20'>
                    <h2 className='text-4xl font-bold mb-5 text-orange-300'>Together, we can tailor a solution to end hunger and poverty.</h2>
                    <h1 className='text-4xl font-bold mb-5 text-white-300 text-center'>TOGETHER WE GROW!!</h1>
                </div>
            </section>

        </header>
    );
}

export default Header;
