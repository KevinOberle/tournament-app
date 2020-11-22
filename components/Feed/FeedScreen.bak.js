import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  PixelRatio,
} from "react-native";
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  Text,
  Input,
  Icon,
  Card,
  Avatar,
  useTheme,
} from "@ui-kitten/components";
import { db } from "../utilities/Firebase/firebase";
import { timeAgo } from "../utilities/timeAgo";

/*const postsData = [
  {
    id: 1,
    photo: require("../assets/waves.jpg"),
    author: {
      name: "Emersyn Oberle",
      photo: require("../assets/profilePike.png"),
    },
    time: "5 minutes ago",
    liked: false,
    likes: 2,
    comments: 15,
  },
  {
    id: 2,
    photo: require("../assets/waves.jpg"),
    author: {
      name: "Emersyn Oberle",
      photo: require("../assets/profilePike.png"),
    },
    time: "5 minutes ago",
    liked: false,
    likes: 2,
    comments: 1,
  },
  {
    id: 3,
    photo: require("../assets/waves.jpg"),
    author: {
      name: "Emersyn Oberle",
      photo: require("../assets/profilePike.png"),
    },
    time: "5 minutes ago",
    liked: false,
    likes: 2,
    comments: 15,
  },
];*/

const PostCard = (props) => {
  const theme = useTheme();
  const thisPost = props.post;

  return (
    <Card
      style={styles.card}
      header={(props) => {
        return (
          <View {...props} style={props.styles}>
            {
              <Image
                source={{ uri: thisPost.photoURL }}
                style={{ height: 250 }}
                resizeMode="cover"
                progressiveRenderingEnabled
              />
            }
          </View>
        );
      }}
    >
      <View style={styles.cardBody}>
        <View style={styles.cardAuthor}>
          {/*<Avatar source={thisPost.author.photo} />*/}
          <View style={styles.cardAuthorText}>
            <Text category="s1">{thisPost.authorName}</Text>
            <Text category="s2">{thisPost.timeAgo}</Text>
          </View>
        </View>
        <View style={styles.postActionButtonContainer}>
          <Icon
            name="heart-outline"
            style={styles.postActionButtonIcon}
            fill={theme["color-primary-transparent-400"]}
          />
          <Text>{thisPost.likesCount}</Text>
          <Icon
            name="message-circle"
            style={styles.postActionButtonIcon}
            fill={theme["color-primary-transparent-200"]}
          />
          <Text>{thisPost.commentsCount}</Text>
        </View>
      </View>
    </Card>
  );
};

export const FeedScreen = ({ navigation }) => {
  const theme = useTheme();
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    console.log("Logical width: " + Dimensions.get("window").width);
    console.log(
      "Physical width: " + Dimensions.get("window").width * PixelRatio.get()
    );
  }, []);

  useEffect(() => {
    //console.log(db);
    var postsRef = db.collection("posts");

    postsRef
      .get()
      .then(function (querySnapshot) {
        const newPosts = querySnapshot.docs.map((doc) => {
          const docData = doc.data();

          return {
            id: doc.id,
            data: { timeAgo: timeAgo(docData.time.toDate()), ...docData },
          };
        });

        //console.log(newPosts[0].data.authorName);

        setPostsData(newPosts);
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <TopNavigation title="Tournament App" alignment="center" />
        <Divider />
        <Layout style={styles.container} level="4">
          {postsData.map((post) => (
            <PostCard key={post.id} post={post.data} />
          ))}
        </Layout>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  card: {
    margin: -1,
    marginBottom: 3,
    borderRadius: 0,
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardAuthor: { flexDirection: "row" },
  cardAuthorText: {
    marginLeft: 10,
  },
  postActionButtonContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 90,
  },
  postActionButtonIcon: {
    height: 28,
    width: 28,
  },
});
