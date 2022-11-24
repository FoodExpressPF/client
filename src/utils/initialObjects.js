// These are objects we use to put in the creation of a useState
// const [filter, setFilter] = useState(INITIAL_FILTERS);

export const INITIAL_GLOBAL_STATE = {
  plates: [],
  allPlates: [],
  detail: [],
  allUsers: [],
  allOrders: [],
  user: {},
};

export const INITIAL_FILTERS = {
  name: "",
  type: "All",
  sortby: "name",
  offer: "all",
  asc: false,
};

export const INITIAL_PRODUCT_FORM = {
  name: "",
  description: "",
  price: 0,
  type: [],
  rating: 0,
  image: "",
  category: "",
  type_user: "admin",
  offer: "false",
};

export const INITIAL_USER_FORM = {
  name: "",
  email: "",
  direction: "",
  number_phone: "",
  banned: false,
  type_user: "",
};

export const INITIAL_ORDER_FORM = {
  state:'',
  coments:'',
  total:0,
  address:''
};
