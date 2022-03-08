const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use((req,res,next)=>{
    const {origin} = req.headers;
    console.log(origin)
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS ,PUT')
    res.setHeader('Access-Control-Allow-Headers','content-type')
    next();
})

app.post('/send',async(req,res)=>{
    try {
        
    // console.log(req.body);
    //   let transporter=  mailer.createTransport({
    //         service:'gmail',
    //         auth:{
    //             user:'leads@edanpower.co.uk',
    //             pass:'Success@2020'
    //         }
    //     });

    // let testAccount = await nodemailer.createTestAccount();
    // console.log(testAccount)

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
            service:'gmail', // true for 465, false for other ports
      auth: {
        user: "leads.edanheating@gmail.com"        , // generated ethereal user
        pass: "Success@2020", // generated ethereal password
      },
    });

       let ingo = await  transporter.sendMail({
            // to:"leads@edanpower.co.uk",
            from:'leads.edanheating@gmail.com',
            // to:['leads@edanpower.co.uk','meetrathi43@gmail.com'],
            to:'meetrathi43@gmail.com',
            subject:`Edan Heating New Lead (${req.body?.values?.fullName} )`,
            html :getTemplate(req.body)
        });
        console.log(ingo);
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(ingo));
        return res.send({success:true})

    } catch (error) {
        console.log(error);
        return res.send({success:false});
    }
})

function getTemplate(data){
    return `
    <!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title></title>
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
<style>
html,
body {
    margin: 0 auto !important;
    padding: 0 !important;
    height: 100% !important;
    width: 100% !important;
    background: #f1f1f1;
}

/* What it does: Stops email clients resizing small text. */
* {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

/* What it does: Centers email on Android 4.4 */
div[style*="margin: 16px 0"] {
    margin: 0 !important;
}


/* What it does: Stops Outlook from adding extra spacing to tables. */
table,
td {
    mso-table-lspace: 0pt !important;
    mso-table-rspace: 0pt !important;
}

/* What it does: Fixes webkit padding issue. */
table {
    border-spacing: 0 !important;
    border-collapse: collapse !important;
    table-layout: fixed !important;
    margin: 0 auto !important;
}

/* What it does: Uses a better rendering method when resizing images in IE. */
img {
    -ms-interpolation-mode:bicubic;
}

/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
a {
    text-decoration: none;
}

/* What it does: A work-around for email clients meddling in triggered links. */
*[x-apple-data-detectors],  /* iOS */
.unstyle-auto-detected-links *,
.aBn {
    border-bottom: 0 !important;
    cursor: default !important;
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
}

/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
.a6S {
    display: none !important;
    opacity: 0.01 !important;
}

/* What it does: Prevents Gmail from changing the text color in conversation threads. */
.im {
    color: inherit !important;
}

/* If the above doesn't work, add a .g-img class to any image in question. */
img.g-img + div {
    display: none !important;
}

/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
/* Create one of these media queries for each additional viewport size you'd like to fix */

/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
    u ~ div .email-container {
        min-width: 320px !important;
    }
}
/* iPhone 6, 6S, 7, 8, and X */
@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
    u ~ div .email-container {
        min-width: 375px !important;
    }
}
/* iPhone 6+, 7+, and 8+ */
@media only screen and (min-device-width: 414px) {
    u ~ div .email-container {
        min-width: 414px !important;
    }
}

</style>

<style>

  .primary{
	background: #0d0cb5;
}
.bg_white{
	background: #ffffff;
}
.bg_light{
	background: #fafafa;
}
.bg_black{
	background: #000000;
}
.bg_dark{
	background: rgba(0,0,0,.8);
}
.email-section{
	padding:2.5em;
}

/*BUTTON*/
.btn{
	padding: 5px 15px;
	display: inline-block;
}
.btn.btn-primary{
	border-radius: 5px;
	background: #0d0cb5;
	color: #ffffff;
}
.btn.btn-white{
	border-radius: 5px;
	background: #ffffff;
	color: #000000;
}
.btn.btn-white-outline{
	border-radius: 5px;
	background: transparent;
	border: 1px solid #fff;
	color: #fff;
}

h1,h2,h3,h4,h5,h6{
	font-family: 'Poppins', sans-serif;
	color: #000000;
	margin-top: 0;
}

body{
	font-family: 'Poppins', sans-serif;
	font-weight: 400;
	font-size: 15px;
	line-height: 1.8;
	color: rgba(0,0,0,.4);
}

a{
	color: #0d0cb5;
}

table{
}
/*LOGO*/

.logo h1{
	margin: 0;
}
.logo h1 a{
	color: #000000;
	font-size: 20px;
	font-weight: 700;
	text-transform: uppercase;
	font-family: 'Poppins', sans-serif;
}

/*HERO*/
.hero{
	position: relative;
	z-index: 0;
}
.hero .overlay{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	content: '';
	width: 100%;
	background: #000000 !important;
    color: #ffffff;
	z-index: -1;
	opacity: .7 !important;
}
.hero h5{
    color: #ffffff;
    margin-bottom: 10px;
    font-size: 14px;
}
.hero .icon a{
	display: block;
	width: 60px;
	margin: 0 auto;
}
.hero .text{
	color: rgba(255,255,255,.8);
}
.hero .text h2{
	color: #ffffff;
	font-size: 20px;
	margin-bottom: 10px;
    margin-top: 0;
}
.hero .text h2 a{
    color: #ffffff !important;
}
/*FOOTER*/

.footer{
	color: rgba(255,255,255,.5);

}
.footer .heading{
	color: #ffffff;
	font-size: 20px;
}
.footer ul{
	margin: 0;
	padding: 0;
}
.footer ul li{
	list-style: none;
	margin-bottom: 10px;
}
.footer ul li a{
	color: rgba(255,255,255,1);
}
.message-sec{
    margin-bottom: 2rem;
}
.product-item h4{
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 0;
}
.product-item span.product-price{
    font-weight: 600;
    font-size: 2rem;
    text-align: left;
}
.product-item .product-month-price tr td{
    color: #000;
}
.product-item .prod-info{
    padding: 2rem 0;
}
.product-item p {
    margin: 0;
}
.product-item p span{
    color: #000000;
    display: block;
}
.answer_sec tr td{
    text-transform:capitalize;
}

@media screen and (max-width: 500px) {

	.icon{
		text-align: left;
	}

	.text-services{
		padding-left: 0;
		padding-right: 20px;
		text-align: left;
	}

}
</style>


</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
	<center style="width: 100%; background-color: #f1f1f1;">
    <div style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
      &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </div>
    <div style="max-width: 600px; margin: 0 auto;" class="email-container">
    	<!-- BEGIN BODY -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
      	<tr>
          <td valign="top" class="bg_white" style="padding: 1em 2.5em; background:#363636">
          	<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
          		<tr>
          			<td width="100%" class="logo" style="text-align: center;">
			            <a href="#">
                            <img src="https://edanhomes.co.uk/wp-content/themes/yootheme/cache/edan-homes-logo-0277f54a.png" alt="Edan" width="100px" style="filter: contrast(0.5) !important;"/>
                        </a>
			          </td>
          		</tr>
          	</table>
          </td>
	      </tr><!-- end tr -->
				<tr>
          <td valign="middle" class="hero bg_white" style="background:#009640; background-size: cover; height: 250px;">
          	<div class="overlay"></div>
            <table>
            	<tr>
            		<td>
            			<div class="text" style="padding: 0 3em; text-align: center;">
            				<h5>Username</h5>            				
                            <h2>${data?.values?.fullName}</h2>
            			</div>
                        <div class="text" style="padding: 0 3em; text-align: center;">
            				<h5>Contact number</h5>            				
                            <h2>${data?.values?.contactNo}</h2>
            			</div>
                        <div class="text" style="padding: 0 3em; text-align: center;">
            				<h5>Email address</h5>            				
                            <h2 style="color:#ffffff !important;">${data?.values?.email}</h2>
            			</div>
            		</td>
            	</tr>
            </table>
          </td>
	      </tr><!-- end tr -->
	      <tr>
		      <td class="bg_white">
		        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
		          <tr>
		            <td class="bg_white email-section">
                        <div class="message-sec">
                            <h3>Message</h3>
                            <p>${data?.values?.message}</p>
                        </div>
                        ${data.isFrom !== "contactPage" ? 
		            	`<div class="heading-section" style="text-align: center; padding: 0 30px;">
		              	<h2>Selected Product</h2>
		            	</div>
                        <div class="product-item">
                            <h4>${data?.data?.data?.name}</h4>
                            <table style="width: 100%;">
                            <td width="50%" style="text-align: left;">
                                <p class="prod-info">
                                    <span>${data?.data?.data?.guarantee || ''}</span>
                                    <span>${data?.data?.data?.apr || ''}</span>
                                </p>
                            </td>
                            <td width="50%">
                                <p>
                                    <span class="product-price">
                                    ${data?.data?.data?.price || ''}
                                    </span>
                                        <table style="width: 100%;" class="product-month-price">
                                            <td width="20%" style="text-align: left;">
                                            ${data?.data?.data?.monthlyRent || ''}
                                                </td>
                                                <td width="80%" style="text-align: left;">
                                                    <span>a month & 9.9% APR</span>
                                                </td>
                                                </table>
                                    </p>
                            </td>
                        </table>
                        </div>
                        `:`<div></div>`}
		            </td>
		          </tr>
		        </table>
		      </td>
		    </tr>

            ${data.isFrom !== "contactPage" ? 
            `<tr>
                <td valign="middle" class="bg_white email-section">
                    <h3>Answers</h3>
                    <table>
                    <tr>
                    <td valign="top" width="100%">
                      <table role="presentation" class="answer_sec" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="text-align: left; padding-right: 10px; width: 50%;">
                            Postcode
                          </td>
                          <td style="text-align: right; padding-right: 10px; width: 50%;">
                          ${data?.data?.answer?.postcode || ''}
                        </td>
                        </tr>
                        <tr>
                            <td style="text-align: left; padding-right: 10px; width: 50%;">
                                Current Boiler
                            </td>
                            <td style="text-align: right; padding-right: 10px; width: 50%;">
                            ${ String(data?.data?.answer?.current_boiler).replace(/_/g , " ") || ''}
                          </td>
                          </tr>
                          <tr>
                            <td style="text-align: left; padding-right: 10px; width: 50%;">
                                Replacement
                            </td>
                            <td style="text-align: right; padding-right: 10px; width: 50%;">
                            ${new String(data?.data?.answer?.replace_boiler).replace(/_/g , " ") || ''}
                          </td>
                          </tr>
                          <tr>
                            <td style="text-align: left; padding-right: 10px; width: 50%;">
                                Want Boiler Moving?
                            </td>
                            <td style="text-align: right; padding-right: 10px; width: 50%;">
                            ${data?.data?.answer?.boiler_new_location.replace(/_/g , " ") || ''}
                          </td>
                          </tr>
                          <tr>
                            <td style="text-align: left; padding-right: 10px; width: 50%;">
                                House Type
                            </td>
                            <td style="text-align: right; padding-right: 10px; width: 50%;">
                            ${data?.data?.answer?.property_type.replace(/_/g , " ") || ''}
                          </td>
                          </tr>
                          <tr>
                            <td style="text-align: left; padding-right: 10px; width: 50%;">
                                Bedrooms
                            </td>
                            <td style="text-align: right; padding-right: 10px; width: 50%;">
                            ${data?.data?.answer?.how_many_bedrooms.replace(/_/g , " ") || ''}
                          </td>
                          </tr>
                          <tr>
                            <td style="text-align: left; padding-right: 10px; width: 50%;">
                                Bathtubs
                            </td>
                            <td style="text-align: right; padding-right: 10px; width: 50%;">
                            ${data?.data?.answer?.bathtubs.replace(/_/g , " ") || ''}
                          </td>
                          </tr>
                          <tr>
                            <td style="text-align: left; padding-right: 10px; width: 50%;">
                                Showers
                            </td>
                            <td style="text-align: right; padding-right: 10px; width: 50%;">
                            ${data?.data?.answer?.shower_cubicles.replace(/_/g , " ") || ''}
                          </td>
                          </tr>
                          <tr>
                            <td style="text-align: left; padding-right: 10px; width: 50%;">
                                Flue Exit
                            </td>
                            <td style="text-align: right; padding-right: 10px; width: 50%;">
                            ${data?.data?.answer?.flue_exit.replace(/_/g , " ") || ''}
                          </td>
                          </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                </td>
            </tr>`
            : `<div></div>`}
      </table>
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
        <tr>
        	<td valign="middle" class="bg_black footer email-section">
        		<table>
            	<tr>
                <td valign="top" width="100%">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="text-align: left; padding-right: 10px;">
                      	<p style="color:#ffffff">&copy; 2022 Edan. All Rights Reserved</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
        	</td>
        </tr>
      </table>
    </div>
  </center>
</body>
</html>
    `
}


app.listen(3000,()=>{
    console.log('server is listening on 3000');
})