import React, { Component } from 'react';

import './Contact.css';

import Menu from '../components/Menu';
import Navbar from '../components/Navbar';

/**
 * Component: Contact.Main
 */
class Main extends Component
{
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <h1 className="mb-1">Contact Us</h1>
            <p className="mb-1">Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible.</p>
            <form name="sentMessage" id="contactForm">
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Your Name</label>
                  <input type="text" className="form-control" placeholder="Your Name" id="name" required />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Email Address</label>
                  <input type="email" className="form-control" placeholder="Email Address" id="email" required />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Phone Number</label>
                  <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Message</label>
                  <textarea rows="5" className="form-control" placeholder="Message" id="message" required></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <div className="form-group">
                <button type="submit" className="btn btn-secondary" id="sendMessageButton">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Component: Contact.Page
 */
class Page extends Component
{
  render() {
    return (
      <div>
        <Navbar/>
        <div class="d-flex">
          <Menu/>
          <div class="content p-4">
            <Main/>
          </div>
        </div>
      </div>
    );
  }
}

const Contact = {Main, Page};

export default Contact;
