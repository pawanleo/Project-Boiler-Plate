import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./../../store";
// Define a type for the slice state
type BreadCrumbElements = {
  element_1: string;
  element_2: string;
};
interface LayoutState {
  header: boolean;
  footer: boolean;
  sidebar: boolean;
  breadcrumb: BreadCrumbElements;
}

// Define the initial state using that type
const initialState: LayoutState = {
  header: false,
  footer: false,
  sidebar: false,
  breadcrumb: { element_1: "", element_2: "" },
};
export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    withHeader: (state, action: PayloadAction<boolean>) => {
      state.header = action.payload;
    },
    withFooter: (state, action: PayloadAction<boolean>) => {
      state.footer = action.payload;
    },
    withSideBar: (state, action: PayloadAction<boolean>) => {
      state.sidebar = action.payload;
    },
    breadCrumbs: (state, action: PayloadAction<BreadCrumbElements>) => {
      state.breadcrumb = action.payload;
    },
  },
});
export const { withHeader, withFooter, withSideBar, breadCrumbs } =
  layoutSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.layout.value
const layoutReducer = layoutSlice.reducer;
export default layoutReducer;
