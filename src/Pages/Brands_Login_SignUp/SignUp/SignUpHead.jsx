import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUpHead = () => {
    const navigate = useNavigate();
    const home = () => {
        navigate("/LandingPage")
    }
    
    const ToSignUp=()=>{
        navigate("/Login")
    }
    return (
        <>
            
                <div className='row bg- d-flex justify-content-end' style={{
                    "height": "80px",
                    //  "position": "fixed",
                    "top": "",
                    "width": "100%",
                    "zIndex": "5"}}>
                   

                    <div className='col-md-3 mx-4 my-auto  inviBtnz py-2' onClick={home} style={{ "fontSize": "15px", "fontWeight": "600", "color": "#FFFFFF", "cursor": "pointer" , border :"1px solid rgba(128, 128, 128, 0.303)" }}>Home</div>
                    <div className='col-md-3 mx my-auto  inviBtnz py-2 ' onClick={ToSignUp} style={{ "fontSize": "15px", "fontWeight": "600", "color": "#FFFFFF", "cursor": "pointer" , border :"1px solid rgba(128, 128, 128, 0.303)" }}>Campaigns</div>
                    <div className='col-md-1  '></div>


                    {/* <div className='col-md  my-auto text-center' style={{ "fontSize": "15px", "fontWeight": "600", "color": "#FFFFFF", "cursor": "pointer" }}>About</div> */}
                    {/* <div className='col-md  my-auto text-center' style={{ "fontSize": "15px", "fontWeight": "600", "color": "#FFFFFF", "cursor": "pointer" }}><i className=" text-light fa-lg fa-sharp fa-solid fa-magnifying-glass"></i></div> */}
                </div>
          
        </>
    )
}

export default SignUpHead


