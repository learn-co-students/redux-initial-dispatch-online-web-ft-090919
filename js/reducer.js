let state; //starts off undefined without declaring

function changeState(state = { count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){ //calls the changestate reducer
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

dispatch({type: "@@INIT"}) //@@INIT calls dispatch function and passes initial action
