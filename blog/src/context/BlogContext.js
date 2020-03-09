import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_BlogPost":
            return [...state, 
                { 
                    id: Math.floor(Math.random() * 99999),
                    title: `Blog post #${ state.length + 1 }` 
                }
            ];
        case 'delete_BlogPost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
            break;
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_BlogPost' })
    };
};
const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_BlogPost', payload: id })
    };
};

export const { Context, Provider } = createDataContext( 
    blogReducer, 
    {
        addBlogPost, 
        deleteBlogPost 
    }, [] );