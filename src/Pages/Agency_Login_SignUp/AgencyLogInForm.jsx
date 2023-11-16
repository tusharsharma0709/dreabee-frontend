import React, { useEffect, useState } from 'react'
import logo from '../../Imagez/Common/logo.png'
import trapBox from '../../Imagez/signIn_LogIn/Login_pattern2.png'

import FadeLoader from "react-spinners/FadeLoader";
import SignUpHead from '../Brands_Login_SignUp/SignUp/SignUpHead';
import AgencyLogIn from './AgencyLogIn';
const AgencyLogInForm = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <>
      <div className='conatiner-fluid'>
        {
          loading ? (
            <section className='' style={{ "height": "100vh", "width": "100vw", "background": "black" }} >
              <div className=' d-flex justify-content-center align-items-center  h-100'>

                <FadeLoader
                  color={"aqua"}
                  loading={loading}
                  // cssOverride={override}
                  size={50}
                // aria-label="Loading Spinner"
                // data-testid="loader"
                />

              </div>
            </section>
          ) : (



            <div className='bgLogIn' style={{ "height": "", "backgroundColor": "", "zIndex": "-5" }}>
              <div className='row '>
                <div className='col-lg-12 text-center mt-' style={{ "marginTop": "" }}>


                  <section className='row  d-flex justify-content-center'>





                    <section className='col-lg-6 ps-5'>
                
                      <div className='ps-5'
                      //  style={{ border: "1px solid blACK" }}
                      >



                        {/* LOgo  */}
                        <div className='col-lg-12 mb-4 pt-4 bg-'>
                          <img src={logo} alt='hehe' style={{ "width": "136px", }} />
                        </div>
                        <h4 style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px" }}>Welcome Back , Lets get in ..</h4>



                        <section className='row d-flex justify-content-center'>
                          <section className='col-lg-9 '>
                            <div className='py-3' style={{ border: "" }}>

                              <section >
                                <AgencyLogIn />
                              </section>




                            </div>
                          </section>
                        </section>















                      </div>

                    </section>



                    <section className='col-lg-6 bg-'>
                      <div className='p'
                      //  style={{ border: "1px solid blACK" }}
                      >


                        |<section className='row bg-'>
                          <div className='col-lg-12 mb bg-' >
                            <SignUpHead />
                          </div>
                        </section>




                        <section className='row d-flex justify-content-center'>
                          <section className='col-lg-12 text-center bg-inf'>
                            <div className='py-3' style={{ border: "" }}>


                              <section >
                                <img src={trapBox} alt='trapBox' style={{ "width": "38rem" }} />
                              </section>




                            </div>
                          </section>
                        </section>















                      </div>
                    </section>









                  </section>


                </div>
              </div>














            </div>
          )}
      </div>
    </>
  )
}

export default AgencyLogInForm
