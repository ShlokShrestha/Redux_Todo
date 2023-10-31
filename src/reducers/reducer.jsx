const initialData = {
  text: [],
};
const reducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        text: [
          ...state.text,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE_TODO":
      const newData = state.text.filter(
        (data) => data.id !== action.payload.id
      );
      return { ...state, text: newData };

    default:
      return state;
  }
};

export default reducer;
