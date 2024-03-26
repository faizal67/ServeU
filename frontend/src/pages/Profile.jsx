import React from 'react'
import ProfileCard from '../components/profile/ProfileCard'
import ProfileButton from '../components/profile/ProfileButton'
import profilePic from '../assets/images/userProfile.png'

const Profile = ({ user }) => {

    const profileImg = user.image || profilePic
    return (
        <div className='flex flex-row'>
            <div className=' flex flex-col' >
                <ProfileCard user={user} className='border-2 border-green-800' />
                <ul className='pt-1 pl-4 gap-1 flex flex-col'>
                    <li className="hover:bg-slate-100 bg-slate-200 p-2 pl-3 font-bold rounded-md">Your Account</li>
                    <li className="hover:bg-slate-100 p-2 pl-3">Login & Security</li>
                    <li className="hover:bg-slate-100 p-2 pl-3">Message Preference</li>
                    <li className="hover:bg-slate-100 p-2 pl-3">Privacy Setting</li>
                </ul>
                <hr />
                <ul className='pt-1 pl-4 gap-1 flex flex-col'>
                    <h1 className='font-bold p-4'>Personal</h1>
                    <li className="hover:bg-slate-100 p-2 pl-3">Peoples</li>
                    <li className="hover:bg-slate-100 p-2 pl-3">Billing & Plans</li>
                    <li className="hover:bg-slate-100 p-2 pl-3">History</li>
                </ul>
            </div>
            <div className='p-3 pl-5 w-2/4'>
                <h1 className='font-extrabold text-lg pt-2 mb-6'>Your Account</h1>
                <div>
                    <p className='font-bold text-sm'>Profile Photo</p>
                    <div className='flex flex-row  mt-2  justify-between items-center mb-5'>
                        <div className=' w-20 h-20 items-center flex justify-center'><img src={profileImg} className='rounded-full ' ></img></div>
                        <div>
                        <ProfileButton tailwind={'mr-5 '} text={'Remove Photo'}/>
                        <ProfileButton text={'Change Photo'}/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='my-4'>
                    <p className='font-bold text-sm'>Name</p>
                    <div className='flex flex-row  mt-2  justify-between items-center'>
                        <p className='text-sm '>{user.displayName}</p>
                        <ProfileButton text={'Edit'} />
                    </div>
                </div>
                <hr />
                <div className='my-4'>
                    <p className='font-bold text-sm'>Email address</p>
                    <div className='flex flex-row  mt-2  justify-between items-center'>
                        <p className='text-sm '>{user.email}</p>
                        <ProfileButton text={'Edit'} />
                    </div>
                </div>
                <hr />
                <div className='my-4'>
                    <p className='font-bold text-sm'>Mobile No.</p>
                    <div className='flex flex-row  mt-2  justify-between items-center'>
                        <p className='text-sm '>{user.mobile}</p>
                        <ProfileButton text={'Edit'} />
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Profile
