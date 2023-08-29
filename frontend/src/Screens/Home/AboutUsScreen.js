import React from "react";
import Header from "../../Components/Header";

const AboutUsScreen = (props) => {
  return (
    <div className="Screen">
      <Header title="About Us" />
      <div className="info">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12" Style="padding : 25px">
            <h5 className="text-center">Our Vision</h5>
            <p>
              To be an independent, innovative, honest and sustainable company
              in which customers are able to choose from a wide range of Fresh
              fruits to cater to their healthy lifestyle needs at reasonable
              prices.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12" Style="padding : 25px">
            <h5 className="text-center">Our Mission</h5>
            <p>
              To satisfy our customers with a unique exprience of buying fresh
              fruits offering quality products, variety of categories, fair
              price, best service & on time delivery
            </p>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12" Style="padding : 25px">
            <h5 className="text-center">Serving At</h5>
            <ul>
              <table Style="width: 100%">
                <tr>
                  <td>
                    <li></li>
                  </td>
                  <td>Akurdi</td>
                  <td>Near Akurdi railway station </td>
                  <td className="text-center"> 10:00 to 19:00 Hrs</td>
                </tr>

                <tr>
                  <td>
                    <li></li>
                  </td>
                  <td>Hinjewadi</td>
                  <td> Near TCS</td>
                  <td className="text-center"> 09:00 to 23:00 Hrs</td>
                </tr>

                <tr>
                  <td>
                    <li></li>
                  </td>
                  <td>FC road</td>
                  <td>Near FC college</td>
                  <td className="text-center"> 09:00 to 22:00 Hrs</td>
                </tr>
              </table>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12" Style="padding : 25px">
            <h5 className="text-center">Values</h5>
            <ul>
              <li>
                To listen to the customers demands, to provide real fruits' life
                enriching vitamins information.
              </li>
              <li>To be responsible through commitment, and respect.</li>
            </ul>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
