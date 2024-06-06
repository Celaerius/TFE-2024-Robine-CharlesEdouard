// import { yupResolver } from "@hookform/resolvers/yup";
// import React from "react";
// import { Controller, useForm } from "react-hook-form";
// import {
//   Button,
//   Image,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import * as yup from "yup";
// import * as ImagePicker from "expo-image-picker";
// import { useDispatch } from "react-redux";
// import { AccesUpdate } from "../../features/slices/Authentication";

// export default function UserForm() {
//   const dispatch = useDispatch();
//   const schema = yup.object().shape({
//     email: yup.string().email().required("Email is required"),
//     password: yup.string().required("Password is required"),
//     name: yup.string().required("Username is required"),
//     profilepicture: yup.string(),
//   });

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onsubmit = async (data) => {
//     try {
//       if (data) {
//         dispatch(AccesUpdate(data));
//       } else {
//         console.log("error", data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const PickAPicture = async (onChange) => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled && result.assets.length > 0) {
//       onChange(result.assets[0].uri);
//       return result.assets[0].uri;
//     }

//     return null;
//   };

//   return (
//     <View>
//       <Controller
//         control={control}
//         render={({ field }) => (
//           <TextInput
//             placeholder="Email"
//             onChangeText={(text) => field.onChange(text)}
//             value={field.value}
//           />
//         )}
//         name="email"
//         rules={{ required: true }}
//         defaultValue=""
//       />
//       {errors.email && <Text>{errors.email.message}</Text>}
//       <Controller
//         control={control}
//         render={({ field }) => (
//           <TextInput
//             placeholder="Password"
//             onChangeText={(text) => field.onChange(text)}
//             value={field.value}
//           />
//         )}
//         name="password"
//         rules={{ required: true }}
//         defaultValue=""
//       />
//       {errors.password && <Text>{errors.password.message}</Text>}
//       <Controller
//         control={control}
//         render={({ field }) => (
//           <TextInput
//             placeholder="Username"
//             onChangeText={(text) => field.onChange(text)}
//             value={field.value}
//           />
//         )}
//         name="name"
//         rules={{ required: true }}
//         defaultValue=""
//       />
//       {errors.name && <Text>{errors.name.message}</Text>}

//       <Controller
//         control={control}
//         render={({ field }) => (
//           <View>
//             <TouchableOpacity onPress={() => PickAPicture(field.onChange)}>
//               <Text>Choose a profile picture</Text>
//             </TouchableOpacity>
//             {field.value ? (
//               <Image
//                 source={{ uri: field.value }}
//                 style={{ width: 200, height: 200 }}
//               />
//             ) : null}
//           </View>
//         )}
//         name="profilepicture"
//         defaultValue=""
//       />
//       <Button onPress={handleSubmit(onsubmit)} title="Submit" />
//     </View>
//   );
// }

import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import * as yup from "yup";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { AccesUpdate } from "../../features/slices/Authentication";

export default function UserForm() {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
    name: yup.string().required("Username is required"),
    profilepicture: yup.string(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onsubmit = async (data) => {
    try {
      if (data) {
        dispatch(AccesUpdate(data));
      } else {
        console.log("error", data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const PickAPicture = async (onChange) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      onChange(result.assets[0].uri);
      return result.assets[0].uri;
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={"gray"}
              onChangeText={(text) => field.onChange(text)}
              value={field.value}
            />
          </View>
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.email && (
        <Text style={styles.errorText}>{errors.email.message}</Text>
      )}

      <Controller
        control={control}
        render={({ field }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={"gray"}
              onChangeText={(text) => field.onChange(text)}
              value={field.value}
              secureTextEntry={true}
            />
          </View>
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}

      <Controller
        control={control}
        render={({ field }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor={"gray"}
              onChangeText={(text) => field.onChange(text)}
              value={field.value}
            />
          </View>
        )}
        name="name"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.name && (
        <Text style={styles.errorText}>{errors.name.message}</Text>
      )}

      <Controller
        control={control}
        render={({ field }) => (
          <View style={styles.imagePickerContainer}>
            <TouchableOpacity
              style={styles.imagePickerButton}
              onPress={() => PickAPicture(field.onChange)}
            >
              <Text style={styles.imagePickerText}>
                Choose a profile picture
              </Text>
            </TouchableOpacity>
            {field.value ? (
              <Image
                source={{ uri: field.value }}
                style={styles.profileImage}
              />
            ) : null}
          </View>
        )}
        name="profilepicture"
        defaultValue=""
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit(onsubmit)}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 16,
    marginHorizontal: 20,
    elevation: 10,
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: "#EDEDED",
    padding: 20,
    marginVertical: 8,
    borderRadius: 16,
  },
  input: {
    color: "#000",
    fontSize: 16,
  },
  errorText: {
    color: "#FF6161",
    paddingBottom: 12,
    fontSize: 14,
  },
  imagePickerContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  imagePickerButton: {
    backgroundColor: "#1a6985",
    padding: 12,
    borderRadius: 16,
  },
  imagePickerText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
  profileImage: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 16,
  },
  submitButton: {
    backgroundColor: "#1a6985",
    padding: 12,
    borderRadius: 16,
    marginTop: 20,
  },
  submitButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});
