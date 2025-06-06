import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const FormPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信時の処理をここに追加
    console.log("送信されたデータ:", { username, email });
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 3,
        boxShadow: 1,
        borderRadius: 1,
      }}
    >
      <Typography variant="h5" component="h1" sx={{ mb: 3 }}>
        ユーザー情報フォーム
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="ユーザー名"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="メールアドレス"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
        </Box>

        <Button type="submit" variant="contained" fullWidth sx={{ mb: 3 }}>
          送信
        </Button>

        <Box
          sx={{
            p: 2,
            bgcolor: "grey.100",
            borderRadius: 1,
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            入力内容：
          </Typography>
          <Typography variant="body1">ユーザー名: {username}</Typography>
          <Typography variant="body1">メールアドレス: {email}</Typography>
        </Box>
      </form>
    </Box>
  );
};

export default FormPage;
