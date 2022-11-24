const fetchTours = () => {
  return fetch('https://course-api.com/react-tours-project').then((res) =>
    res.json()
  );
};

export default fetchTours;
