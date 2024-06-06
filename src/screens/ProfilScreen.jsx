// import React from "react";
// import { StatusBar, Text, View } from "react-native";
// import Animated, { FadeInUp } from "react-native-reanimated";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { fetchMatches } from "../../features/slices/Matches";

// export default function ProfilScreen() {
//   const matches = useSelector((state) => state.matches.matches);
//   const dispatch = useDispatch();

//   console.log("matches", matches);

//   const getMatches = async () => {
//     dispatch(fetchMatches());
//   };

//   useEffect(() => {
//     getMatches();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" />
//       <Animated.View style={FadeInUp}>
//         <Text style={styles.title}>List of Matches</Text>
//         {matches?.map((match) => (
//           <Text key={match.id}>{match.name}</Text>
//         ))}
//       </Animated.View>
//     </View>
//   );
// }

// const styles = {
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 24,
//   },
// };

import React, { useEffect } from "react";
import { StatusBar, Text, View, StyleSheet } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useSelector, useDispatch } from "react-redux";
import { fetchMatches } from "../../features/slices/Matches";

export default function ProfilScreen() {
  const matches = useSelector((state) => state.matches.matches);
  const dispatch = useDispatch();

  const getMatches = async () => {
    dispatch(fetchMatches());
  };

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"#1a6985"}
        translucent={true}
      />
      <Animated.View
        entering={FadeInUp.duration(1000).springify()}
        style={styles.content}
      >
        <Text style={styles.title}>List of Matches</Text>
        {matches?.map(
          (match) => (
            console.log("match", match),
            (
              <Text key={match.id} style={styles.matchText}>
                {match.name}
              </Text>
            )
          )
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  content: {
    backgroundColor: "#1a6985",
    borderRadius: 16,
    padding: 20,
    width: "90%",
    alignItems: "center",
    elevation: 10,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  matchText: {
    color: "#FFF",
    fontSize: 18,
    marginBottom: 10,
  },
});
