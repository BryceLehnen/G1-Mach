import {Button, Pressable, ScrollView, Text, View, StyleSheet, Picker, TextInput} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "../Styles/styles";
import submitTaskScreenStyles from "../Styles/submitTaskScreenStyles.js";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";
import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {doc, getDoc, setDoc, addDoc, collection, getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbEsCWfDuNABFe9E44lBS1OimB-pkBQeU",
    authDomain: "machrewardsapp.firebaseapp.com",
    databaseURL: "https://machrewardsapp-default-rtdb.firebaseio.com",
    projectId: "machrewardsapp",
    storageBucket: "machrewardsapp.appspot.com",
    messagingSenderId: "311919315732",
    appId: "1:311919315732:web:2004d4f538ef63f33b9001",
    measurementId: "G-WVTXPNPTNR"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
let userCred = null;
let userData = null;
signInWithEmailAndPassword(auth, "joey.knappenberger@gmail.com", "Joey2001*")
    .then(async (userCredential) => {
        // Signed in
        userCred = userCredential.user;
        const docRef = doc(db, "users", userCred.uid);
        console.log(docRef);
        const docSnap = await getDoc(docRef);
        console.log(docSnap);
        userData = docSnap.data();
        console.log(userData);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });





function SubmitTaskScreen({ navigation }) {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [tasks, setTasks] = React.useState([
        {label: 'Order Team Apparel', value: 'teamApparel'},
        {label: 'Order Team Bundle', value: 'teamBundle'},
        {label: 'Write a Blog', value: 'blog'},
        {label: 'Place Mach in Zwift', value: 'zwift'},
        {label: 'Birthday', value: 'birthday'},
        {label: 'Place Mach in IG', value: 'ig'},
        {label: 'Write a Review', value: 'review'},
        {label: 'Race in Mach Kit', value: 'raceMach'},
        {label: 'Send Photo', value: 'photo'},
        {label: 'Create Social Media Post', value: 'socialPost'},
        {label: 'Refer a Friend', value: 'referFriend'},
        {label: 'Sold Unit via Commission Code', value: 'commission'},
        {label: 'Mach Highlighted in Magazine', value: 'magazine'},
        {label: 'Create a UGC Video', value: 'ugcVideo'},
        {label: 'Custom Request', value: 'customRequest'},
    ]);

    ticket = {
        comment: '',
        type: '',
    };

    async function createNewTicket(com, type) {
        const docRef = doc(db, "users", userCred.uid);
        console.log(docRef);
        const docSnap = await getDoc(docRef);
        let id = docSnap.id;

        const ticketRef = await addDoc(collection(db, "tickets"), {
            comment: com,
            name: type,
            state: "pending",
            uid: id,
        });
        console.log("DOCUMENT ID: ", ticketRef.id);

        navigation.navigate("Home");
    }

    return (
        //<ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
                <View style={submitTaskScreenStyles.backButtonBox}>
                    <Pressable onPress={() => navigation.navigate("Home")}>
                        <Text style={submitTaskScreenStyles.backButton}>{'❮'}</Text>
                    </Pressable>
                </View>
                
                <View style={submitTaskScreenStyles.helpButtonBox}>
                    <Pressable style={submitTaskScreenStyles.helpButton} onPress={() => navigation.navigate("SubmitTaskHelp")}>
                        <Ionicons
                            name={'ios-help-circle-outline'}
                            size={40}
                            style={submitTaskScreenStyles.helpCircle}
                        />
                    </Pressable>
                </View>
                
                <View style={submitTaskScreenStyles.headerBox}>
                    <Text style={submitTaskScreenStyles.headerText}>Submit Task Completion</Text>
                </View>
                
                <View style={submitTaskScreenStyles.dropDownTask}>
                    <DropDownPicker
                        style={submitTaskScreenStyles.selectTask}
                        open={open}
                        value={value}
                        items={tasks}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setTasks}
                        onChangeValue={(value) => this.type = value}
                        placeholder="Select Task"
                        placeholderStyle={submitTaskScreenStyles.taskText}
                        searchable={true}
                        searchPlaceholder="Search task here..."
                        zIndex={1000}
                    />
                </View>
                <TextInput
                    style={submitTaskScreenStyles.insertText}
                    onChangeText={(text) => this.comment = text}
                    value={this.comment}
                    placeholder="Insert Link or Text..."
                    multiline={true}
                />
                
                <View style={submitTaskScreenStyles.submitButtonBox}>
                    <Pressable style={submitTaskScreenStyles.submitButton} onPress={() => createNewTicket(this.comment, this.type)}>
                        <Text style={submitTaskScreenStyles.submitButtonText}>Submit</Text>
                    </Pressable>
                </View>
            </View>
        //</ScrollView>
    );
}

export default SubmitTaskScreen;