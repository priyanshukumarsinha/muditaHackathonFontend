import React from 'react'
import Navbar from '../Navbar'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
    const [showPreviousDonations, setShowPreviousDonations] = React.useState(true)
    const [showDonationForm, setShowDonationForm] = React.useState(false)
    const [showUpcomingEvents, setShowUpcomingEvents] = React.useState(false)
    const [showDonationTable, setShowDonationTable] = React.useState(false)
    const [showCreateEvents, setShowCreateEvents] = React.useState(false)
    const [showMyEvents, setShowMyEvents] = React.useState(false)

    const [isIndividual, setIsIndividual] = React.useState(false)
    const [isCompany, setIsCompany] = React.useState(true)
    const [isNGO, setIsNGO] = React.useState(true)
    
    const [previousDonations, setPreviousDonations] = React.useState([
        {
            title: 'Food Donation',
            desc: 'Donated food to the poor people in the slum area',
            date: '12-12-2021',
            image: 'https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'Food'
        },
        {
            title: 'Clothes Donation',
            desc: 'Donated clothes to the poor people in the slum area',
            date: '12-12-2021',
            image: 'https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'Clothes'
        },
        {
            title: 'Money Donation',
            desc: 'Donated money to the poor people in the slum area',
            date: '12-12-2021',
            image: 'https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'Money'
        }
    ])
    const [upcomingEvents, setUpcomingEvents] = React.useState([
        {
            title: 'Food Donation',
            desc: 'Donated food to the poor people in the slum area',
            date: '12-12-2021',
            image: 'https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'Food'
        }
    ])
    const [donationTable, setDonationTable] = React.useState([
        {
            from: 'ABC Company',
            type : 'Company',
            title: 'Food Donation',
            desc: 'Donated food to the poor people in the slum area',
            date: '12-12-2021',
            image: 'https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'Food'
        }
    ])

    const [myEvents, setMyEvents] = React.useState([
        {
            title: 'Food Donation',
            desc: 'Donated food to the poor people in the slum area',
            date: '12-12-2021',
            image: 'https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'Food',
            voluteers: 10,
            sponsors: 2,
            sponsorsList: [
                {
                    name: 'ABC Company',
                    amount: 10000,
                    logo : 'https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'XYZ Company',
                    amount: 5000,
                    logo : 'https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
            ],
        }
    ])

    const status = useSelector(state => state.auth.status);
    const userData = useSelector(state => state.auth.userData);
    const dispatch = useDispatch();

    if(!status) {
        dispatch('/')
    }

  return (
    <div className='w-full bg-background'>
        <Navbar />
        <div className="dashboard border border-white my-10 mx-4 md:mx-40 rounded-lg">
            {/* we need some components here, which will be visible only to the specific roles */}
            {/* The available Tabs are */}
                {/* 
                    1. Previous Donations (Individuals, Companies)
                    2. Danation form (Individuals, Companies)
                    3. Upcoming Events (Individuals, NGOs, Companies) // NGOs can create events // Individuals and Companies can view events
                    // Individuals can volunteer for events // Companies can sponsor events
                    4. Organization / Individual wise donations table (NGOs)
                    // NGOs can view the donations made by individuals and companies

                */}
            <div className='w-full p-5 bg-gray-300'>
                <ul className='flex flex-wrap gap-2 md:gap-5'>
                    <li 
                    onClick={() => {setShowPreviousDonations(true); setShowDonationForm(false); setShowUpcomingEvents(false); setShowDonationTable(false); setShowCreateEvents(false); setShowMyEvents(false);}}
                    className={`hover:bg-gray-400 p-2 md:p-5 rounded-t-md hover:rounded-t-xl ${showPreviousDonations? 'bg-gray-400' : 'bg-gray-300'}`}>Previous Donations</li>
                    {
                        !isNGO && (
                            <li 
                    onClick={() => {setShowPreviousDonations(false); setShowDonationForm(true); setShowUpcomingEvents(false); setShowDonationTable(false); setShowCreateEvents(false); setShowMyEvents(false);}}
                    className={`hover:bg-gray-400 p-2 md:p-5 rounded-t-md hover:rounded-t-xl ${showDonationForm? 'bg-gray-400' : 'bg-gray-300'}`}>Donation Form</li>
                        )
                    }
                    <li 
                    onClick={() => {setShowPreviousDonations(false); setShowDonationForm(false); setShowUpcomingEvents(true); setShowDonationTable(false); setShowCreateEvents(false); setShowMyEvents(false);}}
                    className={`hover:bg-gray-400 p-2 md:p-5 rounded-t-md hover:rounded-t-xl ${showUpcomingEvents? 'bg-gray-400' : 'bg-gray-300'}`}>Upcoming Events</li>
                    {
                        isNGO && (
                            <li 
                    onClick={() => {setShowPreviousDonations(false); setShowDonationForm(false); setShowUpcomingEvents(false); setShowDonationTable(true); setShowCreateEvents(false); setShowMyEvents(false);}}
                    className={`hover:bg-gray-400 p-2 md:p-5 rounded-t-md hover:rounded-t-xl ${showDonationTable? 'bg-gray-400' : 'bg-gray-300'}`}>Donation Table</li>
                        )
                    }

{
                        isNGO && (
                            <li 
                    onClick={() => {setShowPreviousDonations(false); setShowDonationForm(false); setShowUpcomingEvents(false); setShowDonationTable(false); setShowCreateEvents(true); setShowMyEvents(false);}}
                    className={`hover:bg-gray-400 p-2 md:p-5 rounded-t-md hover:rounded-t-xl ${showCreateEvents? 'bg-gray-400' : 'bg-gray-300'}`}>Create Events</li>
                        )
                    }

{
                        !isNGO && (
                            <li 
                    onClick={() => {setShowPreviousDonations(false); setShowDonationForm(false); setShowUpcomingEvents(false); setShowDonationTable(false); setShowCreateEvents(false); setShowMyEvents(true);}}
                    className={`hover:bg-gray-400 p-2 md:p-5 rounded-t-md hover:rounded-t-xl ${showMyEvents? 'bg-gray-400' : 'bg-gray-300'}`}>My Events</li>
                        )
                    }

                </ul>
                
                <div className='bg-gray-400 p-5 min-h-[90vh]'>
                {
                    showPreviousDonations && previousDonations.length === 0 && <div className='w-full h-full bg-white p-5 rounded-lg'> 
                        <h1 className='text-center text-xl font-bold'>Previous Donations</h1>
                        <p className='text-center'>You have not made any donations yet</p>
                    </div>
                }

                {
                    showPreviousDonations && previousDonations.length !== 0 && <div className='w-full h-full bg-white p-5 rounded-lg'> 
                        {/* it will appear as a blog */}
                        <div className='flex flex-col gap-5'>
                            {
                                previousDonations.map((donation, index) => {
                                    return (
                                        <div key={index} className='w-full bg-white p-3 rounded-lg flex flex-col md:flex-row gap-5'>
                                            <img src={donation.image} alt="" className='w-full md:w-40 h-40 object-cover rounded-lg'/>
                                            <div className='flex flex-col justify-between p-3'>
                                                <div>
                                                    <h1 className='text-xl font-bold'>{donation.title}</h1>
                                                    <p>{donation.desc}</p>
                                                </div>
                                                
                                                <p>{donation.date}</p>
                                                <div>
                                                    <span className='bg-gray-200 text-background p-2 rounded-md text-xs px-3'>{donation.category}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }

                {
                    showDonationForm && <div className='w-full h-full bg-white p-5 rounded-lg'> 
                        <div className='flex flex-col gap-5'>
                            <input type="text" placeholder='Title' className='border p-2 rounded-md'/>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Description' className='border p-2 rounded-md'></textarea>
                            <input type="date" placeholder='Date' className='border p-2 rounded-md'/>
                            <input type="file" placeholder='Image' className='border p-2 rounded-md'/>
                            <input type="text" placeholder='Category' className='border p-2 rounded-md'/>
                            <button className='border p-2 rounded-md bg-orange-300 text-white'>Donate</button>
                        </div>
                    </div>
                }

                {
                    showUpcomingEvents && upcomingEvents.length === 0 && <div className='w-full h-full bg-white p-5 rounded-lg'> 
                        <p className='text-center'>There are no upcoming events</p>
                    </div>
                }

                {
                    showUpcomingEvents && upcomingEvents.length !== 0 && <div className='w-full h-full bg-white p-5 rounded-lg'> 
                        <div className='flex flex-col gap-5'>
                            {
                                upcomingEvents.map((event, index) => {
                                    return (
                                        <div key={index} className='w-full bg-white p-3 rounded-lg flex flex-col md:flex-row gap-5'>
                                            <img src={event.image} alt="" className='w-full md:w-40 h-40 object-cover rounded-lg'/>
                                            <div className='flex flex-col justify-between p-3'>
                                                <div>
                                                    <h1 className='text-xl font-bold'>{event.title}</h1>
                                                    <p>{event.desc}</p>
                                                </div>
                                                
                                                <p>{event.date}</p>
                                                <div className='flex gap-5'>
                                                    <span className='bg-gray-200 text-background p-2 rounded-md text-xs px-3'>{event.category}</span>
                                                    
                                                    {
                                                        isCompany && <span className='bg-transparent text-green-600 border border-green-600 hover:bg-green-200 hover:border-none hover:text-black p-2 rounded-md text-xs px-3'>Sponsor</span>    
                                                    }
                                                    
                                                    {
                                                        isIndividual && <span className='bg-transparent text-orange-600 border border-orange-600 hover:bg-orange-200 hover:border-orange-200 hover:text-black p-2 rounded-md text-xs px-3'>Volunteer</span>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }

                {
                    showDonationTable && donationTable.length === 0 && <div className='w-full h-full bg-white p-5 rounded-lg'> 
                        <h1 className='text-center text-xl font-bold'>Donation Table</h1>
                        <p className='text-center'>No donations have been made yet</p>
                    </div>
                }

                {
                    showDonationTable && donationTable.length !== 0 && <div className='w-full h-full bg-white p-5 rounded-lg'> 
                        <div className='flex flex-col gap-5'>
                            {
                                donationTable.map((donation, index) => {
                                    return (
                                        <div key={index} className='w-full bg-white p-3 rounded-lg flex flex-col md:flex-row gap-5'>
                                            <img src={donation.image} alt="" className='w-full md:w-40 h-40 object-cover rounded-lg'/>
                                            <div className='flex flex-col justify-between p-1'>
                                                <div>
                                                    <span className={`text-background rounded-md text-xs ${isIndividual ? 'bg-orange-100' : 'bg-green-100'} p-1 px-2`}>{donation.type}/{donation.from}</span>
                                                </div>
                                                <div>
                                                    <h1 className='text-xl font-bold'>{donation.title}</h1>
                                                    <p>{donation.desc}</p>
                                                </div>
                                                
                                                <p>{donation.date}</p>
                                                <div>
                                                    <span className='bg-gray-200 text-background p-2 rounded-md text-xs px-3'>{donation.category}</span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }

                {
                    showCreateEvents && <div className='w-full h-full bg-white p-5 rounded-lg'> 
                        <div className='flex flex-col gap-5'>
                            <input type="text" placeholder='Title' className='border p-2 rounded-md'/>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Description' className='border p-2 rounded-md'></textarea>
                            <input type="date" placeholder='Date' className='border p-2 rounded-md'/>
                            <input type="file" placeholder='Image' className='border p-2 rounded-md'/>
                            <input type="text" placeholder='Category' className='border p-2 rounded-md'/>
                            <button className='border p-2 rounded-md bg-orange-300 text-white'>Create Event</button>
                        </div>
                    </div>
                }

                {
                    showMyEvents && myEvents.length === 0 && <div className='w-full h-full bg-white p-5 rounded-lg'>
                        <h1 className='text-center text-xl font-bold'>My Events</h1>
                        <p className='text-center'>You have not created any events yet</p>
                    </div>
                }

                {
                    showMyEvents && myEvents.length !== 0 && <div className='w-full h-full bg-white p-5 rounded-lg'>
                        <div className='flex flex-col gap-5'>
                            {
                                myEvents.map((event, index) => {
                                    return (
                                        <div key={index} className='w-full bg-white p-3 rounded-lg flex flex-col md:flex-row gap-5'>
                                            <img src={event.image} alt="" className='w-full md:w-40 h-40 object-cover rounded-lg'/>
                                            <div className='flex flex-col justify-between p-3'>
                                                <div>
                                                    <h1 className='text-xl font-bold'>{event.title}</h1>
                                                    <p>{event.desc}</p>
                                                </div>
                                                
                                                <p>{event.date}</p>
                                                <div className='flex gap-5'>
                                                    <span className='bg-gray-200 text-background p-2 rounded-md text-xs px-3'>{event.category}</span>
                                                    <span className='bg-transparent text-red-600 border border-red-600 hover:bg-red-200 hover:border-none hover:text-black p-2 rounded-md text-xs px-3'>Delete</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className='font-semibold'>Sponsors</span>
                                                <div className='flex gap-5 '>
                                                    {
                                                        event.sponsorsList.map((sponsor, index) => {
                                                            return (
                                                                <div key={index} className='flex gap-5'>
                                                                    <img src={sponsor.logo} alt="" className='w-full md:w-20 h-20 object-cover'/>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                
                }
            </div>
            </div>
            {/* If the user is an individual */}
                {/* They would be able to access */}
        </div>
    </div>
    )
}

export default Header