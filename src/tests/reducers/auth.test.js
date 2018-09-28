import authReducer from "../../reducers/auth";

test("Should correctly set state when login",() => {
  const state = {};
  const uid = "xxx";
  const action = {
    type: "LOGIN",
    uid
  };

  expect(authReducer(state,action)).toEqual({ uid });
})

test("Should correctly remove uid from store", () => {
  const uid = "xxx";
  const state = { uid }
  const action = {
    type: "LOGOUT"
  }

  expect(authReducer(state,action)).toEqual({});
})