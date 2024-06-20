"use client";
import Loader from "@/app/components/Loader";
import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((jsonPosts) => {
        setPosts(jsonPosts);
        setIsLoading(false);
      });
  }, []);

  const handlePostClick = (postID: number) => {
    router.push(`/post/${postID}`);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant={"h1"}>Posts</Typography>
          <List sx={{ width: "100%", maxWidth: 480, bgcolor: "lightblue" }}>
            {posts.length > 0 ? (
              posts.map((p: post) => {
                return (
                  <Container
                    key={p.id}
                    sx={{
                      ":hover": { backgroundColor: "#709caa" },
                      transition: "0.4s ease-in-out",
                      cursor: "pointer",
                    }}
                  >
                    <ListItem
                      alignItems="flex-start"
                      key={p.id}
                      onClick={() => handlePostClick(p.id)}
                    >
                      <ListItemText
                        sx={{ color: "black" }}
                        primary={p.title}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="black"
                            >
                              {p.userId} -
                            </Typography>
                            {p.body.slice(0, 30)}...
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    {posts.length > 1 && (
                      <Divider variant="inset" component="li" />
                    )}
                  </Container>
                );
              })
            ) : (
              <Typography>No Posts Found!</Typography>
            )}
          </List>
        </Container>
      )}
    </>
  );
};

export default Page;
