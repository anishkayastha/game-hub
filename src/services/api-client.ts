import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3054d825745c4b3d9ec95b309604def7",
  },
});
