import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAugQHjt6GU-th48zjiDWADB9PIXU1DHmg",
  authDomain: "otp-react-d3f60.firebaseapp.com",
  projectId: "otp-react-d3f60",
  storageBucket: "otp-react-d3f60.appspot.com",
  messagingSenderId: "20321492924",
  appId: "1:20321492924:web:40695163725cd2d98c15b9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)




// const Ape = () => {

//   const [country, setCountry] = useState('in');
//   const [num, setNum] = useState('');
//   const [opt, setOpt] = useState();
//   const [user, setUser] = useState();
//   console.log(auth.currentUser)
//   const sendOtp = async () => {
//     try {
//       let recaptchaVerifier = await new RecaptchaVerifier("recaptcha", {}, auth)
//       let confirmation = await signInWithPhoneNumber(auth, num, recaptchaVerifier);
//       console.log(confirmation)
//       setUser(confirmation)
//     } catch (err) {
//       console.log(err)
//     }
//   }
//   const verifyOtp = async () => {
//     await user.confirm(opt)
//   }

//   useEffect(() => {
//     console.log(num,)
//   }, [num]);


  // const logOut=()=>{

  // }

  // return (
  //     <div className='bg dark  align-items-center d-flex flex-column justify-content-center' style={{ "width": "100vw", "height": "100vh" }}>
  //         <input type='tel' value={num} onChange={(e) => { setNum(e.target.value) }} placeholder='enter phone number' style={{ "width": "10rem" }} />
  //         <br />
  //         <button onClick={sendOtp}>GET OTP</button>
  //         <br />
  //         <div id='recaptcha'></div>
  //         <br />
  //         <input type='number' value={opt} onChange={(e) => { setOpt(e.target.value) }} placeholder='enter otp' style={{ "width": "20rem" }} />
  //         <br />
  //         <button onClick={verifyOtp}>VERIFY  OTP</button>
  //         <br />
  //         <button>go</button>
  //     </div>
  // )
// }