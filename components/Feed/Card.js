import { Card, useTheme, Icon } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { timeAgo, timeago } from "../../utilities/timeAgo";

export const FeedCard = (props) => {
  const theme = useTheme();
  const PostData = props.doc.data();

  return (
    <Card
      style={styles.card}
      header={(props) => {
        return (
          <Card
            style={styles.card}
            header={(props) => {
              return (
                <View {...props} style={props.styles}>
                  <Image
                    source={{ uri: PostData.photoURL }}
                    style={{ height: 250 }}
                    resizeMode="cover"
                    progressiveRenderingEnabled
                  />
                </View>
              );
            }}
          >
            <View style={styles.cardBody}>
              <View style={styles.cardAuthor}>
                {/*<Avatar source={PostData.author.photo} />*/}
                <View style={styles.cardAuthorText}>
                  <Text category="s1">{PostData.authorName}</Text>
                  <Text category="s2">{timeAgo(PostData.time.toDate())}</Text>
                </View>
              </View>
              <View style={styles.postActionButtonContainer}>
                <Icon
                  name="heart-outline"
                  style={styles.postActionButtonIcon}
                  fill={theme["color-primary-transparent-400"]}
                />
                <Text>{PostData.likesCount}</Text>
                <Icon
                  name="message-circle"
                  style={styles.postActionButtonIcon}
                  fill={theme["color-primary-transparent-200"]}
                />
                <Text>{PostData.commentsCount}</Text>
              </View>
            </View>
          </Card>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    margin: -1,
    marginBottom: 3,
    borderWidth: 1,
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
