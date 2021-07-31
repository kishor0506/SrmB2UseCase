import React from 'react'
import './Kycdoc.css';

export default function kycdoc() {
    return (
        <div>
            <div className="card">
                <div className=" card-header">
                    <h2>KYC</h2>
                </div>

                <div className='card-body'>
                <div class="col-md-6 offset-md-3 mt-5">
  
    <br/>
   
    <h2>kyc</h2>
    <form accept-charset="UTF-8" action="https://getform.io/f/{your-form-endpoint-goes-here}" method="POST" enctype="multipart/form-data" target="_blank">
      <div class="form-group">
        <label for="exampleInputName">Aadhar*</label>
        <input type="" name="Aadhaar" class="form-control" id="exampleInputName" placeholder="Enter your Aadhar Number" required="required"/>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1" required="required">Pancard*</label>
        <input type="" name="pancard" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Pancard Number"/>
      </div>
      <div class="form-group">
        <label for="inputAddress">voterId</label>
        <input type="" name="voterid" class="form-control" id="inputAddress" placeholder="Enter your VoterId Number"/>
      </div>
      {/* <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" name="city" class="form-control" id="inputCity" placeholder="Istanbul"/>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" name="zip" class="form-control" id="inputZip" placeholder="34000"/>
        </div>
      </div> */}
      {/* <div class="form-group">
        <label for="example-tel-input" class="col-2 col-form-label">Telephone</label>
        <div class="col-10">
          <input class="form-control" name="tel" type="tel" value="1-(555)-555-5555" id="example-tel-input"/>
        </div>
      </div>
      <div class="form-group">
        <label for="example-date-input" class="col-3 col-form-label">Start Date</label>
        <div class="col-10">
          <input class="form-control" name="starting_date" type="date" value="2020-02-01" id="example-date-input"/>
        </div>
      </div> */}
      <div class="form-group mt-3">
        <label class="mr-4">Upload your Aadhaar:</label>
        <input type="file" name="file"/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
                </div>
            </div>
        </div>
    )
}
