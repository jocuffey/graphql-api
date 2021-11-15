/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      name
      ingredients {
        items {
          id
          name
          quantity
          recipeID
          createdAt
          updatedAt
        }
        nextToken
      }
      instructions {
        items {
          id
          info
          recipeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        ingredients {
          nextToken
        }
        instructions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
      id
      name
      quantity
      recipeID
      recipe {
        id
        name
        ingredients {
          nextToken
        }
        instructions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        quantity
        recipeID
        recipe {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInstruction = /* GraphQL */ `
  query GetInstruction($id: ID!) {
    getInstruction(id: $id) {
      id
      info
      recipeID
      recipe {
        id
        name
        ingredients {
          nextToken
        }
        instructions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listInstructions = /* GraphQL */ `
  query ListInstructions(
    $filter: ModelInstructionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstructions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        info
        recipeID
        recipe {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
