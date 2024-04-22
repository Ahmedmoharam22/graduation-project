import { Fragment } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "../Register/register.css";
import { FaHandsClapping } from "react-icons/fa6";
function Login() {
  return (
    <Fragment>
      <Container>
        <div className="form-wrapper d-flex justify-content-between ">
          <div className="form-fields">
            <div className="form-title text-center mb-5">
              <h2 className="mb-3" style={{ color: "var(--main-color)" }}>
                {" "}
                مرحبا بعودتك <FaHandsClapping />
              </h2>
              <p className="fs-5" style={{ color: "var(--main-color)" }}>
                نحن دليلك للتعرف علي قدرات الطبيعة العلاجية .علاجك من الطبيعة .
              </p>
            </div>
            <Form>
              <Form.Group className="mb-4" controlId="formBasicName">
                <Form.Control type="text" placeholder=" الاسم" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="البريد الإلكتروني" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="كلمة المرور" />
              </Form.Group>
              <Button type="submit" className="registerButton">
                التسجيل
              </Button>
              <p className="text-center my-2">
                او <br />
                المتابعة باستخدام
              </p>
              <Form.Group
                className="mb-4  form-imgs"
                controlId="formBasicPassword"
              >
                <img
                  src="assets/Google_logo.svg.png"
                  style={{ width: "30px" }}
                  alt=""
                />
              </Form.Group>
              <Form.Group
                className="mb-4  form-imgs"
                controlId="formBasicPassword"
              >
                <img
                  src="assets/Facebook_icon.svg.png"
                  style={{ width: "30px" }}
                  alt=""
                />
              </Form.Group> 
            </Form>
          </div>
          <div className="form-image">
            <img src="assets/form-image1.png" alt="" />
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default Login;

// <Container>
// <div className="form-wrapper d-flex justify-content-between ">
//   <div className="form-fields">
//     <div className="form-title text-center mb-5">
//       <h2 className="mb-3">مرحبا بعودتك
//       <FaHandsClapping />
//       </h2>
//     </div>
//     <Form>
//       <Form.Group className="mb-4" controlId="formBasicName">
//         <Form.Control type="text" placeholder=" الاسم" />
//       </Form.Group>
//       <Form.Group className="mb-4" controlId="formBasicEmail">
//         <Form.Control type="email" placeholder="البريد الإلكتروني" />
//       </Form.Group>
//       <Form.Group className="mb-4" controlId="formBasicPassword">
//         <Form.Control type="password" placeholder="كلمة المرور" />
//       </Form.Group>
//       <Button type="submit" className="registerButton">
//         التسجيل
//       </Button>
//       {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="تذكرني"  />
//       </Form.Group> */}
//       <p className="text-center my-2">
//         او <br />
//         المتابعة باستخدام
//       </p>
//       <Form.Group
//         className="mb-4 form-imgs"
//         controlId="formBasicPassword"
//       >
//         <img
//           src="assets/Google_logo.svg.png"
//           style={{ width: "30px" }}
//           alt=""
//         />
//       </Form.Group>
//       <Form.Group
//         className="mb-4  form-imgs"
//         controlId="formBasicPassword"
//       >
//         <img
//           src="assets/Facebook_icon.svg.png"
//           style={{ width: "30px" }}
//           alt=""
//         />
//       </Form.Group>
//       لديك حساب بالفعل ؟{" "}
//       <a href="#" style={{ color: "var(--main-color)" }}>
//         تسجيل الدخول
//       </a>
//     </Form>
//   </div>
//   <div className="form-image">
//     <img src="assets/form-image1.png" alt="" />
//   </div>
// </div>
// </Container>
