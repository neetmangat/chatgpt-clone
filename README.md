# The IMGenerator

## Production

- Deployment Link: https://chatgpt-clone-ecru.vercel.app
- GitHub Repo Link: https://github.com/neetmangat/chatgpt-clone
- YouTube Build Link: https://www.youtube.com/watch?v=1KPG3LiE4jU&t

## Development

1. Clone the repository and install dependencies

```bash
git clone https://github.com/neetmangat/chatgpt-clone chatgpt-clone && cd chatgpt-clone && npm install
```

2. Generate your own OpenAI API key on the [OpenAI Platform](http://platform.openai.com)

3. Set up a [Google Firebase](https://console.firebase.google.com/) account, Authentication, Firestore DB, and config

4. Add the server environment variables

```
cp .env.example .env.local
```

5. Add your own Firebase app's config in `/firebase.ts`

6. Run the development server:

```bash
yarn run dev
```

7. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
