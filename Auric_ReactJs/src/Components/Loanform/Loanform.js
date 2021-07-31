import React from 'react'

export default function Loanform() {
    return (
        <div>
            <form id="loan-form">
            <section>
    <h2 className="form-section-title">Personal Information</h2>
    <div className="row">
      <div className="col-4">
        <label className="form-label">First Name</label>
        <input name="first-name" id="first-name" type="text" required />
      </div>
      <div className="col-4">
        <label className="form-label">MI</label>
        <input name="middle-initial" type="text" />
      </div>
      <div className="col-4">
        <label className="form-label">Last Name</label>
        <input name="last-name" type="text" required />
      </div>
    </div>
    <div className="row">
      <div className="col-3">
        <label className="form-label">Social Security Number</label>
        <input name="ssn" type="password" />
      </div>
    </div>
    <div className="row">
      <div className="col-7">
        <label className="form-label">Email</label>
        <input name="email" type="email" required />
      </div>
    </div>
    <div className="row">
      <div className="col-9">
        <label className="form-label">Street Address</label>
        <input name="address-1" type="text" placeholder="Address Line 1" />
      </div>
    </div>
    <div className="row">
      <div className="col-9">
        <input name="address-2" type="text" placeholder="Address Line 2" />
      </div>
    </div>
    <div className="row">
      <div className="col-4">
        <input name="city" type="text" placeholder="City" />
      </div>
      <div className="col-4">
        <input name="state" type="text" placeholder="State" />
      </div>
      <div className="col-4">
        <input name="zipcode" type="text" placeholder="Zip Code" />
      </div>
    </div>
    <div className="row">
      <div className="col-3">
        <label className="form-label">Home Phone</label>
        <input name="home-phone" type="text" />
      </div>
    </div>
    <div className="row">
      <div className="col-3">
        <label className="form-label">Mobile Phone</label>
        <input name="mobile-phone" type="text" />
      </div>
    </div>

    <div className="row">
      <div className="col-3">
        <label className="form-label">Are you entitled to work in the United States?</label>
        <input name="us-work" type="radio" value="yes" required /><span className="radio-selection"> Yes</span> <input name="us-work" type="radio" value="no" /><span className="radio-selection"> No</span>
      </div>
    </div>

    <div className="row">
      <div className="col-3">
        <label className="form-label">Are you 18 or older?</label>
        <input name="older-than-18" type="radio" value="yes" required /><span className="radio-selection"> Yes</span> <input name="older-than-18" type="radio" value="no" /><span className="radio-selection"> No</span>
      </div>
      <div className="col-3">
        <label className="form-label">If yes, Date of Birth</label>
        <input name="date-of-birth" type="date" />
      </div>
    </div>

    <div className="row">
      <div className="col-6">
        <label className="form-label">Have you been convicted of a misdemeanor or felony, or been incarcerated in connection with a felony, in the past seven years?</label>
        <input name="convicted" type="radio" value="yes" required /><span className="radio-selection"> Yes</span> <input name="convicted" type="radio" value="no" /><span className="radio-selection"> No</span>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <label className="form-label">If yes, please explain:</label>
        <input name="convicted-reason" type="text" />
      </div>
    </div>

    <div className="row">
      <div className="col-3">
        <label className="form-label">Military Service?</label>
        <input name="military-service" type="radio" value="yes" required /><span className="radio-selection"> Yes</span> <input name="military-service" type="radio" value="no" /><span className="radio-selection"> No</span>
      </div>
      <div className="col-3">
        <label className="form-label">If yes, which branch?</label>
        <input name="military-branch" type="text" />
      </div>
    </div>

    <div className="row">
      <div className="col-3">
        <label className="form-label">Are you a veteran?</label>
        <input name="veteran" type="radio" value="yes" required /><span className="radio-selection"> Yes</span> <input name="veteran" type="radio" value="no" /><span className="radio-selection"> No</span>
      </div>
      <div className="col-3">
        <label className="form-label">If yes, which war?</label>
        <input name="war" type="text" />
      </div>
    </div>

    <div className="row">
      <div className="col-4">
        <label className="form-label">What position are you applying for?</label>
        <input name="position-application" type="text" required />
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        <label className="form-label">How did you hear about this position?</label>
        <input name="job-source" type="text" />
      </div>
    </div>

    <div className="row">
      <div className="col-3">
        <label className="form-label">Expected Hourly Rate</label>
        <input name="expected-hourly-rate" type="text" required />
      </div>
    </div>

    <div className="row">
      <div className="col-3">
        <label className="form-label">Expected Weekly Earnings</label>
        <input name="expected-weekly-earnings" type="text" required />
      </div>
    </div>

    <div className="row">
      <div className="col-3">
        <label className="form-label">Date Available</label>
        <input name="date-available" type="date" required />
      </div>
    </div>
  </section>


  <section>
    <h2 className="form-section-title">Prior Work Experience</h2>
    <section className="form-field-section">
      <h3 className="form-section-title">Current or Most Recent</h3>
    </section>
    <section className="form-field-section">
      <div className="row">
        <div className="col-9">
          <label className="form-label">Employer</label>
          <input name="emp1-employer" type="text" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-9">
          <label className="form-label">Address</label>
          <input name="emp1-address-1" type="text" placeholder="Address Line 1" />
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <input name="emp1-address-2" type="text" placeholder="Address Line 2" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <input name="emp1-city" type="text" placeholder="City" />
        </div>
        <div className="col-4">
          <input name="emp1-state" type="text" placeholder="State" />
        </div>
        <div className="col-4">
          <input name="emp1-zip" type="text" placeholder="Zip Code" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-3">
          <label className="form-label">Phone</label>
          <input name="emp1-phone" type="text" />
        </div>
      </div>

      <div className="row">
        <div className="col-5">
          <label className="form-label">Name of Immediate Supervisor</label>
          <input name="emp1-supervisor" type="text" />
        </div>
      </div>
    </section>
    <section className="form-field-section">
      <div className="row">
        <div className="col-3">
          <label className="form-label">Start Date</label>
          <input name="emp1-start-date" type="date" />
        </div>
        <div className="col-3">
          <label className="form-label">End Date</label>
          <input name="emp1-end-date" type="date" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-5">
          <label className="form-label">Position/Job Title</label>
          <input name="emp1-title" type="text" />
        </div>
        <div className="col-3">
          <label className="form-label">Payrate</label>
          <input name="emp1-payrate" type="text" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-12">
          <label className="form-label">Reason for Leaving</label>
          <input name="emp1-reason-for-leaving" type="text" />
        </div>
        <div className="col-12">
          <label className="form-label">May We Contact?</label>
          <input name="emp1-can-contact" type="radio" value="yes" /><span className="radio-selection"> Yes</span> <input name="emp1-can-contact" type="radio" value="no" /><span className="radio-selection"> No</span>
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <h3 className="form-section-title">Prior</h3>
    </section>


    <section className="form-field-section">
      <div className="row">
        <div className="col-9">
          <label className="form-label">Employer</label>
          <input name="emp2-employer" type="text" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-9">
          <label className="form-label">Address</label>
          <input name="emp2-address-1" type="text" placeholder="Address Line 1" />
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <input name="emp2-address-2" type="text" placeholder="Address Line 2" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <input name="emp2-city" type="text" placeholder="City" />
        </div>
        <div className="col-4">
          <input name="emp2-state" type="text" placeholder="State" />
        </div>
        <div className="col-4">
          <input name="emp2-zip" type="text" placeholder="Zip Code" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-3">
          <label className="form-label">Phone</label>
          <input name="emp2-phone" type="text" />
        </div>
      </div>

      <div className="row">
        <div className="col-5">
          <label className="form-label">Name of Immediate Supervisor</label>
          <input name="emp2-supervisor" type="text" />
        </div>
      </div>
    </section>
    <section className="form-field-section">
      <div className="row">
        <div className="col-3">
          <label className="form-label">Start Date</label>
          <input name="emp2-start-date" type="date" />
        </div>
        <div className="col-3">
          <label className="form-label">End Date</label>
          <input name="emp2-end-date" type="date" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-5">
          <label className="form-label">Position/Job Title</label>
          <input name="emp2-title" type="text" />
        </div>
        <div className="col-3">
          <label className="form-label">Payrate</label>
          <input name="emp2-payrate" type="text" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-12">
          <label className="form-label">Reason for Leaving</label>
          <input name="emp2-reason-for-leaving" type="text" />
        </div>
        <div className="col-12">
          <label className="form-label">May We Contact?</label>
          <input name="emp2-can-contact" type="radio" value="yes" /><span className="radio-selection"> Yes</span> <input name="emp2-can-contact" type="radio" value="no" /><span className="radio-selection"> No</span>
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <h3 className="form-section-title">Prior</h3>
    </section>


    <section className="form-field-section">
      <div className="row">
        <div className="col-9">
          <label className="form-label">Employer</label>
          <input name="emp3-employer" type="text" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-9">
          <label className="form-label">Address</label>
          <input name="emp3-address-1" type="text" placeholder="Address Line 1" />
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <input name="emp3-address-2" type="text" placeholder="Address Line 2" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <input name="emp3-city" type="text" placeholder="City" />
        </div>
        <div className="col-4">
          <input name="emp3-state" type="text" placeholder="State" />
        </div>
        <div className="col-4">
          <input name="emp3-zip" type="text" placeholder="Zip Code" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-3">
          <label className="form-label">Phone</label>
          <input name="emp3-phone" type="text" />
        </div>
      </div>

      <div className="row">
        <div className="col-5">
          <label className="form-label">Name of Immediate Supervisor</label>
          <input name="emp3-supervisor" type="text" />
        </div>
      </div>
    </section>
    <section className="form-field-section">
      <div className="row">
        <div className="col-3">
          <label className="form-label">Start Date</label>
          <input name="emp3-start-date" type="date" />
        </div>
        <div className="col-3">
          <label className="form-label">End Date</label>
          <input name="emp3-end-date" type="date" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-5">
          <label className="form-label">Position/Job Title</label>
          <input name="emp3-title" type="text" />
        </div>
        <div className="col-3">
          <label className="form-label">Payrate</label>
          <input name="emp3-payrate" type="text" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-12">
          <label className="form-label">Reason for Leaving</label>
          <input name="emp3-reason-for-leaving" type="text" />
        </div>
        <div className="col-12">
          <label className="form-label">May We Contact?</label>
          <input name="emp3-can-contact" type="radio" value="yes" /><span className="radio-selection"> Yes</span> <input name="emp3-can-contact" type="radio" value="no" /><span className="radio-selection"> No</span>
        </div>
      </div>
    </section>
  </section>

  <section>
    <h2 className="form-section-title">Education</h2>
    <section className="form-field-section">
      <h4 className="form-section-title">High School</h4>
      <div className="row">
        <div className="col-4">
          <label className="form-label">Name</label>
          <input name="high-school-name" type="text" />
        </div>
        <div className="col-4">
          <label className="form-label">Location</label>
          <input name="high-school-location" type="text" />
        </div>
        <div className="col-4">
          <label className="form-label">Last Year Completed</label>
          <select name="high-school-last-year-completed">
<option value="freshman">Freshman</option>
<option value="sophomore">Sophomore</option>
<option value="junior">Junior</option>
<option value="senior">Senior</option>
</select>
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-6">
          <label className="form-label">Degree</label>
          <input name="high-school-degree" type="text" />
        </div>
        <div className="col-6">
          <label className="form-label">Major or Emphasis</label>
          <input name="high-school-major" type="text" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <h4 className="form-section-title">College/University</h4>
      <div className="row">
        <div className="col-4">
          <label className="form-label">Name</label>
          <input name="college-name" type="text" />
        </div>
        <div className="col-4">
          <label className="form-label">Location</label>
          <input name="college-location" type="text" />
        </div>
        <div className="col-4">
          <label className="form-label">Last Year Completed</label>
          <select name="college-last-year-completed">
<option value="freshman">Freshman</option>
<option value="sophomore">Sophomore</option>
<option value="junior">Junior</option>
<option value="senior">Senior</option>
</select>
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-6">
          <label className="form-label">Degree</label>
          <input name="college-degree" type="text" />
        </div>
        <div className="col-6">
          <label className="form-label">Major or Emphasis</label>
          <input name="college-major" type="text" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <h4 className="form-section-title">Trade School</h4>
      <div className="row">
        <div className="col-4">
          <label className="form-label">Name</label>
          <input name="trade-school-name" type="text" />
        </div>
        <div className="col-4">
          <label className="form-label">Location</label>
          <input name="trade-school-location" type="text" />
        </div>
        <div className="col-4">
          <label className="form-label">Last Year Completed</label>
          <input name="trade-school-last-year-completed" type="text" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-6">
          <label className="form-label">Degree</label>
          <input name="trade-school-degree" type="text" />
        </div>
        <div className="col-6">
          <label className="form-label">Major or Emphasis</label>
          <input name="trade-school-major" type="text" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <h4 className="form-section-title">Other</h4>
      <div className="row">
        <div className="col-4">
          <label className="form-label">Name</label>
          <input name="other-school-name" type="text" />
        </div>
        <div className="col-4">
          <label className="form-label">Location</label>
          <input name="other-school-location" type="text" />
        </div>
        <div className="col-4">
          <label className="form-label">Last Year Completed</label>
          <input name="other-school-last-year-completed" type="text" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-6">
          <label className="form-label">Degree</label>
          <input name="other-school-degree" type="text" />
        </div>
        <div className="col-6">
          <label className="form-label">Major or Emphasis</label>
          <input name="other-school-major" type="text" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <div className="row">
        <div className="col-12">
          <label className="form-label">List any applicable special skills, training or proficiencies.</label>
          <input name="skills-training" type="text" />
        </div>
      </div>
    </section>
  </section>

  <section>
    <h2 className="form-section-title">Personal References</h2>
    <section className="form-field-section">
      <h4 className="form-section-title">Reference 1</h4>
      <div className="row">
        <div className="col-6">
          <label className="form-label">Name</label>
          <input name="ref1-name" type="text" />
        </div>
        <div className="col-6">
          <label className="form-label">Phone</label>
          <input name="ref1-phone" type="text" />
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <label className="form-label">Address</label>
          <input name="ref1-address-1" type="text" placeholder="Address Line 1" />
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <input name="ref1-address-2" type="text" placeholder="Address Line 2" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <input name="ref1-city" type="text" placeholder="City" />
        </div>
        <div className="col-4">
          <input name="ref1-state" type="text" placeholder="State" />
        </div>
        <div className="col-4">
          <input name="ref1-zip" type="text" placeholder="Zip Code" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <h4 className="form-section-title">Reference 2</h4>
      <div className="row">
        <div className="col-6">
          <label className="form-label">Name</label>
          <input name="ref2-name" type="text" />
        </div>
        <div className="col-6">
          <label className="form-label">Phone</label>
          <input name="ref2-phone" type="text" />
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <label className="form-label">Address</label>
          <input name="ref2-address-1" type="text" placeholder="Address Line 1" />
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <input name="ref2-address-2" type="text" placeholder="Address Line 2" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <input name="ref2-city" type="text" placeholder="City" />
        </div>
        <div className="col-4">
          <input name="ref2-state" type="text" placeholder="State" />
        </div>
        <div className="col-4">
          <input name="ref2-zip" type="text" placeholder="Zip Code" />
        </div>
      </div>
    </section>

    <section className="form-field-section">
      <h4 className="form-section-title">Reference 3</h4>
      <div className="row">
        <div className="col-6">
          <label className="form-label">Name</label>
          <input name="ref3-name" type="text" />
        </div>
        <div className="col-6">
          <label className="form-label">Phone</label>
          <input name="ref3-phone" type="text" />
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <label className="form-label">Address</label>
          <input name="ref3-address-1" type="text" placeholder="Address Line 1" />
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <input name="ref3-address-2" type="text" placeholder="Address Line 2" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <input name="ref3-city" type="text" placeholder="City" />
        </div>
        <div className="col-4">
          <input name="ref3-state" type="text" placeholder="State" />
        </div>
        <div className="col-4">
          <input name="ref3-zip" type="text" placeholder="Zip Code" />
        </div>
      </div>
    </section>
  </section>
  <input type="submit" value="Submit" />

</form>
        </div>
    )
}
