import axios from "axios";

export const productAPI = async () => {
  await axios
    .get("/api/products")
    .then((response) => {
      console.log("data1", response);
      return response;
    })
    .catch((err) => {
        console.log("error", err)
        return err
    });
};
