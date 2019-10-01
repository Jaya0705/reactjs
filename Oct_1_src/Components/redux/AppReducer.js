let state = {
    app : [{title: "Digitization"},
    {title: "Fresh2PI"},
    {title: "GWFM"},{title: 'GSS'},{title: "SIT"},{title: "Donation Tracking"},{title: "BSA"}],

}


export default function AppReducer(state, action) {
    switch(action.type){
        case "DISPLAY_APPLICATION":
            return [...state];

        default: return state
}

}