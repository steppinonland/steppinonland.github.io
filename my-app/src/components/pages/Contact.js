import React from "react";

const Contact = () => (
  <div>
    <div className="row">
      <h3 className="contact-header"><i className="fa fa-send"></i> Contact Stephanie</h3>
  </div>
  <div className="row">
    <div className="col-md-6">
      <form>
        <div className="form-group">
          <label for="first-name">First Name</label>
          <input type="text" className="form-control" placeholder="First Name" />
        </div>
        <div className="form-group">
          <label for="last-name">Last Name</label>
          <input type="text" className="form-control" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input type="email" className="form-control" placeholder="example@domain.com" />
        </div>
        <div className="form-group">
          <label for="message">Message</label>
          <textarea className="form-control" rows="8">Type your message here...</textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary"><i className="fa fa-send"></i> Send</button>
        </div>
      </form>
    </div>
    <div className="col-md-6" />
  </div>
</div>
);

export default Contact;
