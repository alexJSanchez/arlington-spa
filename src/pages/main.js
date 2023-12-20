import React from "react";
import bodyWork from "../images/oil.jpg";
import commonArea from "../images/commonAreaSmall.jpg";
import footM from "../images/footMassage.jpg";
import facial from "../images/depositphotos_13789300-stock-photo-latin-woman-spa.jpg";
import americanexpress from "../images/americanExpress.png";
import mastercard from "../images/mastercard.png";
import visa from "../images/visa.png";
import discover from "../images/discover.png";
import bambooMid from "../images/bambooMedium.png";
function Main() {
	return (
		<div className="main">
			<div className="image-container">
				<div className="gradient-overlay"></div>
				<div className="header-content">
					<div className="header-content-text">
						<h1>ARLINGTON FOOTSPA</h1>
						<p>696 Dutchess turnpike poughkepsie, NY 12603</p>
						<p>845-345-9223</p>
						<h3>Store Hours</h3>
						<p>
							<span>Mon-Sat</span>: 10am-9pm
						</p>
						<p>
							<span>Sun</span>: 11am-730pm
						</p>
					</div>
					<div
						className="header-content-text"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: "10px",
						}}
					>
						<img alt="american express card" src={americanexpress} />
						<img
							alt="master card"
							style={{ width: "41px", height: "40px" }}
							src={mastercard}
						/>
						<img
							alt="visa card"
							style={{ width: "41px", height: "40px" }}
							src={visa}
						/>
						<img
							alt="discover card"
							style={{ width: "41px", height: "40px" }}
							src={discover}
						/>
					</div>
				</div>
			</div>
			<div className="about-container">
				<p>
					Arlington Foot Spa is a foot and body spa that offers guest complete
					relaxation from head to toe. Not only can you treat your feet to a
					total comfirmating expireance, you are also welcome to enjoy full ody
					work.Our hieghly trained and skilled staff weill take your achy, tired
					feet and muscles,and will rub them until they're brandnew again
				</p>
				<img alt="bamboo medium" src={bambooMid} />
			</div>
			<div className="service-container">
				<div className="service-box">
					<div>
						<img alt="facial" src={facial} className="circular-image" />
						<h3>Facial</h3>
					</div>
					<div className="service-box-price">
						<p>Time(30min/60min)</p>
						<p>$30/$60</p>
					</div>
				</div>
				<div className="service-box">
					<div>
						<img alt="commonArea" src={commonArea} className="circular-image" />
						<h3>Chair Relaxing</h3>
					</div>
					<div className="service-box-price">
						<p>Time(10min/15min/20min/30min)</p>
						<p>$15/$20/$25/$35</p>
					</div>
				</div>
				<div className="service-box">
					<div>
						<img alt="footM" src={footM} className="circular-image" />
						<h3>SeaSalt Foot Reflexology</h3>
					</div>
					<div className="service-box-price">
						<p>Time(30min/60min)</p>
						<p>$30/$45</p>
					</div>
				</div>
				<div className="service-box">
					<div>
						<img alt="body work" src={bodyWork} className="circular-image" />
						<h3>Body Work</h3>
					</div>
					<div className="service-box-price">
						<p>Swedish(30min/60min/90min)</p>
						<p>$35/$60/$90</p>
						<p>DeepTissue(30min/60min/90min)</p>
						<p>$40/$70/$90</p>
					</div>
				</div>
				<div className="service-box">
					<div className="service-box-image service-box-image-ovelay">
						<img
							alt="Foot "
							src={footM}
							className="circular-image circular-image-left"
						/>
						<img
							src={bodyWork}
							className="circular-image circular-image-right"
							alt="body work"
						/>
					</div>
					<h3>Body&Feet Combo</h3>
					<div className="service-box-price">
						<p>Time(30+30/30+60/60+30/60+60)</p>
						<p>$60/$80/$90/$100</p>
					</div>
				</div>

				<div className="service-box">
					<div className="service-box-image service-box-image-ovelay">
						<img
							src={bodyWork}
							className="circular-image circular-image-left"
							alt="body work"
						/>
						<img
							src={commonArea}
							className="circular-image circular-image-right"
							alt="common area"
						/>
					</div>
					<h3>Body&Chair Combo</h3>
					<div className="service-box-price">
						<p>Time(30+30/30+60/60+30/60+60)</p>
						<p>$60/$80/$90/$100</p>
					</div>
				</div>
			</div>
			<div className="about-container">
				<img alt="bamboo mid" src={bambooMid} />
				<p>
					Receiving regular foot reflexology and body works helps to promote
					physiological as wel a physical health. The benifits include improving
					blood circulation, fighting depression, helping you to relax,
					promoting bteer sleep and relieving body pain. Our team embers not
					only invite you to expireience a calming and relaxing enviorment
					during your visit, but will also help to ease tension in your feet and
					body, so you can enjoy a more enjoyable and pain-free life between
					visits.
				</p>
			</div>
		</div>
	);
}

export default Main;
