import React from 'react';

const Contact = () => (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="contact-header"><i class="fa fa-send"></i> Contact Stephanie</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <form role="form">
                        <div class="form-group">
                            <label for="first-name">First Name</label>
                            <input type="text" class="form-control" placeholder="First Name" />
                        </div>
                        <div class="form-group">
                            <label for="last-name">Last Name</label>
                            <input type="text" class="form-control" placeholder="Last Name" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" placeholder="example@domain.com" />
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea class="form-control" rows="8">Type your message here...</textarea>
                        </div>
                        <div class="form-group">
                        <button type="submit" class="btn btn-primary"><i class="fa fa-send"></i> Send</button>
                        </div>
                    </form>
                </div>
    <div class="col-md-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d440198.1872615943!2d-97.66617828413088!3d30.463068932886646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1592521764203!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>    </div>
  </div>
</div>
);

export default Contact;