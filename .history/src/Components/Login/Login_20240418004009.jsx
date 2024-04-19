import axios from "axios";
import * as yup from "yup"
import notesImg from "../../images/notes1.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let [loginMsg , setLoginMsg]= useState([])
  let [loginMsgError , setLoginMsgError]= useState([])
  const navigate = useNavigate()


  let validationSchema = yup.object({
    email:yup.string().email('please enter valid email').required('email is required'),
    password:yup.string().matches(/^\w{6,15}$/,'at least 6 char').required('password is required'),
    
  })

  let formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      age:'',
      phone:''

    },
    validationSchema,
    onSubmit:signUp
  })
  function signUp(values){
    console.log(values)
    axios.post(`https://note-sigma-black.vercel.app/api/v1/users/login`, values).then((res)=>{
      console.log(res)
      setSignUpMsg(res.data.msg)
      navigate('./login')
    }).catch((err)=>{
      console.log(err)
      setSignUpMsgError(err.response.data.msg)
    })

  }

  function clearMsg(){
    setSignUpMsg('')
    setSignUpMsgError('')
  }

  return (
    <>
      <li className="fixed-top p-3 pe-lg-5 d-lg-flex d-none mt-5  ">
        <i className="fa-regular fa-note-sticky text-info fs-2"></i>
        <p className="ps-2 fs-4 fw-bold ">Notes</p>
      </li>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 d-none d-lg-flex justify-content-center align-items-center">
            <img className="w-100 p-5" src={notesImg} alt="" />
          </div>

          <div className="col-lg-7">
            <div className="min-vh-100 d-flex justify-content-center align-items-center text-center signup-container">
              <div className="bg-light bg-opacity-25 shadow w-100 mx-auto  p-5 rounded-2">
                <h1 className="fw-bold">Sign In Now</h1>
                <div className="pt-3">
                  <form>
                    <input
                      className="form-control my-2"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Your Email"
                    />

                    <input
                      className="form-control my-2"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Your Password"
                    />

                    <button
                      type="submit"
                      className="btn btn-info text-light w-100 rounded-2 mt-2"
                    >
                      Login
                    </button>
                  </form>
                  <p>Don't Have Account ? Register Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import notesImg from "../../images/notes1.png";

// export default function Login() {
//   return (
//     <>
// <li className="fixed-top p-3 pe-lg-5 d-lg-flex d-none  ">
//   <i className="fa-regular fa-note-sticky text-info fs-2"></i>
//   <p className="ps-2 fs-4 fw-bold">Notes</p>
// </li>
// <div className="container">
//   <div className="row">
//     <div className="col-lg-5 d-none d-lg-flex justify-content-center align-items-center">
//       <img className="w-100 p-5" src={notesImg} alt="" />
//     </div>

//     <div className="col-lg-7">
//       <div className="min-vh-100 d-flex justify-content-center align-items-center text-center signup-container">
//         <div className="bg-light bg-opacity-25 shadow w-100 mx-auto  p-5 rounded-2">
//           <h1 className="fw-bold">Sign In Now</h1>
//           <div className="pt-3">
//             <form>
//               <input
//                 className="form-control my-2"
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Enter Your Email"
//               />

//               <input
//                 className="form-control my-2"
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Enter Your Password"
//               />

//               <button
//                 type="submit"
//                 className="btn btn-info text-light w-100 rounded-2 mt-2"
//               >
//                 Login
//               </button>
//             </form>
//             <p>Don't Have Account ? Register Now</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//     </>
//   );
// }
