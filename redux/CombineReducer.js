import userReducers from "./reducers/userReducers";

const Allreducers = {
    user: userReducers,
}
console.log("---->", typeof Allreducers);

export default Allreducers;