import React from "react";

import Header from "../../Components/Header";

const ContactUsScreen = (props) => {
  return (
    <div className="Screen">
      <Header title="Contact Us" />

      <div className="row">
        <div className="col-md-6 col-sm-12 col-xs-12 Block">
          <h5 className="text-center">Reach out to us here</h5>
          <hr />
          <div className="col-md-12 col-sm-12 col-xs-12 ">
            <div className="row" Style="padding: 5px;">
              <div
                className="col-md-4 col-sm-12 col-xs-12 Block"
                Style="padding: 15px;"
              >
                <strong className="fs-5">Pratiksha Deshmukh</strong>
                <br />
                <label className="fs-7">Store Manager</label>
                <br />
                <label className="fs-7">prats@gmail.com</label>
              </div>
              <div
                className="col-md-4 col-sm-12 col-xs-12 Block"
                Style="padding: 15px;"
              >
                <strong className="fs-7">IACSD</strong>
                <br />
                <label className="fs-7">Akurdi - 416012</label>
                <br />
                <label className="fs-7">Maharashtra | India</label>
              </div>
              <div
                className="col-md-4 col-sm-12 col-xs-12"
                Style="padding: 15px;"
              >
                <strong className="fs-5"> Contact </strong>
                <br />
                <label className="fs-7">123445667</label>
                <br />
                <label className="fs-7"> 0231-22651311 </label>
              </div>
            </div>
            <hr />
            <div className="row" Style="padding: 5px;">
              <div
                className="col-md-4 col-sm-12 col-xs-12 Block"
                Style="padding: 15px;"
              >
                <strong className="fs-5">Shivanee Mande</strong>
                <br />
                <label className="fs-7">Store Manager</label>
                <br />
                <label className="fs-7">shivanee@gmail.com</label>
              </div>
              <div
                className="col-md-4 col-sm-12 col-xs-12 Block"
                Style="padding: 15px;"
              >
                <strong className="fs-7">IACSD</strong>
                <br />
                <label className="fs-7">Akurdi-411035</label>
                <br />
                <label className="fs-7">Maharashtra | India</label>
              </div>
              <div
                className="col-md-4 col-sm-12 col-xs-12"
                Style="padding: 15px;"
              >
                <strong className="fs-5"> Contact </strong>
                <br />
                <label className="fs-7"> 568934569 </label>
                <br />
                <label className="fs-7"> 0233-2651311 </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12">
          <h5 className="text-center">Let us get back to you</h5>
          <hr />
          <div>
            <br />
            <br />

            <form
              action="https://formspree.io/f/xyyqwkde"
              method="POST"
              enctype="text/plain"
            >
              <div className="mb-3" Style="padding:5px">
                <h6>Name</h6>
                <input
                  type="text"
                  name="nm"
                  placeholder="Your name"
                  class="form-control"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3" Style="padding:5px">
                <h6>Email</h6>
                <input
                  type="email"
                  name="em"
                  placeholder="you@gmail.com"
                  class="form-control"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3" Style="padding:5px">
                <h6>Contact</h6>
                <input
                  type="number"
                  name="phn"
                  placeholder="Your mobile"
                  class="form-control"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3" Style="padding:5px">
                <h6>What would you like to know?</h6>
                <textarea
                  rows="3"
                  type="text"
                  name="message"
                  class="form-control"
                  placeholder="you opinion matters to us"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3 text-center">
                <button type="submit" className="btn btn-outline-success">
                  Send
                </button>
                &nbsp; &nbsp;
                <button
                  type="reset"
                  id="resetbtn"
                  class="btn btn-outline-primary"
                >
                  reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsScreen;
