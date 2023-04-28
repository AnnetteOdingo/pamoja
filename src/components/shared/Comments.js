import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import axios from "../../axios/index";

export default function Comments({ comments, comment, url }) {
  const { user } = useAuth();
  const commentRef = useRef();

  const submit = async (event) => {
    event.preventDefault();
    await axios()
      .put(`${url}`, {
        comment: commentRef.current.value,
        userId: user._id,
      })
      .then((res) => {
        commentRef.current.value = null;
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({ item, index }) => (
          <View
            style={{
              padding: 16,
              justifyContent: "flex-start",
              borderWidth: 1,
              borderColor: "#7c7c7c",
              marginBottom: 18,
            }}
            key={index}
          >
            <View style={{ maxWidth: 120, textAlign: "center" }}>
              {/* <Avatar source={{ uri: item.userAvatar }} /> */}
              <Text>{item.username}</Text>
            </View>
            <Text style={{ paddingLeft: 32 }}>{item.comment}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <TextInput placeholder={`Add a ${comment}...`} ref={commentRef} />

      <TouchableOpacity
        style={{
          marginTop: 28,
          height: 54,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={submit}
      >
        <Text style={{ color: "white" }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
