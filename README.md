# MUI 基礎学習プロジェクト

このプロジェクトは、Material-UI (MUI) の基本的なコンポーネントの使用方法を学ぶためのサンプルアプリケーションです。

## 機能概要

シンプルなフォーム画面を実装し、以下の MUI コンポーネントの使用方法を学習します：

1. **TextField** - テキスト入力フィールド
2. **Button** - ボタン
3. **Box** - レイアウトコンポーネント
4. **Typography** - テキスト表示

## 実装機能

- ユーザー名入力フィールド
- メールアドレス入力フィールド
- 送信ボタン
- リアルタイムでの入力内容表示

## 技術スタック

- React 18
- TypeScript
- Material-UI (MUI) v5
- Emotion (MUI のスタイリングエンジン)

## プロジェクト構造

```
mui-basic/
├── src/
│   ├── pages/
│   │   └── FormPage.tsx  // フォームページコンポーネント
│   ├── App.tsx          // メインアプリケーション
│   └── ...
└── ...
```

## セットアップ方法

1. 依存パッケージのインストール:

```bash
npm install
```

2. 開発サーバーの起動:

```bash
npm start
```

アプリケーションは http://localhost:3000 で起動します。

## 実装の特徴

1. **MUI コンポーネントの活用**

   - `TextField`による入力フォーム
   - `Button`によるアクション
   - `Box`によるレイアウト
   - `Typography`によるテキスト表示

2. **React の状態管理**

   - `useState`フックによる入力値の管理
   - リアルタイムでの表示更新

3. **MUI のスタイリング**
   - `sx`プロパティによるスタイリング
   - レスポンシブデザイン対応
   - Material Design に準拠した UI

## 学習ポイント

1. **基本的な MUI コンポーネントの使用方法**

   ```tsx
   <TextField
     fullWidth
     label="ユーザー名"
     value={username}
     onChange={(e) => setUsername(e.target.value)}
     variant="outlined"
   />
   ```

2. **MUI のスタイリング手法**
   ```tsx
   <Box
     sx={{
       maxWidth: 400,
       mx: 'auto',
       mt: 4,
       p: 3,
       boxShadow: 1,
       borderRadius: 1,
     }}
   >
   ```

## 注意点

- このプロジェクトは MUI の基礎学習用です
- 実際のプロダクションでは、バリデーションやエラーハンドリングなども実装する必要があります

## 参考リンク

- [MUI 公式ドキュメント](https://mui.com/)
- [React 公式ドキュメント](https://react.dev/)
- [TypeScript 公式ドキュメント](https://www.typescriptlang.org/)
