import { add } from "@/redux/features/hashtag/hashtagSlice";
import { AppDispatch } from "@/redux/store";

export const validationAndSetupNewHashtag = (
  hashtagName: string,
  dispatch: AppDispatch
) => {
  const removedSpacesStr = hashtagName.replace(/ /g, "");
  if (removedSpacesStr !== "") {
    dispatch(add({ name: removedSpacesStr, active: true } ));
  }
};
