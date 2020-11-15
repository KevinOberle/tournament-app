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

  useEffect(() => {
    CollectionRef.limit(QueryLimit)
      .orderBy("time")
      .get()
      .then((querySnapshot) => {
        setPosts(querySnapshot.docs);
        setRefreshing(false);
        refreshFlatlist();
      })
      .catch((error) => console.log("Error getting documents: ", error));
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
              style={{ flex: 1, borderWidth: 0 }}
              keyExtractor={(item) => item.id}
              refreshing={refreshing}
              onRefresh={<Spinner />}
              data={[{ id: "bob" }]}
              extraData={refreshTrigger}
              itemRender={() => {
                return <Text>Hello</Text>;
              }}
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
