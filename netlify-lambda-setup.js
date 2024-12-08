// First, create netlify.toml in your project root
// netlify.toml
[build]
  functions = "netlify/functions"
  publish = "public"

// Create a simple function in netlify/functions/hello.js
exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello from Netlify Lambda!" }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" }),
    };
  }
};

// package.json scripts
{
  "scripts": {
    "dev": "netlify dev"
  },
  "dependencies": {
    "@netlify/functions": "^2.0.0"
  },
  "devDependencies": {
    "netlify-cli": "^17.0.0"
  }
}

// Example frontend usage (public/index.html)
<!DOCTYPE html>
<html>
<body>
  <button onclick="callFunction()">Call Lambda</button>
  <script>
    async function callFunction() {
      const response = await fetch('/.netlify/functions/hello');
      const data = await response.json();
      console.log(data);
    }
  </script>
</body>
</html>

Let me help you set up Netlify Lambda functions using their generous free tier.



```javascript
// First, create netlify.toml in your project root
// netlify.toml
[build]
  functions = "netlify/functions"
  publish = "public"

// Create a simple function in netlify/functions/hello.js
exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello from Netlify Lambda!" }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" }),
    };
  }
};

// package.json scripts
{
  "scripts": {
    "dev": "netlify dev"
  },
  "dependencies": {
    "@netlify/functions": "^2.0.0"
  },
  "devDependencies": {
    "netlify-cli": "^17.0.0"
  }
}

// Example frontend usage (public/index.html)
<!DOCTYPE html>
<html>
<body>
  <button onclick="callFunction()">Call Lambda</button>
  <script>
    async function callFunction() {
      const response = await fetch('/.netlify/functions/hello');
      const data = await response.json();
      console.log(data);
    }
  </script>
</body>
</html>

```

Here's how to set up and use Netlify Lambda functions for free:

1. Initialize your project:
```bash
npm init -y
npm install netlify-cli -D
npm install @netlify/functions
```

2. Set up your project structure as shown in the artifact above.

3. Key things to know about the free tier:
- 125,000 function invocations per month
- 100 hours of runtime per month
- Functions can run up to 10 seconds per invocation
- 128MB memory per function

4. To develop locally:
```bash
npx netlify dev
```

5. To deploy:
```bash
git init
git add .
git commit -m "Initial commit"
npx netlify deploy
```

Your functions will be available at:
- Local: `http://localhost:8888/.netlify/functions/hello`
- Production: `https://your-site-name.netlify.app/.netlify/functions/hello`

Tips for staying within free tier:
1. Implement caching where appropriate
2. Keep functions concise and efficient
3. Monitor your usage in the Netlify dashboard
4. Set up usage alerts to avoid overages

Would you like me to show you how to add more complex functionality like database connections or authentication to your Lambda functions?
