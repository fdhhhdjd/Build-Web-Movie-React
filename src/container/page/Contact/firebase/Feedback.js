import React, { useState } from "react";
import "./feddback.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import firebaseDb from "../../../../utils/firebaseConfig";
import logo from "../../../../Images/logo.png";
const Feedback = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  var firebaseDB = firebaseDb.database().ref();
  const { name, email, subject, message } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Mời bạn nhập đầy đủ vào Form !!");
    } else {
      firebaseDB.child("Phản hồi ").push(state);
      setState({ name: "", email: "", subject: "", message: "" });
      toast.success("Cảm ơn bạn đã phản hồi cho tôi!");
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <section className="contact">
        <img src={logo} className="logo-feedback" alt="" />
        <div className="content">
          <h2>Customer FeedBack </h2>
        </div>
        <div className="containers">
          <ToastContainer position="top-center" />
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>Tổ 9 Thị Trấn Vạn Giã Vạn Ninh,Khánh Hòa</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-envelope-o"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@yoursite.com" id="feedback">
                    nguyentientai10@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-phone color " aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Phone:</h3>
                <p>
                  <a href="tel://0798805741" id="feedback">
                    +0798805741
                  </a>
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i class="fa fa-globe" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Facebook</h3>
                <p>
                  <a
                    href="https://www.facebook.com/profile.php?id=100006139249437"
                    id="feedback"
                    target="_blank"
                  >
                    https://www.facebook.com/profile.php?id=100006139249437
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form onSubmit={handleSubmit}>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input
                  type="text"
                  name="name"
                  required="required"
                  onChange={handleInputChange}
                  value={name}
                />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required="required"
                  onChange={handleInputChange}
                  value={email}
                />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  name="subject"
                  required="required"
                  onChange={handleInputChange}
                  value={subject}
                />
                <span>Subject</span>
              </div>
              <div className="inputBox">
                <textarea
                  name="message"
                  onChange={handleInputChange}
                  value={message}
                ></textarea>
                <span>Type Your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <div>
        <marquee
          behavior="scroll"
          style={{ fontSize: "22px" }}
          className="marquee1"
        >
          Chào mừng bạn đến với Web Movie,đây là phần phản hồi khách hàng đến
          với Nguyễn Tiến Tài,ở đây bạn có thể phản hồi bất kì khi cảm thầy mình
          chưa hài lòng để mình có thể sữa chưa cũng như khắc phục webside,mình
          sẽ trả lời những phản hồi của bạn sớm nhất,cảm ơn mọi người đã ghé
          thăm,chúc các bạn xem phim vui vẻ ,
        </marquee>
      </div>
    </>
  );
};
export default Feedback;
