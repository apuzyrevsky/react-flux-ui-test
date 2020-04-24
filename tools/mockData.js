const volumes = [
  {
    id: 1,
    name: "SSD Volume",
    slug: "ssd-volume",
    userId: 1,
    size: 1,
    status: "available",
    description: "SSD Volume for fast boot",
    type: "SSD",
  },
  {
    id: 2,
    name: "HDD Volume",
    slug: "hdd-volume",
    userId: 1,
    size: 2,
    status: "available",
    description: "HDD Volume for storage",
    type: "HDD",
  },
  {
    id: 3,
    name: "Gotham volume",
    slug: "gotham-volume",
    userId: 1,
    size: 5,
    status: "used",
    description: "for gotham services usage only",
    type: "HDD",
  },
];

const users = [
  { id: 1, name: "Tolique" },
  { id: 2, name: "Stepan" },
  { id: 3, name: "Oleg" },
];

const newVolume = {
  id: null,
  name: "",
  userId: null,
  size: null,
  status: "",
  description: "",
  type: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newVolume,
  volumes,
  users,
};
