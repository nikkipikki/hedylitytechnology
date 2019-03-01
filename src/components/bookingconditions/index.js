import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
import Contactbutton from "../contactbutton"
import ScrollToTopOnMount from "../scrolltotoponmount"
import Tellmemorebutton from "../tellmemorebutton"
import Kotlin from "../kotlin"




class Bookingconditions extends React.Component {
  render() {
    return (
      <div className="fadeinclass">
        <ScrollToTopOnMount/>

      <div className="mobile">
        <div className="pagemargin">
        <div className="whatwedoheadertext">
          <h1>BOOKING CONDITIONS</h1>
        </div>
        <div className="whatwedosmalltextcenter">
          <p>Registration</p>
        </div>
        <div className="abouttextthinleft">
          <p>A confirmation that we have received your notification will
          be emailed as soon as possible, often next working day.
          If you have not received confirmation from us within three days,
          please contact us. All other information about the course will be
          emailed to you four weeks prior to the course starts.</p>
        </div>
        <div className="whatwedosmalltextcenter">
          <p>Payment</p>
        </div>
        <div className="abouttextthinleft">
          <p>Shortly after registration, the course will be invoiced.
          Payment shall be made within 30 days or before the course starts.
          The course fee includes course material, “fika” and lunch.</p>
        </div>
        <div className="whatwedosmalltextcenter">
          <p>Booking</p>
        </div>
        <div className="abouttextthinleft">
          <p>Registration is binding. In case of need, you can transfer your spot to a colleague.
          This need to be done no later than four weeks prior to the course start.
          Any adjustments later than that will be charged with a re-booking fee of 50 % of the course fee.
          In case of sickness, transferral adjustments can be made later without a fee. We do not refund cancellations.</p>
        </div>
        </div>
      </div>



      <div className="web">
        <div className="whatwedoheadertext">
          <h1>BOOKING CONDITIONS</h1>
        </div>
        <div className="whatwedosmalltextcenter">
          <p>Registration</p>
        </div>
        <div className="abouttextthinleftweb">
          <p>A confirmation that we have received your notification
          will be emailed as soon as possible, often next working day.
          If you have not received confirmation from us within three days,
          please contact us. All other information about the course will
          be emailed to you four weeks prior to the course starts.</p>
        </div>
        <div className="whatwedosmalltextcenter">
          <p>Payment</p>
        </div>
        <div className="abouttextthinleftweb">
          <p>Shortly after registration, the course will be invoiced. Payment shall be made within 30 days or before the course starts. The course fee includes course material, “fika” and lunch.</p>
        </div>
        <div className="whatwedosmalltextcenter">
          <p>Booking</p>
        </div>
        <div className="abouttextthinleftweb">
          <p>Registration is binding. In case of need, you can transfer your spot to a colleague.
          This need to be done no later than four weeks prior to the course start.
          Any adjustments later than that will be charged with a re-booking fee of 50 % of the course fee.
          In case of sickness, transferral adjustments can be made later without a fee. We do not refund cancellations. </p>
        </div>

        </div>

      </div>


    )
  }
}

export default Bookingconditions
