//
//  CoursesPage
//  GPA Calc
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class CoursesPage extends React.Component {

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
				style={styles.coursesPageView}>
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
						source={require("./../../assets/images/courses-page-background-mask.png")}
						style={styles.coursesPageBackgroundMaskImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 50,
						right: 50,
						top: 80,
						height: 539,
					}}>
					<Text
						style={styles.transactionsListText}>Cumulative GPA</Text>
					<Text
						style={styles.textText}>3</Text>
					<Text
						style={styles.gpaText}>Grade Point Average</Text>
					<Text
						style={styles.fallText}>2019 Fall</Text>
					<Text
						style={styles.todayText}>Courses</Text>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginTop: 16,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.comm1010Text}>COMM 1010</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.textTenText}>3</Text>
						<Text
							style={styles.aText}>A</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginTop: 25,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.delTacoText}>COMM 1800</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.textNineText}>3</Text>
						<Text
							style={styles.textEightText}>A</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginTop: 24,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.uberText}>ENWR 1510</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.textSevenText}>3</Text>
						<Text
							style={styles.textSixText}>A</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginTop: 24,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.starbucksText}>STAT 2120</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.textFiveText}>3</Text>
						<Text
							style={styles.textFourText}>A</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginTop: 25,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.amazonText}>CS 1010</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.textThreeText}>3</Text>
						<Text
							style={styles.textTwoText}>A</Text>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	coursesPageView: {
		backgroundColor: "white",
		flex: 1,
	},
	coursesPageBackgroundMaskImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 812,
	},
	transactionsListText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 26,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 30,
		paddingTop: 1,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 1,
	},
	textText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 19,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		paddingTop: 39,
		alignSelf: "center",
		marginTop: 12,
	},
	gpaText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		alignSelf: "flex-start",
		marginLeft: 89,
		marginTop: 7,
	},
	fallText: {
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 21.67,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 19,
		marginTop: 100,
	},
	todayText: {
		backgroundColor: "transparent",
		color: "rgb(49, 54, 112)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 18,
		alignSelf: "flex-start",
		marginTop: 50,
	},
	comm1010Text: {
		backgroundColor: "transparent",
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 21.67,
	},
	textTenText: {
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 21.67,
		backgroundColor: "transparent",
		marginRight: 84,
	},
	aText: {
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 21.67,
		backgroundColor: "transparent",
	},
	delTacoText: {
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 21.67,
		backgroundColor: "transparent",
	},
	textNineText: {
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 21.67,
		backgroundColor: "transparent",
		marginRight: 84,
	},
	textEightText: {
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 21.67,
		backgroundColor: "transparent",
	},
	uberText: {
		backgroundColor: "transparent",
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 21.67,
	},
	textSevenText: {
		backgroundColor: "transparent",
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 21.67,
		marginRight: 84,
	},
	textSixText: {
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 21.67,
		backgroundColor: "transparent",
	},
	starbucksText: {
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 21.67,
		backgroundColor: "transparent",
	},
	textFiveText: {
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 21.67,
		backgroundColor: "transparent",
		marginRight: 84,
	},
	textFourText: {
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 21.67,
		backgroundColor: "transparent",
	},
	amazonText: {
		backgroundColor: "transparent",
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 21.67,
	},
	textThreeText: {
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 21.67,
		backgroundColor: "transparent",
		marginRight: 84,
	},
	textTwoText: {
		color: "rgb(83, 83, 83)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 21.67,
		backgroundColor: "transparent",
	},
})
