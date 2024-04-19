import { useFormik } from "formik";
import * as u
import notesImg from "../../images/notes1.png";

export default function Register() {
  let formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      age:'',
      phone:''

    },
    onSubmit:submit
  })
  function submit(){

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
              <form>
                <input
                  className="form-control my-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  onChange={formik.handleChange}
                />
                <input
                  className="form-control my-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  onChange={formik.handleChange}

                />

                <input
                  className="form-control my-2"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  onChange={formik.handleChange}

                />
                <input
                  className="form-control my-2"
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Enter Your Age"
                />
                <input
                  className="form-control my-2"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter Your Phone Number"
                  onChange={formik.handleChange}

                />
                <button
                  type="submit"
                  className="btn btn-info text-light w-100 rounded-2 mt-2"
                >
                  Sign Up
                </button>
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
