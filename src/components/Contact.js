import React from "react";
import "../css/main.css";
import * as emailjs from "emailjs-com";

class Contact extends React.Component {
  state = {
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
    sendState: 0
  };
  componentDidMount() {
    emailjs.init("user_P8ZXcuklMOiTuvBMjPGQ5");
  }
  handleTextChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };
  submitEmail = () => {
    this.setState({
      sendState: 1
    });
    const template = this.state;

    emailjs.send("gmail", "contact_form", template).then(response => {
      // console.log(response);
      this.setState({ sendState: 2 });
    });
  };

  emailState = () => {
    if (this.state.sendState === 0) {
      return (
        <form className="contactforms" onSubmit={this.submitEmail}>
          <div className="rows">
            <div className="row">
              <p className="formtitle">
                NAME<i className="required">*</i>
              </p>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleTextChange}
                placeholder="John Doe"
                required
              />
              <p className="formtitle">
                PHONE<i className="required">*</i>
              </p>
              <input
                type="number"
                name="phone"
                value={this.state.phone}
                onChange={this.handleTextChange}
                placeholder="1234567890"
                required
              />
            </div>
            <div className="row">
              <p className="formtitle">
                EMAIL<i className="required">*</i>
              </p>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleTextChange}
                placeholder="John.Doe@gmail.com"
                required
              />

              <p className="formtitle">SUBJECT</p>
              <input
                type="text"
                name="subject"
                value={this.state.subject}
                onChange={this.handleTextChange}
                placeholder="Product Information"
              />
            </div>
          </div>
          <p className="formtitle">
            MESSAGE<i className="required">*</i>
          </p>
          <textarea
            type="text"
            name="message"
            className="messagefield"
            value={this.state.message}
            onChange={this.handleTextChange}
            required
          />
          <button className="button">SEND</button>
        </form>
      );
    } else if (this.state.sendState === 1) {
      return (
        <div className="contactforms sent">
          <div className="preloader" />
        </div>
      );
    } else {
      return (
        <div className="contactforms sent">
          <div>Message has been sent!</div>
        </div>
      );
    }
  };

  renderNum = num => {
    let oldArr = num.split("");
    let newArr = [];
    if (oldArr[0] === "1" && oldArr.length > 10) {
      newArr.push(oldArr[0]);
      newArr.push(oldArr.slice(1, 4).join(""));
      newArr.push(oldArr.slice(4, 7).join(""));
      newArr.push(oldArr.slice(7, oldArr.length).join(""));
      return newArr.join(" ");
    } else if (oldArr.length === 10) {
      newArr.push(oldArr.slice(0, 3).join(""));
      newArr.push(oldArr.slice(3, 6).join(""));
      newArr.push(oldArr.slice(6, oldArr.length).join(""));
      return newArr.join(" ");
    } else {
      return "Please enter valid phone number";
    }
  };

  render() {
    return (
      <div
        className={this.props.open ? "contact" : "contact inactive"}
        id="contactwindow"
      >
        <div className="container">
          <div className="left">
            <div className="logo" />
            <h2>We're always here to help! Lets chat!</h2>
            {this.emailState()}
          </div>
          <div className="divLine" />
          <div className="right">
            <p className="title">EMAIL</p>
            <p>{this.props.data.primary_email}</p>
            <p>{this.props.data.secondary_email}</p>
            <p className="title">FAX</p>
            <p>
              {this.renderNum(this.props.data.fax_number)}
            </p>
            <p className="title">PHONE</p>
            <p>
              {`${this.renderNum(this.props.data.us_phone_number)} (US)`}
            </p>
            <p>
              {`${this.renderNum(
                  this.props.data.canada_phone_number
                )} (Canada)`}
            </p>
            <p className="title">ADDRESSES</p>
            <p>{`${this.props.data.us_address} (US)`}</p>
            <p>
              {`${this.props.data.canada_address} (Canada)`}
            </p>
          </div>
          <div id="close-contact" onClick={this.props.contact} />
        </div>
      </div>
    );
  }
}

export default Contact;
