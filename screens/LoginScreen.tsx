import { View } from "react-native";
import React, { useState } from "react";
import { Text, Card, Input, Button, Icon } from "@rneui/base";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { getProfile, login } from "../services/auth-service";
import { AxiosError } from "../services/http-service";
import Toast from "react-native-toast-message";
import { setIsLogin } from "../auth/auth-slice";
import { useAppDispatch } from "../redux-toolkit/hooks";

const LoginScreen = (): React.JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  // define yub type
  // https://www.youtube.com/watch?v=JhNxzPHipbY
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter email")
      .email("Email format is invalid"),
    password: yup
      .string()
      .required("Please enter password")
      .min(3, "Password must be at least 3 characters."),
  });

  // Apply react hook form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onLogin = async (data: any) => {
    try {
      const res = await login(data.email, data.password);
      if (res.status === 200) {
        dispatch(setIsLogin(true));
        Toast.show({type:'success',text1:'Login successfully!!'})
        // console.log('Login successfully!!');
      }
    } catch (error: any) {
      let err: AxiosError<any> = error;
      if (err.response?.status === 401) {
        Toast.show({ type: "error", text1: err.response.data.message });
        console.log(err.response.data.message);
      } else {
        Toast.show({ type: "error", text1: "Cannot connect to server" });
        console.log("Cannot connect to server");
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text h2>Thai-Nichi</Text>
      <Card containerStyle={{ padding: 10, width: "90%" }}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Email"
              leftIcon={{ name: "email" }}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Password"
              leftIcon={{ name: "key" }}
              rightIcon={
                <Icon
                  name={showPassword ? "eye" : "eye-off"}
                  type="feather"
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              keyboardType="default"
              secureTextEntry={!showPassword}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />
        <Button
          title={"Login"}
          size="lg"
          onPress={handleSubmit(onLogin)}
          loading={isSubmitting}
          disabled={!isValid}
        />
      </Card>
    </View>
  );
};

export default LoginScreen;
