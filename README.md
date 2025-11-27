# Zetapod website README

## 🚀 Tech Stack

This project uses the following technologies:

* React.js
* Next.js 14
* TypeScript
* Tailwind CSS
* Netlify
* Three.js

---

## 🌐 Deploying to Netlify

The original README includes a Netlify badge but no deployment steps.
Below is a clean, standard deployment guide for a Next.js 14 app.

### 1. Connect Your Repository

1. Go to **[https://app.netlify.com/](https://app.netlify.com/)**
2. Click **Add new site → Import an existing project**
3. Choose **GitHub/GitLab/Bitbucket**
4. Select your repository

### 2. Configure Build Settings

Use these settings:

| Setting           | Value           |
| ----------------- | --------------- |
| Build Command     | `npm run build` |
| Publish Directory | `.next`         |
| Node Version      | 18+             |

### 3. Add the Netlify Next.js Plugin

Install the plugin:

```bash
npm install @netlify/plugin-nextjs
```

Create a `netlify.toml` file in the project root:

```toml
[[plugins]]
package = "@netlify/plugin-nextjs"
```

### 4. Deploy

Click **Deploy Site** and Netlify will build and host your project.
