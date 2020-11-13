import React, { useState } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  Text,
  Input,
  Icon,
  TopNavigationAction,
} from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";

export const RegisterScreen = ({ navigation }) => {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  const BackButtonPress = () => navigation.goBack();
  const RegisterButtonPress = () => navigation.navigate("App");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <TopNavigation title="Tournament App" alignment="center" />
        <Divider />
        <Layout style={styles.container}>
          <ScrollView style={{ flex: 1 }}>
            <Layout style={styles.loginFormView}>
              <Text category="h5">Create Account</Text>
              <Input
                style={styles.Input}
                label="First Name"
                value={firstName}
                onChangeText={setfirstName}
              />
              <Input
                style={styles.Input}
                label="Last Name"
                value={lastName}
                onChangeText={setlastName}
              />
              <Input
                style={styles.Input}
                label="E-mail"
                value={email}
                onChangeText={setEmail}
              />
              <Input
                style={styles.Input}
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureTextEntry}
                accessoryRight={renderIcon}
              />
              <Input
                style={styles.Input}
                label="Re-Enter Password"
                value={ConfirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={secureTextEntry}
              />
              <View style={styles.ButtonGroup}>
                <Button style={styles.Button} onPress={BackButtonPress}>
                  Back
                </Button>
                <Button style={styles.Button} onPress={RegisterButtonPress}>
                  Create Account
                </Button>
              </View>
            </Layout>
          </ScrollView>
        </Layout>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginFormView: {
    margin: 10,
    padding: 20,
    alignItems: "flex-start",
  },
  ButtonGroup: {
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 15,
  },
  Button: {
    marginRight: 5,
  },
  Input: {
    marginTop: 10,
  },
});
