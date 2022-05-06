import React from 'react';

const Dashboard = () => {
    
    return (
        <div className='container'>
            <div className='row m-2'>
                <div className='col-md-6'>
                    <input type="text" placeholder='your name'></input>
                </div>
            </div>
            <div className='row m-2'>
                <div className='col-md-6'>
                    <input type="email" placeholder='your email'></input>
                </div>
            </div>
            <div className='row m-2'>
                <div className='col-md-6'>
                    <input type="text" placeholder='your address'></input>
                </div>
            </div>
            <div className='row m-2'>
                <div className='col-md-6'>
                    <input type="number" placeholder='your phone number'></input>
                </div>
            </div>
            <div className='row m-2'>
                <div className='col-md-6'>
                    <input type="button" value="submit"></input>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;