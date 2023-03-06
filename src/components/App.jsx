// import { Component } from 'react';
// import Header from '.';
// import Search from '.';

// class App extends Component {
//   render() {
//     return (
//       <div className='container'>
//         <Header onShowModalLogin={this.toggleModalLogin} />
//         <Search />
//       </div>
//     )
//   }
// };

// export default App



// video Repeta

// import { Component } from 'react';
// // import { RecipeList } from './RecipeList/RecipeList';
// // import { GlobalStyle } from './GlobalStyle';
// // import { Layout } from './Layout/Layout';
// // import initialRecipes from '../recipes.json';
// // import { RecipeForm } from './RecipeForm/RecipeForm';

// export class App extends Component {
//   state = {
//     recipes: [],
//   };
  
//   componentDidMount() {
//     const savedRecipes = localStorage.getItem('recipes');
//     if (savedRecipes !== null) {
//       const parsedRecipes = JSON.parse(savedRecipes);
//       this.setState({ recipes: parsedRecipes });
//       return;
//     }
//     this.setState({ recipes: initialRecipes });
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.recipe !== this.state.recipes) {
//       localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
//     }
//   };

//   addRecipe = newRecipe => {
//     this.setState(prevState => {
//       return {
//         recipes: [...prevState.recipes, newRecipe],
//       };
//     });
//   };

//   deleteRecipe = recipeId => {
//     this.setState(prevState => {
//       return {
//         recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
//       };
//     });
//   };

//   render() {
//     return (
//       <Layout>
//         <RecipeForm onSave={this.addRecipe} />
//         <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
//         <GlobalStyle />
//       </Layout>
//     );
//   }
// }