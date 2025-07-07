import React from 'react'

export default function SignIn(props) {
  return (
    <>
    <section className='bg-sign'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className='sign-heading'>
                        <h1 className='text-white'>{props.heading}<span className='d-block'> Goliath's Eye</span></h1>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className=''>
                        <div className='logo text-center'>
                            <img src="/img/logo.png" alt="" />
                        </div>
                        <div className='signIn-heading sign-col'>
                            <h1 className='text-white text-center'>Sign In</h1>
                        </div>
                        <div className='row'>
                            <div className="col-lg-12">
                            <label for="username">Username:</label><br/>
                            <input type="text" id="username" name="username"/><br/>
                            <label for="pwd">Password:</label><br/>
                            <input type="password" id="pwd" name="pwd"/>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
