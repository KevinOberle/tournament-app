import React, { useState } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  Text,
  Input,
  Icon,
} from "@ui-kitten/components";

export const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  const RegisterButtonPress = () => navigation.navigate("Register");
  const LoginButtonPress = () => navigation.navigate("App");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <TopNavigation title="Tournament App" alignment="center" />
        <Divider />
        <Layout style={styles.container}>
          <ScrollView style={{ flex: 1 }}>
            <Layout style={styles.loginFormView}>
              <Text category="h5">Login</Text>
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
              <View style={styles.ButtonGroup}>
                <Button style={styles.Button} onPress={RegisterButtonPress}>
                  Register
                </Button>
                <Button style={styles.Button} onPress={LoginButtonPress}>
                  Login
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
