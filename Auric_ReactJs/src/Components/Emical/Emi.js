import React from 'react'
import './Emi.css';
import gold from "F:/Auric Finance/auric/src/assets/img/gold.gif";
export default function Emi() {
    return (
        <div>
            <div className="content">
                {<img src={gold} alt=" " /> }
            </div>
            <div className="cal">
                <div class="row">
                    <div class="col-md-12">
                        <form action="index.html" method="post">
                            <h2> Eligibility Calculator </h2>
                            <br/>
                            <fieldset>
                                <label for="name">Ornaments</label>
                                <select id="job" name="user_job">
                                    <option value="Select Ornaments">Select Ornaments</option>
                                    <option value="Necklace">Necklace</option>
                                    <option value="Ring">Ring</option>
                                    <option value="Chain">Chain</option>
                                    <option value="Gold Coin">Gold Coin</option>
                                    <option value="Solid Bangles">Solid Bangles</option>
                                    <option value="Others">Others</option>
                                </select>
<br/>
                                <label for="email">Net Weight</label>
                                <input type="number" id="netweight" name="netweight" />


                                <label for="email">Caratage</label>
                                <select id="job" name="user_job">
                                    
                                    <option value="Select Caratage">Select Caratage</option>
                                    <option value="22">22</option>
                                    <option value="24">24</option>
                                </select>
                            </fieldset>
                            <fieldset>
                 
                                    <label>Total Value</label>
                                    <input type="number" id="totalvalue" name="totalvalue" />
                         
                                <label>Eligle Loan Amount</label>
                                <input type="number" id="Eligle" name="Eligle" />


                  
                                    {/* <label>Gross Value</label>
                                    <input type="number" id="gross" name="gross" /> */}
                        


                            </fieldset>

                            <button type="submit"> Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
