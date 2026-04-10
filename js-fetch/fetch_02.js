const url = "https://api.api-ninjas.com/v1/animals?name=cheetah";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": "Your-Api-Key",
    "Content-Type": "application/json",
  },
};

fetch(url, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    //return data;
  })
  .catch((error) => {
    console.error("Something went wrong!", error);
  });