'use client'
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, TextField, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { Controller, useForm } from "react-hook-form";
import { object, string } from "yup";

const Page = () => {
  const PostSchema = object({
    title: string().required().min(3),
    body: string().required(),
  });
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<Omit<post, "userId" | "id">>({
    resolver: yupResolver(PostSchema),
    mode: "all",
  });
  const submitPost = (data: Omit<post, "userId" | "id">)=>{
    console.log(data);
    
    enqueueSnackbar("Added Post", {variant:"success"})

  }
  return (
    <form>
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "lightblue",
        padding: "2%",
        border: "2px solid black",
        borderRadius: "15px",
        transition: "ease-in-out",
      }}
    >
      <Typography sx={{margin:"0 auto",padding:"8px",fontSize:"26px",color:"black",}}>Add Post</Typography>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Title"
            required
            error={!!errors.title}
            helperText={errors.title?.message}
            sx={{ marginBottom: "20px" }}
          />
        )}
      />
      <Controller
        name="body"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            sx={{ marginBottom: "20px" }}
            label="Description"
            required
            error={!!errors.body}
            helperText={errors.body?.message}
          />
        )}
      />
      <Button
              type="button"
              variant="contained"
              size="large"
              disabled={!isValid || !isDirty}
              sx={{ marginLeft: "auto" }}
              onClick={handleSubmit(submitPost)}
            >
              Add
            </Button>
    </Container>
    </form>
  );
};

export default Page;
