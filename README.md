This is the repository to clone to do the tutorial of the Custom Apps (https://app.gitbook.com/o/JZY4lQs3jDfTFvrnCKnh/s/xzAkCqB4ZW2cEKD9uaMb/technologies/custom-app)

You will need Node v14.21.3 

```nvm use XX```

#To install node_modules

```npm i```

#To use the right Node version

```nvm use```

#To run the custom app

```npm run dev```

The code is in src/

The framework executes the code in src/pages, you need to rename a folder "pages" to work on it.

In the 6JWT file, there is a "middleware.tsx". When you rename 6JWT to "pages", you need to move "middleware.tsx" in the /src file. When you rename it back to "6JWT", put back the "middleware.tsx" in it because he's not compatible with the others versions