import React from 'react'
import Navbar from '../Navbar'

const Header = () => {
    const [showPreviousDonations, setShowPreviousDonations] = React.useState(true)
    const [showDonationForm, setShowDonationForm] = React.useState(false)
    const [showUpcomingEvents, setShowUpcomingEvents] = React.useState(false)
    const [showDonationTable, setShowDonationTable] = React.useState(false)

  return (
    <div className='w-full bg-background'>
        <Navbar />
        <div className="dashboard border border-white my-10 mx-40 rounded-lg">
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
                <ul className='flex gap-5'>
                    <li 
                    onClick={() => {setShowPreviousDonations(true); setShowDonationForm(false); setShowUpcomingEvents(false); setShowDonationTable(false)}}
                    className={` hover:bg-gray-400 p-5 rounded-t-md hover:rounded-t-xl ${showPreviousDonations? 'bg-gray-400' : 'bg-gray-300'}`}>Previous Donations</li>
                    <li 
                    onClick={() => {setShowPreviousDonations(false); setShowDonationForm(true); setShowUpcomingEvents(false); setShowDonationTable(false)}}
                    className={` hover:bg-gray-400 p-5 rounded-t-md hover:rounded-t-xl ${showDonationForm? 'bg-gray-400' : 'bg-gray-300'}`}>Donation Form</li>
                    <li 
                    onClick={() => {setShowPreviousDonations(false); setShowDonationForm(false); setShowUpcomingEvents(true); setShowDonationTable(false)}}
                    className={` hover:bg-gray-400 p-5 rounded-t-md hover:rounded-t-xl ${showUpcomingEvents? 'bg-gray-400' : 'bg-gray-300'}`}>Upcoming Events</li>
                    <li 
                    onClick={() => {setShowPreviousDonations(false); setShowDonationForm(false); setShowUpcomingEvents(false); setShowDonationTable(true)}}
                    className={` hover:bg-gray-400 p-5 rounded-t-md hover:rounded-t-xl ${showDonationTable? 'bg-gray-400' : 'bg-gray-300'}`}>Donation Table</li>
                </ul>
                <div className='bg-gray-400 p-5 h-screen'>
                    {
                        showPreviousDonations && <div className='w-full h-full bg-white p-5 rounded-lg'> 
                            <h1 className='text-center text-xl font-bold'>Previous Donations</h1>
                            <p className='text-center'>You have not made any donations yet</p>
                        </div>
                    }

                    {
                        showDonationForm && <div className='w-full h-full bg-white p-5 rounded-lg'> 
                            <h1 className='text-center text-xl font-bold'>Donation Form</h1>
                            <p className='text-center'>You can donate here</p>
                        </div>
                    }

                    {
                        showUpcomingEvents && <div className='w-full h-full bg-white p-5 rounded-lg'> 
                            <h1 className='text-center text-xl font-bold'>Upcoming Events</h1>
                            <p className='text-center'>There are no upcoming events</p>
                        </div>
                    }

                    {
                        showDonationTable && <div className='w-full h-full bg-white p-5 rounded-lg'> 
                            <h1 className='text-center text-xl font-bold'>Donation Table</h1>
                            <p className='text-center'>No donations have been made yet</p>
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