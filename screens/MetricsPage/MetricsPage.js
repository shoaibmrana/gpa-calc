//
//  MetricsPage
//  GPA Calc
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class MetricsPage extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.metricsPageView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<Image
							source={require("./../../assets/images/metrics-page-background-mask.png")}
							style={styles.metricsPageBackgroundMaskImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 51,
							right: 62,
							top: 55,
							bottom: 164,
						}}>
						<Text
							style={styles.thisWeekText}>Cum. GPA</Text>
						<Text
							style={styles.textEightText}>3.75</Text>
						<Text
							style={styles.springText}>2021 Spring</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 18,
								marginLeft: 17,
								marginRight: 72,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.fallTwoText}>2019 Fall</Text>
							<Text
								style={styles.springTwoText}>2020 Spring</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.fallText}>2020 Fall</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 18,
								marginLeft: 1,
								marginTop: 42,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.roundUpsFiveText}>Courses</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.oneTimeText}>Terms</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 43,
								marginRight: 10,
								marginTop: 2,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.takenToDateFiveText}>Taken to date</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.textFiveText}>4</Text>
						</View>
						<Text
							style={styles.lineGraphText}>2019 Fall</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 18,
								marginLeft: 43,
								marginRight: 24,
								marginTop: 46,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.roundUpsText}>GPA</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.roundUpsFourText}>Credits</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 18,
								marginLeft: 22,
								marginRight: 25,
								marginTop: 28,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.takenToDateText}>Grade Point Average</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.takenToDateFourText}>Completed</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 19,
								marginLeft: 40,
								marginRight: 20,
								marginTop: 45,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.roundUpsTwoText}>Points</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.roundUpsThreeText}>Courses </Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 18,
								marginLeft: 45,
								marginRight: 34,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.takenToDateTwoText}>Earned</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.takenToDateThreeText}>Taken</Text>
						</View>
					</View>
					<Text
						style={styles.textText}>4</Text>
					<Text
						style={styles.textTwoText}>6</Text>
					<Text
						style={styles.textThreeText}>5</Text>
					<Text
						style={styles.textFourText}>15</Text>
					<Text
						style={styles.savedThisMonthText}>Completed</Text>
					<Text
						style={styles.textSevenText}>19</Text>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						width: 41,
						top: 260,
						height: 49,
						alignItems: "center",
					}}>
					<Text
						style={styles.creditsText}>Credits</Text>
					<Text
						style={styles.textSixText}>57</Text>
				</View>
				<Text
					style={styles.savedThisMonthTwoText}>Earned in total</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	metricsPageView: {
		backgroundColor: "white",
		flex: 1,
	},
	metricsPageBackgroundMaskImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 812,
	},
	thisWeekText: {
		color: "rgb(141, 141, 141)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 8,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 18,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 3,
	},
	textEightText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		alignSelf: "flex-end",
		marginRight: 21,
	},
	springText: {
		color: "rgb(125, 130, 195)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginRight: 6,
		marginTop: 109,
	},
	fallTwoText: {
		backgroundColor: "transparent",
		color: "rgb(125, 130, 195)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
	},
	springTwoText: {
		backgroundColor: "transparent",
		color: "rgb(125, 130, 195)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		marginLeft: 18,
	},
	fallText: {
		backgroundColor: "transparent",
		color: "rgb(125, 130, 195)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
	},
	roundUpsFiveText: {
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		backgroundColor: "transparent",
	},
	oneTimeText: {
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		backgroundColor: "transparent",
	},
	takenToDateFiveText: {
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		backgroundColor: "transparent",
		marginTop: 25,
	},
	textFiveText: {
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		paddingTop: 11,
		backgroundColor: "transparent",
	},
	lineGraphText: {
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 21.67,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 18,
		marginTop: 84,
	},
	roundUpsText: {
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		backgroundColor: "transparent",
	},
	roundUpsFourText: {
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		backgroundColor: "transparent",
	},
	takenToDateText: {
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		backgroundColor: "transparent",
	},
	takenToDateFourText: {
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		backgroundColor: "transparent",
	},
	roundUpsTwoText: {
		backgroundColor: "transparent",
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
	},
	roundUpsThreeText: {
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		backgroundColor: "transparent",
		marginTop: 1,
	},
	takenToDateTwoText: {
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		backgroundColor: "transparent",
	},
	takenToDateThreeText: {
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		backgroundColor: "transparent",
	},
	textText: {
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		paddingTop: 11,
		backgroundColor: "transparent",
		position: "absolute",
		left: 83,
		top: 495,
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		paddingTop: 11,
		position: "absolute",
		left: 84,
		bottom: 179,
	},
	textThreeText: {
		backgroundColor: "transparent",
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		paddingTop: 11,
		position: "absolute",
		right: 99,
		bottom: 178,
	},
	textFourText: {
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		paddingTop: 11,
		backgroundColor: "transparent",
		position: "absolute",
		right: 94,
		top: 495,
	},
	savedThisMonthText: {
		backgroundColor: "transparent",
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		position: "absolute",
		right: 60,
		top: 305,
	},
	textSevenText: {
		backgroundColor: "transparent",
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		paddingTop: 11,
		position: "absolute",
		left: 62,
		top: 280,
	},
	creditsText: {
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		backgroundColor: "transparent",
	},
	textSixText: {
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		paddingTop: 11,
		backgroundColor: "transparent",
		marginTop: 2,
	},
	savedThisMonthTwoText: {
		color: "rgb(65, 72, 167)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 7,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		top: 306,
	},
})
