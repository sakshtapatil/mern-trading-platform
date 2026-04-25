import React from 'react';
function Footer() {
    const linkStyle = {
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '14px',
         
        color: '#6c757d',
        padding: '4px 12px',
        display: 'inline-block',
    };

    return ( 
        <footer  className='border-top'style={{backgroundColor:'rgb(250, 250, 250)'}}>
        <div className='container   mt-5' >
            <div className='row mt-5'>
                <div className='col'>
                    <img src="media/images/drive-download-20260331T172409Z-3-001/logo.svg" alt="Logo" style={{ width: '50%' }} />
                    <p> &copy; 2010 - 2026, Zerodha Broking Ltd.All rights reserved.</p>
                </div>
                <div className='col'>
                    <h6 style={{fontSize:'18px'}}>Account</h6>
                    <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">
  Open demat account</a><br />
                    <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">NRI demat account</a><br/>
                    <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">HUF demat account</a><br/>
                    <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Commodity</a><br/>
                    <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Dematerialisation</a><br/>
                    <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Fund transfer</a><br/>
                    <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Minor demat account</a><br/>
                    <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">MTF</a>
                </div>
                <div className='col '>
                     <h6 style={{fontSize:'18px'}}>Support</h6>
                     
                     <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Contact us</a><br/>
                     <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Support portal</a><br/>
                     <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">How to file a complaint?</a><br/>
                     <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Status of your complaints</a><br/>
                     <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Bulletin</a><br/>
                     <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Circular</a><br/>
                     <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Z-Connect blog</a><br/>
                     <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Downloads</a>
                </div>
                <div className='col'>
                     <h6 style={{fontSize:'18px'}}>Company</h6>
                     <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">About</a><br/>
                     <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Philosophy</a><br/>
                     <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Press & media</a><br/>
                     <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Careers</a><br/>
                     <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Zerodha Cares (CSR)</a><br/>
                     <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Zerodha.tech</a><br/>
                     <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Open source</a><br/>
                     <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Referral program</a>
                </div>
                <div className='col'>
                    <h6 style={{fontSize:'18px'}}>Quick links</h6>
                    <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Upcoming IPOs</a><br/>
                    <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Brokerage charges</a><br/>
                    <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Market holidays</a><br/>
                    <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Economic calendar</a><br/>
                    <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Calculators</a><br/>
                    <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Markets</a><br/>
                    <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Sectors</a><br/>
                    <a href="#" className="text-muted text-decoration-none m-2 d-inline-block">Gift Nifty</a>
                </div>
            </div>
            <div className=' mt-5 text-muted' style={{fontSize:'11px'}}>
                <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

                <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>

                <p>Zerodha Broking Limited: Customers availing fixed deposit facilitation services offered by Blostem Fintech Private Limited will not have access to any exchange investor grievance redressal forum, SEBI SCORES/ODR, conciliation, or arbitration mechanism in respect of such fixed deposit products.</p>

               <div style={{ display: 'flex', flexWrap: 'wrap',  justifyContent: 'center', padding: '12px 0' }}> 
                    <a href='#' style={linkStyle}>NSE</a>
                    <a href='#' style={linkStyle}>BSE</a>
                    <a href='#' style={linkStyle}>MCX</a>
                    <a href='#' style={linkStyle}>Terms & conditions</a>
                    <a href='#' style={linkStyle}>Policies & procedures</a>         
                    <a href='#' style={linkStyle}>Privacy policy</a>
                    <a href='#' style={linkStyle}>Disclosure</a>        
                    <a href='#' style={linkStyle}>For investor's attention</a>
                    <a href='#' style={linkStyle}>Investor charter</a>
               </div>
            </div>
        </div>
        </footer>
     );
}

export default Footer;