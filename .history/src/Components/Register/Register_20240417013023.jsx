import { useFormik } from "formik";
import * as yup from "yup"
import notesImg from "../../images/notes1.png";
import axios from "axios";
import { useState } from "react";

export default function Register() {
  let [signUpMsg , setSignUpMsg]= useState([])
  let [signUpMsgErro , setSignUpMsg]= useState([])


  let validationSchema = yup.object({
    name: yup.string().min(3, 'min 3 chars').max(30 , 'max 30 chars').required('name is required'),
    email:yup.string().email('please enter valid email').required('email is required'),
    password:yup.string().matches(/^\w{6,15}$/,'at least 6 char').required('password is required'),
    age:yup.number().min(16,'Under Age').max(100 , 'Enter Valid age').required('age is required'),
    phone:yup.string().matches(/^(\+?)([0-9]){1,15}$/).required('phone is required')
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
    axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signUp`, values).then((res)=>{
      console.log(res)
      setSignUpMsg(res.data.msg)
    }).catch((err)=>console.log(err))

  }
  return (
    <>
    <li className="fixed-top p-3 pe-lg-5 d-lg-flex d-none mt-5  ">
    <i className="fa-regular fa-note-sticky text-info fs-2"></i>
    <p className="ps-2 fs-4 fw-bold">Notes</p>
  </li>
  <div className="container">
    <div className="row">
      <div className="col-lg-5 d-none d-lg-flex justify-content-center align-items-center">
        <img className="w-100 p-5" src={notesImg} alt="" />
      </div>

      <div className="col-lg-7">
        <div className="min-vh-100 d-flex justify-content-center align-items-center text-center signup-container">
          <div className="bg-light bg-opacity-25 shadow w-100 mx-auto  p-5 rounded-2">
            <h1 className="fw-bold">Sign Up Now</h1>
            <div className="pt-3">
              <form onSubmit={formik.handleSubmit}>
                <input
                  className="form-control my-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                />
                {formik.touched.name?<p >{formik.errors.name}</p>:''}
                <input
                  className="form-control my-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}


                />
                {formik.touched.email?<p >{formik.errors.email}</p>:''}

                <input
                  className="form-control my-2"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}


                />                
                {formik.touched.password?<p >{formik.errors.password}</p>:''}

                <input
                  className="form-control my-2"
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Enter Your Age"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                />                
                {formik.touched.age?<p>{formik.errors.age}</p>:''}

                <input
                  className="form-control my-2"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter Your Phone Number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                />               
                {formik.touched.phone?<p>{formik.errors.phone}</p>:''}

                <button
                  type="submit"
                  className="btn btn-info text-light w-100 rounded-2 mt-2"
                >
                  Sign Up
                </button>
                {signUpMsg?<p>{signUpMsg}</p>:''}
              </form>
              <p>Already Have Account ? Login</p>
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

// export default function Register() {
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
      //           <h1 className="fw-bold">Sign Up Now</h1>
      //           <div className="pt-3">
      //             <form>
      //               <input
      //                 className="form-control my-2"
      //                 type="text"
      //                 name="name"
      //                 id="name"
      //                 placeholder="Enter Your Name"
      //               />
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
      //               <input
      //                 className="form-control my-2"
      //                 type="number"
      //                 name="age"
      //                 id="age"
      //                 placeholder="Enter Your Age"
      //               />
      //               <input
      //                 className="form-control my-2"
      //                 type="text"
      //                 name="phone"
      //                 id="phone"
      //                 placeholder="Enter Your Phone Number"
      //               />
      //               <button
      //                 type="submit"
      //                 className="btn btn-info text-light w-100 rounded-2 mt-2"
      //               >
      //                 Sign Up
      //               </button>
      //             </form>
      //             <p>Already Have Account ? Login</p>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
//     </>
//   );
// }
