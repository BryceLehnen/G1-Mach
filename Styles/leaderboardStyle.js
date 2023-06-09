import {StyleSheet} from "react-native";
let color = 'rgb(108, 207, 246)'
const leaderboardStyles = StyleSheet.create({
    header:{
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 40,
        marginTop: 5,
        letterSpacing: 4,
    },
    podium: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    },
    outerPerson: {
        marginRight: 0,
        marginLeft: '7%',
        width: '24%',
        display: 'block',
        textAlign: "center",
        paddingTop: 30,
    },
    person: {
        marginLeft: '7%',
        width: '24%',
        display: 'block',
        textAlign: "center",
    },
    personImg: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 50,
    },
    line: {
        width: '90%',
        borderBottomWidth: 2,
        borderColor: 'black',
    },
    noMargin: {
        margin: 0,
        fontWeight: "bold",
        textAlign: "center",
    },
    one: {
        margin: 0,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    tabs: {
        display: "flex",
        width: "100%",
    },
    tab: {
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",
        width: "20%",
        marginLeft: "10%",
        textAlign: "center",
    },
    tabText: {
      marginTop: 5,
      marginBottom: 5
    },
    myTable: {
        width: "70%",
    },
    myRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowText: {

    },
    rowTextBold: {
        width: '20%',
        fontWeight: "bold"
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
    },
    bold: {
        fontWeight: 'bold',
    },
    center: {
        textAlign: "center",
    },
});

export default leaderboardStyles;
