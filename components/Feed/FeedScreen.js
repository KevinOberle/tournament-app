import { Divider, Layout, Spinner, TopNavigation } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import { db } from "../../utilities/Firebase/firebase";
import { FeedCard } from "./Card";

export const FeedScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(true);
  const [posts, setPosts] = useState([]);

  const QueryLimit = 12; //Will need to calculate based on layout columns and card height
  const CollectionRef = db.collection("posts");

  const GetPosts = () => {
    CollectionRef.limit(QueryLimit)
      .orderBy("time")
      .get()
      .then((querySnapshot) => {
        setPosts(querySnapshot.docs);
        setRefreshing(false);
        refreshFlatlist();
      })
      .catch((error) => console.log("Error getting documents: ", error));
  };

  useEffect(() => {
    GetPosts();
  }, []);

  const refreshFlatlist = () => setRefreshTrigger(!refreshTrigger);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <TopNavigation title="Tournament App" alignment="center" />
        <Divider />
        <Layout style={{ flex: 1 }}>
          {posts.length == 0 ? null : (
            <FlatList
              keyExtractor={(item) => item.id}
              refreshing={refreshing}
              onRefresh={<Spinner />}
              data={posts}
              onRefresh={GetPosts}
              extraData={refreshTrigger}
              renderItem={({ item }) => <FeedCard doc={item} />}
            />
          )}
        </Layout>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
