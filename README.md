<h1 align=center> Interactive Menu</h1>
<h3 align=center>
  A simple <strong>SPA</strong> developed to showcase front-ent capabilities.
</h3>
<p align=center>
  <img src="https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="vue badge">
  <img src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white" alt="axios badge">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript badge">
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="sass badge">
</p>

---
## Design
The vintage and retro look was choosen due to lack of images of the products. Instead of hard-coding images of the products I thought of going with this look and to have illustration instead of images. The retro illustrations are provided by: [Octopus Design](https://oktopus.gumroad.com/?recommended_by=library). 

I tried to make the application feel modern even with a retro look, with animations and reactive elements all across the application.
The colors I used are tested with Adobe Color accessibility tools for a more comprehensible web page.

A little bit of attention went into making the page responsive to the resizing so that it can be used on smaller devices without losing it's structure.

## Code
The project uses **Typescript** mainly for it's optional static typing. **SCSS** was instead used to create variables inside all the different components of the application.
**Axios** was chosen for it's ease of use and compatibility across browsers.

## Configuration
Clone the repository locally
```
git clone https://github.com/RLungarella13/interactive-menu.git 
```
Install the required dependencies
```
npm install
```
To use the API create a `token.ts` file in the `src` folder in this way:
```
export const AUTH_TOKEN = '{your_token}'
```
And finally:
```
npm run serve
```
## Future Development
- Better API error handling;
- A more rich design;
- More information about the restaurant;
- Better animations;
---
<p align=right>
Software Used:<br/><br/>
  <img src="https://skillicons.dev/icons?i=figma,photoshop,vscode">

</p>

