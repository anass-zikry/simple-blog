"use client";
import Loader from "@/app/components/Loader";
import { Card, CardContent, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const [post, setPost] = useState<post>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((jsonPost) => {
        setPost(jsonPost);
        setIsLoading(false);
      });
  }, [params.id]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",}}>
          <Typography variant="h2">Post</Typography>
          <Card sx={{ minWidth: 275 ,maxWidth:"95%"}}>
            <CardContent>
              <Typography variant="h5" component="div">
                {post?.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                User: {post?.userId}
              </Typography>
              <Typography variant="body2">
                {post?.body}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      )}
    </>
  );
};
export default Page;
