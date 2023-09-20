import React from "react";
import styles from "./NftPreview.module.css";
import nft from "../images/image-equilibrium.jpg";
import ViewIcon from "../images/icon-view.svg";
import EthIcon from "../images/icon-ethereum.svg";
import ClockIcon from "../images/icon-clock.svg";
import avatar from "../images/image-avatar.png";

function NftPreview(props) {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img className={styles.nft} src={nft} alt="nft" />
				<img className={styles.viewIcon} src={ViewIcon} alt="view-icon" />
			</div>
			<div className={styles.detailsContainer}>
				<h1>Equilibrium #3429</h1>
				<p>Our Equilibrium collection promotes balance and calm.</p>
				<div className={styles.priceContainer}>
					<div className={styles.eth}>
						<img src={EthIcon} alt="eth-icon" />
						<p>0.041ETH</p>
					</div>
					<div className={styles.days}>
						<img src={ClockIcon} alt="clock-icon" />
						<p>3 days left</p>
					</div>
				</div>
			</div>
			<hr />
			<div className={styles.userContainer}>
				<img src={avatar} alt="user-avatar" />
				<p className={styles.creationOf}>Creation of</p>
				<p className={styles.userName}>Jules Wyvern</p>
			</div>
		</div>
	);
}

export default NftPreview;
