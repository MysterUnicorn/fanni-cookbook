# fanni-cookbook
Fanni's cookbook!

## Folder structure
Place all content under the `content` folder. There are posts and recipes there.
### Posts
Under `/posts` each markdown (file with `.md` extension) corresonds to a post!

### Recipes
- Under `/recipes` each folder corresponds to a recipe. 
- Each recipe folder should be named after the recipe.
- The recipe itself should be placed inside an `index.md` folder.
- To upload a thumbnail image to the recipe, place inside `images` subfolder inside the recipe and name it `featured.jpg` or some other extension!

## To publish the changes
Run the following commands while located at the root of the repository:
```
git add .
git commit -m "content update"
git push
```

## Run locally
```
hugo serve
```
