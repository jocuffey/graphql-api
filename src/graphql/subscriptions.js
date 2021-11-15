/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient {
    onCreateIngredient {
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
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient {
    onUpdateIngredient {
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
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient {
    onDeleteIngredient {
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
export const onCreateInstruction = /* GraphQL */ `
  subscription OnCreateInstruction {
    onCreateInstruction {
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
export const onUpdateInstruction = /* GraphQL */ `
  subscription OnUpdateInstruction {
    onUpdateInstruction {
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
export const onDeleteInstruction = /* GraphQL */ `
  subscription OnDeleteInstruction {
    onDeleteInstruction {
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
