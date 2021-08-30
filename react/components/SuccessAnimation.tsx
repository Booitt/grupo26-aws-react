import React from "react"
import classes from '../styles/SuccessAnimation.module.css'

const Animation: React.FC = () => {
	return (
		<div>
			<div className={classes.successAnimation}>
				<svg
					className={classes.checkmark}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 52 52"
                    color="#303030"
				>
					<circle
						className={classes.checkmarkCircle}
						cx="26"
						cy="26"
						r="25"
						fill="none"
					/>
					<path
						className={classes.checkmarkCheck}
						fill="none"
						d="M14.1 27.2l7.1 7.2 16.7-16.8"
					/>
				</svg>
			</div>
		</div>
	)
}

export default Animation
